import React from "react";
import AddComponent from "./AddComponent";
import ChildComponent from "./ChildComponent";
class MyComponent extends React.Component {

    state = {
        jobs: [
            { id: 'job1', title: 'Developer', salary: '500' },
            { id: 'job2', title: 'Tester', salary: '400' },
            { id: 'job3', title: 'Project Manager', salary: '1000' },
        ],
        
    }
    
    addNewJob = (job)=>{
        // cách truyền thống
        // let currentJob = this.state.jobs;
        // currentJob.push(job);

        console.log("Job : ",job);
        this.setState({
            jobs : [...this.state.jobs,job],// dùng toán tử spread
            //jobs : currentJob
        })
    }

    deleteJob = (job)=>{
        let curentJob = this.state.jobs;
        curentJob = curentJob.filter(
            item => item.id !== job.id    
        )
        this.setState({
            jobs : curentJob,
        })
    }

    // Hàm này thường dùng để gọi API
    componentDidMount(){
        console.log(">> Run ComponentDidMount");
    }

    // Hàm này dùng để xử lí các dữ liệu cũ với các dữ liệu API mới gọi
    componentDidUpdate(prevProps,prevState){
        console.log(">> Run DidUpdate: ",'prev state: ',prevState,' current state: ',this.state);
    }

    render() {
        console.log(">> call render: ",this.state);
        return (
            <>
                <AddComponent 
                    addNewJob = {this.addNewJob} 
                    job = {this.state.jobs}
                />
                <ChildComponent 
                    arrJobs = {this.state.jobs}     
                    deleteJob = {this.deleteJob}
                />
            </>
        )
    }
}

export default MyComponent;