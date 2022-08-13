import React from "react";
import './ShowTodo.css'
class ShowTodo extends React.Component {



    render() {
        const { listGirl,deleteGirl } = this.props;
        console.log(listGirl);
        return (
            <>
                <div className="list-girl">
                    {
                        listGirl && listGirl.length > 0 && listGirl.map(
                            (item, index) => {
                                return (
                                    <div className="list-item" key={item.id}>{item.lName} {item.fName} - {item.country}
                                        <span className="control-button">
                                            <button 
                                            className="btn-custom"
                                            >Edit</button>
                                            <button 
                                            className="btn-custom"
                                            onClick={()=>deleteGirl(item.id)}>Delete</button>
                                        </span>
                                    </div>
                                )
                            }
                        )
                    }
                </div>
            </>

        )
    }
}

export default ShowTodo;