import React from 'react';
import _ from 'lodash'

const foodCategory = {
    '1': 'Baked Goods',
    '2': 'Beverages',
    '3': 'Cereal',
    '4': 'Cheese',
    '5': 'Desserts',
    '6': 'Fruits, Vegetables, Beans, Nuts & Seeds',
    '7': 'Grains & Pasta',
    '8': 'Meat, Poultry & Seafood',
    '9': 'Milk & Milk Substitutes',
    '10': 'Pre-Packaged Snacks',
    '11': 'Prepared Foods',
    '12': 'Processed Meat',
    '13': 'Sandwich Bread',
    '14': 'Sauces, Dressing & Dips',
    '15': 'Yogurt',
}

const categoryCriteria = {
    '1': ['<= 290 mg sodium per serving','<= 300 calories per serving'],
    '2': ['<= 25 calories per 8 fl.oz', 'No artificial or non-nutritive sweeteners', 'Juice must be 100% fruit juice'],
    '3': ['≤ 200 mg sodium per serving', '≥ 2 g fiber per serving', '≤ 10 g sugar per serving'],
    '4': ['≤ 350 mg sodium per serving'],
    '5': ['≤ 480 mg sodium per serving', '≤ 200 calories per serving'],
    '6': ['≤ 290 mg sodium per serving',
        'No added sugars, artificial or non-nutritive sweeteners', 'May only be packed in water or unsweetened 100% juice'],
    '7': ['≥ 3 g fiber per serving'],
    '8': ['≤ 290 mg sodium per serving'],
    '9': ['≤ 2.5 g fat per 8 fl. oz. (milk only)',
        'No added sugars, artificial or non-nutritive sweeteners (milk only)',
        'Unflavored (substitutes only)'],
    '10': ['≤ 200 calories per package',
        '≤ 7 g total fat per package',
        '≤ 2 g saturated fat per package',
         '≤ 200 mg sodium per package',
          '≤ 10 g sugar per package',
       '≥ 2 g fiber per package'],
    '11': ['≤ 480 mg sodium per serving'],
    '12': ['≤ 480 mg sodium per serving'],
    '13':['≤ 180 mg sodium per slice', '≥ 2 g fiber per slice'],
    '14':['≤ 350 mg sodium per serving'],
    '15': ['≤ 3 g fat per 8 oz.',
        '≤ 30 g sugar per 8 oz.']
}

function gcCriteriaNutrition(tag, type, value, servingSize){
    if(tag == 1){
        if(tag == 1 && type == 'sodium'){
            if(value <= 290){
                return "green"
            }else{
                return "red"
            }
        }
        if(tag == 1 && type == 'calories'){
            if(value <= 300){
                return "green"
            }else{
                return "red"
            }
        }
    }else if(tag == 2){
        const caloriesPer8floz = 0.11;
        if(tag == 2 && type == 'calories'){
            if(value/servingSize <= caloriesPer8floz){
                return "green"
            }else{
                return "red"
            }
        }
        if(tag == 2 && type == 'artificial'){
            if(value == 0){
                return "green"
            }else{
                return "red"
            }
        }
        if(tag == 2 && type == 'sweetener'){
            if(value == 0){
                return "green"
            }else{
                return "red"
            }
        }
    }else if(tag == 3){
        if(tag == 3 && type == 'sodium'){
            if(value <= 200){
                return "green"
            }else{
                return "red"
            }

        }
        if(tag == 3 && type == 'fiber'){
            if(value >= 2){
                return "green"
            }else{
                return "red"
            }
        }
        if(tag == 3 && type == 'sugars'){
            if(value <= 10){
                return "green"
            }else{
                return "red"
            }
        }
    }else if(tag == 4){
        if(tag == 4 && type == 'sodium'){
            if(value <= 350){
                return "green"
            }else{
                return "red"
            }
        }
    }else if(tag == 5){
        if(tag == 5 && type == 'sodium'){
            if(value <= 480){
                return "green"
            }else{
                return "red"
            }
        }
        if(tag == 5 && type == 'calories'){
            if(value <= 200){
                return "green"
            }else{
                return "red"
            }
        }
    }else if(tag == 6){
        if(tag == 6 && type == 'sodium'){
            if(value <= 290){
                return "green"
            }else{
                return "red"
            }
        }
        if(tag == 6 && type == 'artificial' ){
            if(value == 0){
                return "green"
            }else{
                return "red"
            }
        }
        if(tag == 6 && type == 'sweetener'){
            if(value == 0){
                return "green"
            }else{
                return "red"
            }
        }
    }else if(tag == 7){
        if(tag == 7 && type == 'fiber'){
            if(value >= 3){
                return "green"
            }else{
                return "red"
            }
        }
    }else if(tag == 8){
        if(tag == 8 && type == 'sodium'){
            if(value <= 290){
                return "green"
            }else{
                return "red"
            }
        }
    }else if(tag == 9){
        const fatPer8floz = 2.5/226.80
        if(tag == 9 && type == 'fat'){
            if(value/servingSize <= fatPer8floz){
                return "green"
            }else{
                return "red"
            }
        }
        if(tag == 9 && type == 'sweetener'){
            if(value  == 0){
                return "green"
            }else{
                return "red"
            }
        }
        if(tag == 9 && type == 'artificial'){
            if(value == 0){
                return "green"
            }else{
                return "red"
            }
        }
    }else if(tag == 10){
        if(tag == 10 && type == 'calories'){
            if(value <= 200){
                return "green"
            }else{
                return "red"
            }
        }
        if(tag == 10 && type == 'fat'){
            if(value <= 7){
                return "green"
            }else{
                return "red"
            }
        }
        if(tag == 10 && type == 'saturatedFat'){
            if(value <= 2){
                return "green"
            }else{
                return "red"
            }
        }
        if(tag == 10 && type == 'sodium'){
            if(value <= 200){
                return "green"
            }else{
                return "red"
            }
        }
        if(tag == 10 && type == 'sugars'){
            if(value <= 10){
                return "green"
            }else{
                return "red"
            }
        }
        if(tag == 10 && type == 'fiber'){
            if(value >= 2){
                return "green"
            }else{
                return "red"
            }
        }
    }else if(tag == 11){
        if(tag == 11 && type == 'sodium'){
            if(value <= 480){
                return "green"
            }else{
                return "red"
            }
        }
    }else if(tag == 12){
        if(tag == 12 && type == 'sodium'){
            if(value <= 480){
                return "green"
            }else{
                return "red"
            }
        }
    }else if(tag == 13){
        if(tag == 13 && type == 'sodium'){
            if(value <= 180){
                return "green"
            }else{
                return "red"
            }
        }
        if(tag == 13 && type == 'fiber'){
            if(value >= 2){
                return "green"
            }else{
                return "red"
            }
        }
    }else if(tag == 14){
        if(tag == 14 && type == 'sodium'){
            if(value <= 350){
                return "green"
            }else{
                return "red"
            }
        }
    }else if(tag == 15){
        const fatPer8flozYog = 3/226.80
        if(tag == 15 && type == 'fat'){
            if(value/servingSize <= fatPer8flozYog){
                return "green"
            }else{
                return "red"
            }
        }
        const sugarPer8flozYog = 30/226.80
        if(tag == 15 && type == 'sugars'){
            if(value/servingSize <= sugarPer8flozYog){
                return "green"
            }else{
                return "red"
            }
        }
    }
    return "black";
}

function ProductInformation(props) {
    return (
        props.selectedProduct?
        <div style={{display:"flex", flexDirection:"column",
        margin:"10px", padding: "10px", position:"relative"}}>
            <div style={{position:"fixed"}}>
                <div className=''>
                    <div>
                        <h1 style={{color:"blue"}}>Product Details</h1>
                    </div>
                    <div>
                        <span style={{fontWeight: "bold"}}>Product Name: </span>
                        <span>{_.startCase(_.lowerCase(props.selectedProduct.description))?? '-'}</span>
                    </div>

                    <div>
                        <span style={{fontWeight: "bold"}}>Product Brand: </span>
                        <span>{_.startCase(_.lowerCase(props.selectedProduct.brand))?? '-'}</span>
                    </div>

                    <div>
                        <span style={{fontWeight: "bold"}}>Calcium: </span>
                        <span>{props.selectedProduct.calcium  ?? '-'}</span>
                    </div>
                    <div>
                        <span style={{fontWeight: "bold"}}>Calories: </span>
                        <span style={{color: `${props.selectedProduct.calories && props.selectedProduct.tag && props.selectedProduct.servingSize
                            ? gcCriteriaNutrition(props.selectedProduct.tag, 'calories', props.selectedProduct.calories.split(' ')[0], props.selectedProduct.servingSize.split(' ')[0]) : 'black'}`}}>{props.selectedProduct.calories ?? '-'}</span>
                    </div>
                    <div>
                        <span style={{fontWeight: "bold"}}>Fiber: </span>
                        <span  style={{color: `${props.selectedProduct.fiber && props.selectedProduct.tag && props.selectedProduct.servingSize
                            ? gcCriteriaNutrition(props.selectedProduct.tag, 'fiber', props.selectedProduct.fiber.split(' ')[0] ,  props.selectedProduct.servingSize.split(' ')[0]) : 'black'}`}}>{props.selectedProduct.fiber ?? '-'}</span>
                    </div>
                    <div>
                        <span style={{fontWeight: "bold"}}>Iron: </span>
                        <span>{props.selectedProduct.iron ?? '-'}</span>
                    </div>
                    <div>
                        <span style={{fontWeight: "bold"}}>Potassium: </span>
                        <span>{props.selectedProduct.potassium ?? '-'}</span>
                    </div>
                    <div>
                        <span style={{fontWeight: "bold"}}>Protein: </span>
                        <span style={{color: `${props.selectedProduct.protein && props.selectedProduct.tag && props.selectedProduct.servingSize
                            ? gcCriteriaNutrition(props.selectedProduct.tag, 'protein', props.selectedProduct.protein.split(' ')[0] ,  props.selectedProduct.servingSize.split(' ')[0]) : 'black'}`}}>{props.selectedProduct.protein ?? '-'}</span>
                    </div>
                    <div>
                        <span style={{fontWeight: "bold"}}>Saturated Fat: </span>
                        <span style={{color: `${props.selectedProduct.saturatedFat && props.selectedProduct.tag && props.selectedProduct.servingSize
                            ? gcCriteriaNutrition(props.selectedProduct.tag, 'saturatedFat', props.selectedProduct.saturatedFat.split(' ')[0] ,  props.selectedProduct.servingSize.split(' ')[0]) : 'black'}`}}>{props.selectedProduct.saturatedFat ?? '-'}</span>
                    </div>
                    <div>
                        <span style={{fontWeight: "bold"}}>Sodium: </span>
                        <span style={{color: `${props.selectedProduct.sodium && props.selectedProduct.tag && props.selectedProduct.servingSize
                            ? gcCriteriaNutrition(props.selectedProduct.tag, 'sodium', props.selectedProduct.sodium.split(' ')[0] ,  props.selectedProduct.servingSize.split(' ')[0]) : 'black'}`}}>{props.selectedProduct.sodium ?? '-'}</span>
                    </div>

                    <div>
                        <span style={{fontWeight: "bold"}}>Sugars: </span>
                        <span style={{color: `${props.selectedProduct.sugars && props.selectedProduct.tag && props.selectedProduct.servingSize
                            ? gcCriteriaNutrition(props.selectedProduct.tag, 'sugars', props.selectedProduct.sugars.split(' ')[0] ,  props.selectedProduct.servingSize.split(' ')[0]) : 'black'}`}}>{props.selectedProduct.sugars ?? '-'}</span>
                    </div>

                    <div>
                        <span style={{fontWeight: "bold"}}>Total Fat: </span>
                        <span style={{color: `${props.selectedProduct.totalFat && props.selectedProduct.tag && props.selectedProduct.servingSize
                            ? gcCriteriaNutrition(props.selectedProduct.tag, 'fat', props.selectedProduct.totalFat.split(' ')[0] , props.selectedProduct.servingSize.split(' ')[0]) : 'black'}`}}>{props.selectedProduct.totalFat?? '-'}</span>
                    </div>

                    <div>
                        <span style={{fontWeight: "bold"}}>Vitamin D: </span>
                        <span>{props.selectedProduct.vitaminD ?? '-'}</span>
                    </div>
                    <div>
                        <span style={{fontWeight: "bold"}}>Artificial: </span>
                        <span style={{color: `${props.selectedProduct.artificial && props.selectedProduct.tag && props.selectedProduct.servingSize
                            ? gcCriteriaNutrition(props.selectedProduct.tag, 'artificial', props.selectedProduct.artificial ,  props.selectedProduct.servingSize.split(' ')[0]) : 'black'}`}}>{props.selectedProduct.artificial == 0 ? 'False' : 'True'}</span>
                    </div>
                    <div>
                        <span style={{fontWeight: "bold"}}>Sweetener: </span>
                        <span style={{color: `${props.selectedProduct.sweetener && props.selectedProduct.tag && props.selectedProduct.servingSize
                            ? gcCriteriaNutrition(props.selectedProduct.tag, 'sweetener', props.selectedProduct.sweetener ,  props.selectedProduct.servingSize.split(' ')[0]): 'black'}`}}>{props.selectedProduct.sweetener == 0 ? 'False' : 'True'}</span>
                    </div>
                    <div>
                        <span style={{fontWeight: "bold"}}>ServingSize: </span>
                        <span>{props.selectedProduct.servingSize ?? '-'}</span>
                    </div>
                    <div>
                        <span style={{fontWeight: "bold"}}>Food Category: </span>
                        <span>{props.selectedProduct.tag == '16' ? '-' : foodCategory[props.selectedProduct.tag]}</span>
                    </div>
                    <div>
                        <span style={{fontWeight: "bold"}}>Good Choice: </span>
                        <span>{props.selectedProduct.goodChoice == '16' ? '-' : (props.selectedProduct.goodChoice == 0 ? 'False':'True')}</span>
                    </div>
                    <div>
                        <span style={{fontWeight: "bold"}}>Good Choice Criteria:<br/></span>
                        {
                            props.selectedProduct.tag != 16 ?
                                categoryCriteria[props.selectedProduct.tag].map((text, index)=>{
                                    return <span key={index}>{text}<br/></span>
                                }) 
                         :''}
                    </div>
                </div>
                <div style={{width:"90%"}}>
                    <h1 style={{color:"blue"}}>Ingredients</h1>
                    <div>
                        <span>{props.selectedProduct.ingredients.match(/(?<=ingredients:|INGREDIENTS:).*/)?.[0] || props.selectedProduct.ingredients}</span>
                    </div>
                </div>
            </div>
        </div>:<></>
    );
}

export default ProductInformation;