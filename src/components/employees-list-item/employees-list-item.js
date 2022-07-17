import './employees-list-item.css';

// one employee
const EmployeesListItem = (props) => {
  
        const {name, salary, increase, like, onDelete, onToggleProp} = props;
        let classNames = "list-group-item d-flex justify-content-between";
        if (increase) {
            classNames += ' increase';
        }
        if (like) {
            classNames += ' like';
        }

        return (
            <li className={classNames}>
                <span className="list-group-item-label" 
                      onClick={onToggleProp}
                      data-toggle="like">{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
                <div className="d-flex justify-content-center align-items-center">
                    <button onClick={onToggleProp}
                            data-toggle="increase"
                            type="button"
                            className="btn-cookie btn-sm">
                        <i className="fas fa-cookie"></i>
                    </button>
                    <button onClick={onDelete} type="button" className="btn-trash btn-sm">
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }

export default EmployeesListItem;