import {Link} from "react-router-dom";

function TeacherSidebar(){
    return (

<div className="card">
                        <h5 className="card-header">Dashboard</h5>
                      <div className="list-group list-group-flush">
                        <Link to='/the-dashboard' className='list-group-item list-group-item-action'>Dashboard</Link>
                        <Link to='/teacher-courses' className='list-group-item list-group-item-action'>Teacher Courses</Link>
                        <Link to='/add-courses' className='list-group-item list-group-item-action'>Add Courses</Link>
                        <Link to='/profile-setting' className='list-group-item list-group-item-action'>Profile Settings</Link>
                        <Link to='/the-change-password' className='list-group-item list-group-item-action'>Change Password</Link>
                        <Link to='/Teacher-login' className='list-group-item list-group-item-action text-danger'>Logout</Link>
                      </div>
                    </div>

)

}

export default TeacherSidebar;
