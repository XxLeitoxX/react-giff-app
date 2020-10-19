import React, { useState } from 'react'
import AddCategory from './componentes/AddCategory';
import { GifGrid } from './componentes/GifGrid';

export const GiffExpertApp = () => {

    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball']
    const [categories, setcategories] = useState(['One Punch']);

    /*const handleAdd = () => {
        setcategories( ['Naruto', ...categories] );
    }*/

    return (
        <div>
            <h2>GiffExpertApp</h2>
            <AddCategory setcategories={ setcategories } />
            <hr></hr>
            <ol>
                {
                categories.map( category => (
                    <GifGrid 
                    key={category}
                    category={ category } 
                    />
                ))
                }
            </ol>
        </div>
    )
}
