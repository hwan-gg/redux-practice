import React from 'react'
import "./Cage.css";
import actions from "./actions.js"
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'antd'

function Cage( props ) {

    const animal = useSelector( state => ( state[`cage${props.cageNum}`] ) );
    const dispatch = useDispatch()
    return (
        <div className="cage"> 
            { animal } 
            <Button type="primary" onClick={() => {
                dispatch(actions.cage[`replaceCage${props.cageNum}`](animal));
            }} danger> Change </Button>
        </div>
        
    )
}

export default Cage