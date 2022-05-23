import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import CourseS1 from "../components/course-s1";
import CourseS2 from "../components/course-s2";
import CourseS3 from "../components/course-s3";
import CourseS4 from "../components/course-s4";
import CourseS5 from "../components/course-s5";

class Course extends Component{
    render(){
        return(        
            <Container fluid className="minh-footer-adj p-0">
                <CourseS1/>
                <CourseS2/>
                <CourseS3/>
                <CourseS4/>
                <CourseS5/>
            </Container>    
        );
    }
}

export default Course;
