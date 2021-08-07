import { combineReducers } from "redux"
const ItemReducer = () => {
    return [
        {title: 'Item 1', duration: '4:00'},
        {title: 'Item 2', duration: '3:00'},
        {title: 'Item 3', duration: '2:00'},
        {title: 'Item 4', duration: '5:00'},

    ]
}

const selectedItemReducer = (selectedItem = null, action) => {
    if (action.type === 'ITEM_SELECTED') {
        return action.payload
    }
    return selectedItem
}

export default combineReducers({
    Item: ItemReducer,
    selectedItem: selectedItemReducer,
})