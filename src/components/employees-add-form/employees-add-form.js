import './employees-add-form.css';
import './employees-add-form.scss';
import { Component } from 'react';

// add employees
class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.name, this.state.salary);
        this.setState({
            name: '',
            salary: ''
        })  
    }

    static onLog = () => {
        console.log('hey');
    }

    render () {
        const{name,salary} = this.state;

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}>
                    <input onChange ={this.onValueChange}
                        type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?"
                        name = "name"
                        value={name} /> 
                    <input onChange ={this.onValueChange}
                        type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?"
                        name = "salary"
                        value={salary} />
    
                    <button type="submit"
                            className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
}

EmployeesAddForm.onLog();

export default EmployeesAddForm;