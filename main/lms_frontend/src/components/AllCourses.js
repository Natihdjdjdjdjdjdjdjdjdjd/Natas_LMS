import { Link } from "react-router-dom";
function AllCourses(){
    return (
        <div className="container mt-3">
        {/* latest Courses */}

      <h3 className="pb-1 mb-3">Latest Courses </h3>
      <div className="row">
        <div className="col-md-3 mb-4">
           <div className="card">
           <Link to="/detail/1"><img src="python.png" className="card-img-top" alt="..." /></Link>
            <div className="card-body">
              <h5 className="card-title"><Link to="/detail/1">Course title</Link></h5>
            </div>
            <div className="card-footer">
              <div className="title">
               <span> Rating: 4/5</span>
               <span className="float-end"> Views: 192</span> 
                 </div>
            </div>
            </div>
        </div>
        <div className="col-md-3">
           <div className="card">
           <a href="#"><img src="python.png" className="card-img-top" alt="..." /></a>
            <div className="card-body">
              <h5 className="card-title"><a href="#">Course title</a></h5>
            </div>
            <div className="card-footer">
              <div className="title">
               <span> Rating: 4/5</span>
               <span className="float-end"> Views: 192</span> 
                 </div>
            </div>
            </div>
        </div>
        <div className="col-md-3">
           <div className="card">
           <a href="#"><img src="python.png" className="card-img-top" alt="..." /></a>
            <div className="card-body">
              <h5 className="card-title"><a href="#">Course title</a></h5>
            </div>
            <div className="card-footer">
              <div className="title">
               <span> Rating: 4/5</span>
               <span className="float-end"> Views: 192</span> 
                 </div>
            </div>
            </div>
        </div>
        <div className="col-md-3">
           <div className="card">
           <a href="#"><img src="python.png" className="card-img-top" alt="..." /></a>
            <div className="card-body">
              <h5 className="card-title"><a href="#">Course title</a></h5>
            </div>
            <div className="card-footer">
              <div className="title">
               <span> Rating: 4/5</span>
               <span className="float-end"> Views: 192</span> 
                 </div>
            </div>
            </div>
        </div>
        <div className="col-md-3">
           <div className="card">
           <a href="#"><img src="python.png" className="card-img-top" alt="..." /></a>
            <div className="card-body">
              <h5 className="card-title"><a href="#">Course title</a></h5>
            </div>
            <div className="card-footer">
              <div className="title">
               <span> Rating: 4/5</span>
               <span className="float-end"> Views: 192</span> 
                 </div>
            </div>
            </div>
        </div> 
        <div className="col-md-3">
           <div className="card">
           <a href="#"><img src="python.png" className="card-img-top" alt="..." /></a>
            <div className="card-body">
              <h5 className="card-title"><a href="#">Course title</a></h5>
            </div>
            <div className="card-footer">
              <div className="title">
               <span> Rating: 4/5</span>
               <span className="float-end"> Views: 192</span> 
                 </div>
            </div>
            </div>
        </div> 
        <div className="col-md-3">
           <div className="card">
           <a href="#"><img src="python.png" className="card-img-top" alt="..." /></a>
            <div className="card-body">
              <h5 className="card-title"><a href="#">Course title</a></h5>
            </div>
            <div className="card-footer">
              <div className="title">
               <span> Rating: 4/5</span>
               <span className="float-end"> Views: 192</span> 
                 </div>
            </div>
            </div>
        </div> 
        <div className="col-md-3">
           <div className="card">
           <a href="#"><img src="python.png" className="card-img-top" alt="..." /></a>
            <div className="card-body">
              <h5 className="card-title"><a href="#">Course title</a></h5>
            </div>
            <div className="card-footer">
              <div className="title">
               <span> Rating: 4/5</span>
               <span className="float-end"> Views: 192</span> 
                 </div>
            </div>
            </div>
        </div> 
         
      </div>
      {/* End Latest Courses */}


      {/* Pagination start */}
      <nav aria-label="Page navigation example mt-5">
           <ul className="pagination justify-content-center mt-5">
              <li className="page-item"><a className="page-link" href="#">Previous</a></li>
              <li className="page-item"><a className="page-link" href="#">1</a></li>
              <li className="page-item"><a className="page-link" href="#">2</a></li>
              <li className="page-item"><a className="page-link" href="#">3</a></li>
              <li className="page-item"><a className="page-link" href="#">Next</a></li>
           </ul>
       </nav>
      {/*pagination end*/}
      </div>

    );
}

export default AllCourses;
