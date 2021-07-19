import React, { useState } from 'react'
import {Table, Navbar,Row,Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { authConstants } from '../../actions/constant'
import { getAllStudent } from '../../actions/student.action'
import Layout from '../../components/Layout'
import Modal from "../../components/UI/modal"
import Input from "../../components/UI/input"
import { resultPost } from '../../actions/result.action'
import Header from '../../components/Header'
import "./index.css"




export default function Result() {
    const auth = useSelector(state => state.auth)
    var result = useSelector(state => state.result)
    result=result.result;
    const student=auth.myData;
    const dispatch = useDispatch()
    const data={student:student._id}
    var remark="";
    // dispatch(resultPost(data));
    var gotMarks=0,totalMarks=0,percentage;
    // console.log("result is ");
    console.log(result);
    if(result.marks && result.marks.length>0)
    {
      for(var i=0;i<result.marks.length;i++)
      {
        gotMarks+=result.marks[i].gotMarks;
        totalMarks+=result.marks[i].totalMarks;
      }
      percentage=(gotMarks/totalMarks)*100;
      percentage.toFixed(2);
      if(percentage>=33)
      {
        remark="Pass"
      }
      else
      {
        remark="fail"
      }
    }
   

    // console.log(gotMarks,totalMarks,percentage.toFixed(2));
   
 return (
     <>
     <Header />
     <Layout sidebar>

     <Table>
    <thead>
      <tr>
        <td colspan="3">Course </td>
        <td rowspan="2"> Year </td>
        <td rowspan="2"> Total Marks </td>
        <td colspan="2"> Marks Scored </td>
      </tr>
      {/* <tr>
        <td>Code </td>
        <td colspan="2"> Name </td>
        <td> Letter </td>
        <td> Points </td>
      </tr> */}
    </thead>
    <tbody>
     

        {result.marks && result.marks.length>0  ? result.marks.map((subject,index)=>
        
            <tr>
            <td>{index+1}</td>
            <td colspan="2">{subject.subjectName}</td>
            <td>2021</td>
            <td> {subject.totalMarks} </td>
            <td>{subject.gotMarks} </td>
            {/* <td> {result.remark} </td> */}
        </tr>)
        :  <td>Result Not declared</td> }
        

    </tbody>
    {result.marks ? 
      <tfoot>
    
    
    
    <tr>
        <td colspan="4" class="footer">Total</td>
        <td> {totalMarks} </td>
        <td colspan="2">{gotMarks} </td>
      </tr>
    <tr>
        <td colspan="4" class="footer">Percentage</td>
        <td> {percentage} </td>
        <td colspan="2">{remark}</td>
      </tr>
      </tfoot>
    
    :null }
   
  </Table>
     

     </Layout>
     </>
 );

}
