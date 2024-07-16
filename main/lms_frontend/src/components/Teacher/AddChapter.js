import {Link} from "react-router-dom";
import TeacherSidebar from "./TeacherSidebar";

function AddChapter(){
    return (
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <TeacherSidebar />  
                </aside>
                 <div className="col-md-9">
                       <div className="card">
                            <h5 className="card-header">Add Chapter </h5>
                            <div className="card body">

                                 <div className="mb-3">
                                     <label for="staticEmail" className="form-label">Title</label>
                                     <input type="text" id='title' className="form-control" />
                                 </div>
                                 <div className="mb-3 ">
                                     <label for="description" className="form-label">Description</label>
                                     <textarea className="form-control" id="description" > </textarea>
                                 </div>
                                 <div className="mb-3">
                                      <label for="vedio" className="form-label">Vedio</label>
                                      <input type="file" id="vedio" className="form-control"  />
                                 </div>
                                 <div className="mb-3">
                                      <label for="techs" className="form-label">Remarks</label>
                                      <textarea className="form-control" placeholder="This vedio is focused on basic remarks" id="techs"></textarea>
                                 </div>
                                 <button type="submit" className='btn btn-primary'>Submit</button>
                           </div>
                      </div>
                      </div>
            </div>
        </div>
    );
}

export default AddChapter;
