import React from "react";
import AddTodo from "./AddTodo";
import ShowTodo from "./ShowTodo";
class ListTodo extends React.Component {

    state = {
        listGirl: [
            { id: 'g1', fName: 'Đức', lName: 'Phan Thị', country: 'VietNam' },
            { id: 'g2', fName: 'Swift', lName: 'Taylor', country: 'America' },
            { id: 'g3', fName: 'Tae Hy', lName: 'Kim', country: 'Korea' },
        ]
    }

    addGirl = (girl) => {
        if (girl) {
            this.setState({
                listGirl: [...this.state.listGirl, girl],
            })
        } else {
            alert('No girl added');
        }
    }

    deleteGirl = (id) => {
        this.setState({
            listGirl: this.state.listGirl.filter(item => item.id !== id)
        })
    }
    render() {
        const { listGirl } = this.state;
        return (
            <>
                <AddTodo
                    addGirl={this.addGirl}
                    
                />
                <ShowTodo
                    listGirl={listGirl}
                    deleteGirl={this.deleteGirl} />
            </>
        )
    }
}

export default ListTodo;