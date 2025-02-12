import { useState, useEffect } from "react";

import { GifItem } from "./GifItem";
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

    //customHook
    const { images, isLoading } = useFetchGifs( category );
    
    console.log( isLoading );


    return (
        <>
            <h3>{ category }</h3>
            {
                isLoading && (<h2>Loading...</h2>)
            }

            <div className="card-grid">
                {
                    images.map( ( image ) => (
                        <GifItem 
                            key={ image.id }
                            { ...image }
                        />
                    ))
                }
            </div>
        </>
    )
}
