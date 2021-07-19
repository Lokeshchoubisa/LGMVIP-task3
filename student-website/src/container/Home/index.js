import React from 'react'
import Header from '../../components/Header'
import Layout from '../../components/Layout'
import {Row,Col} from "react-bootstrap"
import { useDispatch,useSelector } from 'react-redux'
import {Table} from "react-bootstrap"
import { resultPost } from '../../actions/result.action'
export default function Home() {
    
    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)
    const student=auth.myData;
    const data={student:student._id}
    dispatch(resultPost(data));
    // console.log(student);
    return (
        <div>
            <Header />
            <Layout sidebar>

            <Col md="12" >
                <Row>
            <h1>My Profile</h1></Row>
            <Table style={{fontSize:12}} responsive="sm">
           
           <thead>
               <tr>
                   <th>#</th>
                   <th>Name</th>
                   <th>Email</th>
                   <th>Role</th>
                   
               </tr>
           </thead>
           <tbody>
               {
                  
                <tr  key={student._id}>
                    <td>{1}</td>
                    <td>{student.firstName+" "+student.lastName}</td>
                    <td>{student.email}</td>
                    <td>student</td>
                </tr>

                      

               }


           </tbody>
       </Table>
            </Col>

            </Layout>
            
        </div>
    )
}
