import React from 'react';
import Card from './Card';


const ArrayCards = ({dataActivity}) => {
 return(
     <div className="zone grid-wrapper">
     {
        dataActivity.map((data, i)=> {
            return(
                <Card 
                    key={dataActivity[i].id}
                    name={dataActivity[i].name} 
                    image={dataActivity[i].image} 
                    price={dataActivity[i].price.adults} 
                    duration={dataActivity[i].duration} 
                    description={dataActivity[i].description}
                    taxonomy={dataActivity[i].taxonomy}
                />
            )
         })
     }
     </div>
     
 )
}

export default ArrayCards;