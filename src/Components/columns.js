import _ from 'lodash'

export const COLUMNS = [
  {
    Header: 'fdcId',
    Footer: 'fdcId',
    accessor: 'fdcid',
    // disableFilters: true,
    // disableSortBy: true,
    sticky: 'left',
  },
  {
    Header: 'Description',
    Footer: 'Description',
    accessor: 'description',
    sticky: 'left',
    Cell: (row)=>{
      if(row.value.length > 20){
        return _.startCase(_.lowerCase(row.value)).substring(0,30)+"..."
      }else{
        return _.startCase(_.lowerCase(row.value))
      }
    }
  },
  {
    Header: 'Brand Name',
    Footer: 'Brand Name',
    accessor: 'brand',
    sticky: 'left',
    Cell: (row)=>{
      if(row.value.length > 10){
        return _.startCase(_.lowerCase(row.value)).substring(0,30)+"..."
      }else{
        return _.startCase(_.lowerCase(row.value))
      }
    }
  },
  {
    Header: 'Good Choice',
    Footer: 'Good Choice',
    accessor: 'goodChoice',
    sticky: 'left',
    Cell:(row)=>{
        if(row.row.original.tag == 16){
          return "-";
        }else{
          return row.value?'True':'False'
        }
    },
  },
]