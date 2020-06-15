import React from 'react';
import '../preview-collection/collectionpreview.styles.scss';

const CollectionPreview = ({title, items}) => {
    //console.log({otherCollectionProps});
    
    return (
        <div className='collection-preview'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            {items
                .filter((item, idx) => idx < 4)
                .map(item => (
                <div key={item.id}>{item.name}</div>
            ))}
        </div>
    )
}

export default CollectionPreview;