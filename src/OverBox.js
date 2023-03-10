import React, { useState } from "react";

import "./App.css";

const OverBox = ({onSubmit,index=-1,value=""}) => {

    let [txt,setTxt] = useState("");

    let [f,setF] = useState(false);

    const onChange = (e) => {
        setF(true);
        setTxt(e.target.value);
        console.log(txt);
    }

    return <div className="box">
        <input type="text" value={!f ? value : txt}  onChange={onChange} />
        {index!=-1 && <button className="btn" onClick={()=>onSubmit(txt,index)}>Done</button>}
        {index==-1 && <button className="btn" onClick={()=>onSubmit(txt,1)}>In Front</button>}
        {index==-1 && <button className="btn" onClick={()=>onSubmit(txt,0)}>In Back</button>}
    </div>
}

export default OverBox;