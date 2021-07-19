import React from 'react'
import Header from '../../components/Header'
import Layout from '../../components/Layout'
import {Row,Col} from "react-bootstrap"
import { useDispatch,useSelector } from 'react-redux'
import {Table} from "react-bootstrap"
export default function Home() {

    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)
    const teacher=auth.myData;
    console.log(teacher);
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
                  
                <tr  key={teacher._id}>
                    <td>{1}</td>
                    <td>{teacher.firstName+" "+teacher.lastName}</td>
                    <td>{teacher.email}</td>
                    <td>Teacher</td>
                </tr>

                      

               }


           </tbody>
       </Table>
            </Col>

            </Layout>
            
        </div>
    )
}
