import React from 'react';
import { connect } from 'react-redux';

const ItemDetail= ({selectedItem}) => {

    return (
        <>
    {!selectedItem ? (
        <div>Please select a song!</div>
    ): (
        <div>
             <h3>노래 상세</h3>
             <p>제목: {selectedItem.title}</p>
             <p>시간: {selectedItem.duration}</p>
        </div>
    )}
    
    </>
    )
}

const mapStateToprops = state => {
    return { selectedItem: state.selectedItem}
}

export default connect(mapStateToprops)(ItemDetail)