import {useState, useEffect, useMemo, useRef} from "react";
import React from 'react';
import { useTable, usePagination, useSortBy,useFilters} from 'react-table'
import { COLUMNS } from './columns'
import { ColumnFilter } from './ColumnFilter'
import products from '../Data/products'
import axios from 'axios'
import qs from 'qs'

const ProductTable = (props) => {
    const [MOCK_DATA, setMOCK_DATA] = useState([])
    const [keyword, setKeyWord] = useState("")

    useEffect(()=>{
      try{
        let data = qs.stringify({
   
        });
        let config = {
          method: 'get',
          url: 'http://localhost:8080/fetchAll',
          headers: { },
          data : data
        };
        
        axios(config)
        .then((response) => {
          setMOCK_DATA(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
        
      }catch(error){
        console.log(error.message)
      }
    }, [])


    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => MOCK_DATA, [MOCK_DATA])

    const defaultColumn = React.useMemo(
        () => ({
            Filter: ColumnFilter
            }),
        []
    )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        footerGroups,
        rows,
        page,
        nextPage,
        previousPage,
        canPreviousPage,
        canNextPage,
        pageOptions,
        state,
        gotoPage,
        pageCount,
        setPageSize,
        prepareRow
      } = useTable(
        {
          columns,
          data,
          defaultColumn,
          initialState: { pageIndex: 0 }
        },
        useFilters,
        useSortBy,
        usePagination,
      )
    
      const { pageIndex, pageSize } = state

    return (
      <div className="" style={{maxWidth:"60%", maxHeight:"800px", margin:"10px", padding: "10px"}}>
        <table {...getTableProps() } className="" style={{width:"100%", height:"800px", tableLayout: 'fixed' }}>
          <thead className="">
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()} className="">
                {headerGroup.headers.map(column => (
                  <th className="" {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render('Header')} 
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="" {...getTableBodyProps()} style={{width:"120px", height:"200px", overflow:"auto"}}>
            {page.map((row,index) => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return <td className={``} {...cell.getCellProps()}><div className="">{cell.render('Cell')}</div></td>
                  })}
                  <td className=''>
                    <div className="">
                      <button style={{textDecoration:"underline", marginLeft:'1rem'}} onClick={() => {
                          props.setSelectedProduct(row.original);
                          props.setClicked(true);
                        }}>detail
                      </button>
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <div className="">
          <button onClick={() => previousPage()} disabled={!canPreviousPage}>{'<'}</button>{' '}
          <button onClick={() => nextPage()} disabled={!canNextPage}>{'>'}</button>{' '}
          <span>Page <strong>{pageIndex + 1} of {pageOptions.length}</strong>{' '}</span>
          <span>| Go to page:{' '}
            <input
              className=""
              type='number'
              defaultValue={pageIndex + 1}
              onChange={e => {
                const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
                gotoPage(pageNumber)
              }}
              style={{ width: '50px' }}
            />
          </span>{' '}
        </div>
      </div>

    );
  };
  
  export default ProductTable;