import React from "react";
import './AddTodo.css';
import './SelectCountry'
// import SelectCountry from "./SelectCountry";
class AddTodo extends React.Component {

    state = {
        fName: '',
        lName: '',
        country: ''
    }

    handleOnChangeFName = (e) => {
        this.setState({
            fName: e.target.value,
        })
    }
    handleOnChangeLName = (e) => {
        this.setState({
            lName: e.target.value,
        })
    }

    handleOnClickOptionCountry = (e) => {
        this.setState({
            country: e.target.value
        })
    }
    handleOnClickButtonAdd = () => {
        const { fName, lName, country } = this.state;
        if (fName === '' || lName === '' || country === '') {
            alert('Failure');
        } else {
            //console.log(this.state);
            this.props.addGirl(
                {
                    id: Math.floor(Math.random() * 1000),
                    fName: fName,
                    lName: lName,
                    country: country,
                }
            );
            this.setState({
                fName: '',
                lName: '',
                country: ''
            })
        }
    }

    render() {
        return (
            <div className="container">
                <form>
                    <label>First Name</label>
                    <input
                        type="text"
                        placeholder="Your girl name.."
                        value={this.state.fName}
                        onChange={(e) => { this.handleOnChangeFName(e) }} />
                    <label >Last Name</label>
                    <input
                        type="text"
                        placeholder="Your girl last name.."
                        value={this.state.lName}
                        onChange={(e) => { this.handleOnChangeLName(e) }} />
                    <label label="country">Country</label>
                    <select
                        // value={this.state.country}
                        onClick={(e) => { this.handleOnClickOptionCountry(e) }}
                    >
                        <option value='VietNam'>VietNam</option>
                        <option value='America'>America</option>
                        <option value='Korea'>Korea</option>
                    </select>
                    {/* <h1>{this.state.country}</h1> */}
                    {/* <SelectCountry/> */}
                    <input
                        type="button"
                        value="Add"
                        onClick={() => { this.handleOnClickButtonAdd() }} />
                </form>
            </div>
        )
    }
}

export default AddTodo;