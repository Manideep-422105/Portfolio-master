import LeetCodeCalendar from 'leetcode-calendar';
import { Row } from "react-bootstrap";
import React from "react";

export default function Example() {
  const exampleTheme = {
    light: [
      'rgb(235, 235, 235)',
      'rgba(192, 132, 245, 0.44)',
      'rgba(192, 132, 245, 0.6)',
      'rgba(192, 132, 245, 0.76)',
      'rgba(192, 132, 245, 0.92)',
    ],
    dark: [
      'rgb(235, 235, 235)',
      'rgba(192, 132, 245, 0.44)',
      'rgba(192, 132, 245, 0.6)',
      'rgba(192, 132, 245, 0.76)',
      'rgba(192, 132, 245, 0.92)',
    ],
  }
  
  
  
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
          Days I <strong className="purple">Code in LeetCode</strong>
        </h1>
        <LeetCodeCalendar
          username='Manideep_1707' 
          blockSize={15} 
          blockMargin={5} 
          fontSize={16} 
          theme={exampleTheme} 
          style={{ maxWidth: '1100px' ,marginLeft:'40px'}} 
        />
      </Row>
    )
  }