import {Link} from "react-router-dom";
import TeacherSidebar from "./TeacherSidebar";
import { useState,useEffect} from "react";
import axios from "axios";
const baseUrl='http://127.0.0.1:8000/api';

function AddCourses(){
    const [cats,setCats]=useState([]);
    const [courseData,setCourseData]=useState({
        category:'',
        title:'',
        description:'',
        f_img:'',
        techs:''
    });

    useEffect=(()=>{
        try{
            axios.get(baseUrl+'/category')
            .then((res)=>{
                setCats(res.data);
            });
        }catch(error){
           console.log(error);
        }
    },[]);

    const handleChange=(event)=>{
        setCourseData({
            ...courseData,
            [event.target.name]:event.target.value
        });
    }

    const handleFileChange=(event)=>{
        setCourseData({
            ...courseData,
            [event.target.name]:event.target.files[0]
        });
    }
     const formSubmit=()=>{
    const _formData=new FormData();
    _formData.append('category',courseData.category);
    _formData.append('teacher',1);
    _formData.append('courseData.title');
    _formData.append('description',courseData.description);
    _formData.append('featured_img',courseData.f_img,courseData.f_img.name);
    _formData.append('techs', courseData.techs);
    try{
        axios.post(baseUrl+'/course/',_formData,{
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        .then((res)=>{
            console.log(res.data);
        });
    }catch(error){
     console.log(error);
    }
};

    return (
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <TeacherSidebar />  
                </aside>
                 <div className="col-md-9">
                       <div className="card">
                            <h5 className="card-header">Add Course</h5>
                            <div className="card body">
                                <form>
                            <div className="mb-3">
                                     <label for="title" className="form-label">Category</label>
                                     <select name='category' onChange={handleChange} className="form-control">
                                        {cats.map((category,index)=>{return <option key={index} value={category.id}>{category.title}</option>})}
                                     </select>
                                 </div>

                                 <div className="mb-3">
                                     <label for="title" className="form-label">Title</label>
                                     <input type="text" onChange={handleChange} id='title' className="form-control" />
                                 </div>
                                 <div className="mb-3 ">
                                     <label for="description" className="form-label">Description</label>
                                     <textarea onChange={handleChange} name="description" className="form-control" id="description" ></textarea>
                                 </div>
                                 <div className="mb-3">
                                      <label for="vedio" className="form-label">Featured Image</label>
                                      <input type="file" onChange={handleChange} name="f_img" id="vedio" className="form-control"  />
                                 </div>
                                 <div className="mb-3">
                                      <label for="techs" className="form-label">Technologies</label>
                                      <textarea onChange={handleChange} name="techs" className="form-control" placeholder="Php, Python, JavaScript, HTML, CSS" id="techs"></textarea>
                                 </div>
                                 <button type="submit" onClick={formSubmit} className='btn btn-primary'>Submit</button>
                                 </form>
                           </div>
                           
                      </div>
                      
                      </div>
            </div>
        </div>
    );
}

export default AddCourses;
