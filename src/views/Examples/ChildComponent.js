import React from "react";
import './style.scss'

class ChildComponent extends React.Component {

    state = {
        isShow: false,
    }

    handleShowHide = () => {
        this.setState({
            isShow: !this.state.isShow,
        })
    }

    handleOnClickDelete = (job) => {
        // console.log(job);
        this.props.deleteJob(job);
    }

    render() {
        let { arrJobs } = this.props;
        let { isShow } = this.state;
        //let checkShow = isShow === true ? 'Show is true' : 'Show is False';
        //console.log(checkShow);
        // console.log(arrJobs);
        return (
            <>
                {isShow === false ?
                    <div>
                        <button
                            onClick={() => { this.handleShowHide() }}
                            style={{color:'red'}}
                            >Show</button>
                    </div>
                    :
                    <>
                        <div className="list-jobs">
                            {arrJobs.map((item, index) => {
                                return (
                                    <div key={item.id}>{item.title} - {item.salary} $ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <span
                                            className="fontx"
                                            onClick={() => this.handleOnClickDelete(item)}
                                        >x</span></div>
                                )
                            })}
                        </div>
                        <div>
                            <button onClick={() => { this.handleShowHide() }}>Hide</button>
                        </div>
                    </>
                }
            </>
        )
    }
}
export default ChildComponent;