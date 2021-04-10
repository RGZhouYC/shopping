import React, { useState } from 'react';
import Item from './Item'

const Items = (items) => {
    const [items, setItems] = useState()

    return (
        <>
        {items.map((item) => (
            <Item key={item.id}/>
        ))}
        </>
    )
}

export default Items