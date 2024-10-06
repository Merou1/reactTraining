import propTypes from 'prop-types'
function List (props){

    const items = props.items;
    const category = props.category;

    const listItems = items.sort().map(item => <li  key={item.id}>Name: {item.name} : &nbsp; <b>{item.calories}</b></li>)

    return(
        <div className="List">
            <h2 className="listCategory">{category}</h2>
            <ul className="listItems">
                {listItems}
            </ul>
        </div>
    );
}
List.defaultProps = {
    category : "category",
    items : [] //because items is an array so the default prop should match the prop type 
}
List.propTypes = {
    category : propTypes.string,
    items : propTypes.arrayOf(propTypes.shape(
        {
            id:propTypes.number,
            name:propTypes.string,
            calories:propTypes.string
        }
    ))
}

export default List;