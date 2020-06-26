import React from 'react';
import './collectionpreview.styles.scss';
import CollectionItem from '../collection-item/CollectionItem.component';

const CollectionPreview = ({title, items}) => {
    //console.log({otherCollectionProps});
    
    return (
        <div className='collection-preview'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'>
                {items
                    .filter((item, idx) => idx < 4)
                    .map((item) => (
                    <CollectionItem key={item.id} item={item} />                
                ))}
            </div>            
        </div>
    )
}

export default CollectionPreview;