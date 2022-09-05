import React from "react";
import ItemCount from "./ItemCount/itemCount";

const Itemlistcontainer = (props) => {
    const onAdd = (quantity) => {
      console.log (`Compraste ${quantity} unidades`);
    }

    return (
        <div>
            <h1>{props.greeting}</h1>
            <ItemCount initial={1} stock={10} onAdd={onAdd}/>
        </div>
    )
}

export default Itemlistcontainer;