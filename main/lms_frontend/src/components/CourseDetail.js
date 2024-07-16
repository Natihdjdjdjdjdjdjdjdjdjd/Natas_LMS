import { useParams } from "react-router-dom";
import {Link} from 'react-router-dom';

function CourseDetail(){
    let {course_id}=useParams();
    return(
        <div className="container mt-3">
            <div className="row">
                <div className="col-4">
                <img src="/nati.jpg" className="img-thumbnail" alt="..." />
                </div>
                <div className="col-8">
                    <h3> Python</h3>
                     <p>Python is a high-level programming language that was first released in 1991 by Guido van Rossum. It is known for its simplicity and readability, making it an ideal language for beginners to learn. Python is widely used in various industries such as web development, data analysis, artificial intelligence, and scientific computing.
                       One of the key features of Python is its flexibility and versatility. It supports multiple programming paradigms, including procedural, object-oriented, and functional programming. This allows developers to choose the best approach for their specific project requirements.
                       In addition to its flexibility, Python has a vast standard library that provides ready-to-use modules and packages for common tasks. This can significantly reduce development time and effort, as developers can leverage existing code instead of writing everything from scratch.</p>
                     <p className="fw-bold"><b>Course By:</b> <Link to="/teacher-detail/1">Teacher 1</Link></p>
                     <p className="fw-bold"> Duration: 3 Hours 30 minute</p>
                     <p className="fw-bold"> Total Enrolled : 456 Students</p>
                     <p className="fw-bold"> Rating: 4/5</p>
                </div>
            </div>
            {/* Course Videos*/}
            <div className="card">
                <div className="card-header">
                  Course Videos
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Introduction
                      <span className="float-end">
                        <span className="me-5">1 hour 30 minutes</span>
                      <button className="btn-btn-sm btn-danger" data-bs-toggle="modal" data-bs-target="#vedioModal1"><i className="bi bi-youtube"></i></button>
                      </span>

                    {/*-- vedio medal */ }
                           <div className="modal fade" id="vedioModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                             <div className="modal-dialog modal-lg">
                              <div className="modal-content">
                               <div className="modal-header">
                                 <h1 className="modal-title fs-5" id="exampleModalLabel">Vedio 1</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                  </div>
                                  <div className="modal-body">
                                  <div class="ratio ratio-16x9">
                                   < iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
                                 </div>
                                            </div>
                              </div>
                                 </div>
                                 </div>
                    </li>
                    <li className="list-group-item">Introduction
                      <span className="float-end">
                        <span className="me-5">1 hour 30 minutes</span>
                      <button className="btn-btn-sm btn-danger float-end"><i className="bi bi-youtube"></i></button>
                      </span>
                    </li>
                    <li className="list-group-item">Introduction
                      <span className="float-end">
                        <span className="me-5">1 hour 30 minutes</span>
                      <button className="btn-btn-sm btn-danger float-end"><i className="bi bi-youtube"></i></button>
                      </span>
                    </li>
                    <li className="list-group-item">Introduction
                      <span className="float-end">
                        <span className="me-5">1 hour 30 minutes</span>
                      <button className="btn-btn-sm btn-danger float-end"><i className="bi bi-youtube"></i></button>
                      </span>
                    </li>
                    <li className="list-group-item">Introduction
                      <span className="float-end">
                        <span className="me-5">1 hour 30 minutes</span>
                      <button className="btn-btn-sm btn-danger float-end"><i className="bi bi-youtube"></i></button>
                      </span>
                    </li>
                </ul>
</div>
<h3 className="pb-1 mb-3 mt-5">Related Courses </h3>
      <div className="row">
        <div className="col-md-2">
           <div className="card">
           <Link to="/detail/1"><img src="/nati.jpg" className="card-img-top" alt="..." /></Link>
            <div className="card-body">
              <h5 className="card-title"><Link to="/detail/1">Course title</Link></h5>
            </div>
            </div>
        </div>
        <div className="col-md-2">
           <div className="card">
           <a href="#"><img src="/nati.jpg" className="card-img-top" alt="..." /></a>
            <div className="card-body">
              <h5 className="card-title"><a href="#">Course title</a></h5>
            </div>
            </div>
        </div>
        <div className="col-md-2">
           <div className="card">
           <a href="#"><img src="/nati.jpg" className="card-img-top" alt="..." /></a>
            <div className="card-body">
              <h5 className="card-title"><a href="#">Course title</a></h5>
            </div>
            </div>
        </div>
        <div className="col-md-2">
           <div className="card">
           <a href="#"><img src="/nati.jpg" className="card-img-top" alt="..." /></a>
            <div className="card-body">
              <h5 className="card-title"><a href="#">Course title</a></h5>
            </div>
            </div>
        </div>  
      </div>
        </div>
    );
}

export default CourseDetail;
