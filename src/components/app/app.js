import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import './app.css';
import { Component } from 'react';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
          data: [
            {name: 'John C.', salary: 1800, increase: false, like: true, id: 1},
            {name: 'Alex M', salary: 800, increase: false, like: false, id: 2},
            {name: 'Clark K.', salary: 1100, increase: true, like: false, id: 3}
          ],
          search: '',   
          filter: ''   
        }
        this.newUserId = 4;
    }

    deleteItem = (id) => {
        this.setState(({data}) => { 
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        const newUser = {
            name,
            salary,
            increase: false,
            like: false,
            id: this.newUserId++
        }
        this.setState(({data}) => {
            if (name.length >= 3 && salary.length >= 2) {
                const newArr = [...data, newUser];
                return {
                    data: newArr
                }
            }
            
        })
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({  
            data: data.map(item => {   
                if (item.id === id) {  
                    return {...item, [prop]: !item[prop]}  
                }
                return item; 
            })
        }))
    }

    searchEmployeers = (items, search) => {
        if (search.length === 0) {
            return items;
        }
        return items.filter(item => {
            return item.name.indexOf(search) > -1  
        })
    }

    onUpdateSearch = (search) => {
        this.setState({search});
    }

    filterPost = (items, filter) => {
        switch (filter) {
            case 'like':
                return items.filter(item => {
                    if (item.like) {return item.like}
                })
            case 'moreThen1000':
                return items.filter(item => {
                    if (item.salary > 1000) {return item.salary}
                })
            default: 
                return items
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter})
    }

    render() {
        const {data, search, filter} = this.state;
        const employees = this.state.data.length;             
        const increased = this.state.data.filter(item => {   
            if(item.increase) {
                return item
            }
        }).length;
        const visibleData = this.filterPost(this.searchEmployeers(data,search), filter) 

        return (
            <div className="app">
                <AppInfo employees={employees} increased={increased}/>
                
                <div className='search-panel'>
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
                </div>
                <EmployeesList 
                    data={visibleData} 
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp} /> 
                <EmployeesAddForm onAdd={this.addItem}/>
    
            </div>
        )
    }
}

export default App;