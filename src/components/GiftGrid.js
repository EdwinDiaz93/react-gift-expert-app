import React, { useEffect, useState } from 'react';
import { useFetchGifts } from '../hooks/useFetchGifts';
import { GiftGridItem } from './GiftGridItem';

const GiftGrid = ({category}) => {
        
    const {loading,data:images}=useFetchGifts(category);    
    return (
        <>
        {loading && <h1 className="animate__animated  animate__flash">Cargando....</h1>}
        <div className="card-grid">            
            {
                images.map(img=>(
                    <GiftGridItem
                        key={img.id}
                        {...img}
                    />
                ))
            }

        </div>    
        </>
        );

}
// GiftGrid.propTypes = {
// }

export default GiftGrid
