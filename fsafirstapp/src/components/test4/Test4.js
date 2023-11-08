import {useState} from 'react'

function Test4(){

    let [students,setStudnets]=useState([
        {sno:100,name:"kiran"},
        {sno:200,name:"vikas"},
        {sno:300,name:"bhanu"},
        {sno:400,name:"madhu"},
        {sno:500,name:"vasu"},
        {sno:600,name:"manasa"}
    ])

    function addStudent(){
        setStudnets([...students,{sno:700,name:"test"}])
    }

    function deleteStudent(index){
        let copyStdents=[...students]
        copyStdents.splice(index,1)
        setStudnets(copyStdents)
    }

    return(
        <div>
            <h1 className="display-1 text-primary">Users List</h1>
            <button className="btn btn-success" onClick={addStudent}>Add New Student</button>
            {/* students table */}
            <table className="table">
                <thead>
                    <tr>
                        <th>Sno</th>
                        <th>Name</th>
                        <th>Operations</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map((stdObj,index)=><tr key={stdObj.sno}>
                            <td>{stdObj.sno}</td>
                            <td>{stdObj.name}</td>
                            <td><button className='btn btn-danger' onClick={()=>deleteStudent(index)}>x</button></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Test4;