import React from 'react';
import { connect } from 'react-redux';
import { selectItem } from '../actions';

const ItemList = props => {
    
    const renderList = () => {
        return props.Item.map(item => {
            return(
                <div className="item" key={item.title}>
                    <div className="right floated content">
                        <button 
                        className="ui button primary"
                        onClick={() => props.selectItem(item)}
                        >Select</button>
                    </div>
                    <div className="content">{item.title}</div>
                </div>
            )
        })
    }
    return <div className='ui divided list'> {renderList()}</div>
}

const mapStateToprops = state => {
    console.log(state)
    // console.log({Item:state.Item})
    return {Item:state.Item}
} // -> stroe를 사용하기 위해 컴포넌트에서 선언. connect()()를 통해서 ItemList에 props로 Item과 selectItem을 전달하는 것이다.

export default connect(mapStateToprops,{selectItem})(ItemList)
