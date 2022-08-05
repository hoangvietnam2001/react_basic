import React from "react";
class AddComponent extends React.Component {

    state = {
        title: '',
        salary: ''
    }

    handleOnChangeTittleJob = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    handleOnChangeSalary = (e) => {
        this.setState({
            salary: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.title === '' || this.state.salary === '') {
            alert('Please Enter Full Infor');
            return;//de thoat ham
        } else {
            console.log(">>State : ", this.state);
            this.props.addNewJob({
                id: Math.floor(Math.random() * 1000),
                title: this.state.title,
                salary: this.state.salary,
            });

            this.setState({
                title: '',
                salary: ''
            })
        }
    }
    render() {
        return (
            <>
                <form >
                    <label htmlFor="tittleJob">Job's tittle :</label>
                    <br />
                    <input
                        type="text"
                        value={this.state.title}
                        onChange={(e) => { this.handleOnChangeTittleJob(e) }} />
                    <br />
                    <label htmlFor="salary">Salary :</label>
                    <br />
                    <input
                        type="text"
                        value={this.state.salary}
                        onChange={(e) => { this.handleOnChangeSalary(e) }} />
                    <br />
                    <br />
                    <input
                        type="submit"
                        value="Submit"
                        onClick={(e) => { this.handleSubmit(e) }} />
                </form>

            </>

        )
    }
}

export default AddComponent;