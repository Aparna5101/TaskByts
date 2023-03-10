import React from "react";

import "./App.css"

const ListTile = ({tile,onEdit,onDelete}) => {
    return <div className="Tile">
        {tile}
        <div>
            <div className="sm-btn" onClick={onEdit}>
             Update
            </div>
            <div className="sm-btn" onClick={onDelete}>
             Delete
            </div>
        </div>
    </div>
}


const List = ({Tiles,onEdit,onDelete}) => {


    return <div className="List">
        {
            Tiles.map( (t,i) => (
                <ListTile tile={t} onDelete={()=>onDelete(i)} onEdit={()=>onEdit(i)} />
            ))
        }
    </div>
}

export default List;