import React, { useState } from 'react'
import {Table, Navbar } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { authConstants } from '../../actions/constant'
import { getAllStudent } from '../../actions/student.action'
import Layout from '../../components/Layout'
import Modal from "../../components/UI/modal"
import Input from "../../components/UI/input"
import { resultPost } from '../../actions/result.action'

export default function Student() {
    
    const [maths, setMaths] = useState(0);
    const [physics, setPhysics] = useState(0);
    const [chemistry, setChemistry] = useState(0);
    const [remark, setRemark] = useState('');
    const [show,setShow]=useState(false);
    const [student,setStudent]=useState({})
    const [success,setSucces]=useState(false);
    // const [description, setDescription] = useState("");
    
    const dispatch = useDispatch()
    var students = useSelector(state => state.students)
    students=students.students;

    const onHide=()=>
    {
        setShow(false);
        console.log("Closed")
    }
    const handleClose=()=>
    {
        
        const result={
            student:student._id,
            status:true,
            marks:[
                {
                    subjectName:"maths",
                    gotMarks:maths,
                    totalMarks:100
                },
                {
                    subjectName:"physics",
                    gotMarks:physics,
                    totalMarks:100
                },
                {
                    subjectName:"chemistry",
                    gotMarks:chemistry,
                    totalMarks:100
                }
            ]
        }
        console.log(result);
        dispatch(resultPost(result));
        setSucces(true);

        

    }

    const renderResultDeclareModal=()=>
    {   

        console.log("render result "+show);
        return (
            <Modal onHide={onHide} modalTitle="Products" show={show} handleClose={handleClose}  size="lg" >
               <label>Maths</label>
               <Input
                value={maths}
                placeholder={"Enter marks out of 100"}
                type="Number"
                onChange={(e) => setMaths(e.target.value)} />
            <label>physics</label>
            <Input
                value={physics}
                placeholder={"Enter marks out of 100"}
                type="Number"
                onChange={(e) => setPhysics(e.target.value)} />
            <label>Chemistry</label>
            <Input
                value={chemistry}
                type="Number"
                placeholder={"Enter marks out of 100"}
                onChange={(e) => setChemistry(e.target.value)} />
            <label>Remark</label>
            <Input
                value={remark}
                placeholder={"Enter remarks"}
                onChange={(e) => setRemark(e.target.value)} /> 
            {success ? <h3 style={{color:"green"}}>Success</h3>:null}
            </Modal>
            
        );
           
        
    }


    const selectStudent=(student)=>
    {
        setStudent({...student});
        setShow(!show);
        console.log(student);
        
    }
    const renderStudent=()=>
    {
        return (
            
            <Table style={{fontSize:12}} responsive="sm">
           
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Declare</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.length > 0 ?
                            students.map((student, index) =>
                            
                                
                                <tr  key={student._id}>
                                    <td>{index + 1}</td>
                                    <td>{student.firstName+" "+student.lastName}</td>
                                    <td>{student.email}</td>
                                    <td>Not Declared</td>
                                    <td><button style={{backgroundColor:"white"}} onClick={()=>{selectStudent(student)}}>Declare</button></td>
                                </tr>

                            ) :
                            null
                           

                    }


                </tbody>
            </Table>
        );
    }
    
    return (
        <div>
            <Navbar />
            <Layout sidebar>
            {/* <h3 style={{margin:"auto",marginBottom:"3rem",textAlign:"center"}}>Result Declation</h3> */}
        {renderStudent()}
        {renderResultDeclareModal()}



            </Layout>
        </div>
    )
}
