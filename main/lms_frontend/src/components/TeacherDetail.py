import {Link} from 'react-router-dom';

function TeacherDetail(){
    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-4">
                <img src="/teacher.jpg" className="img-thumbnail" alt="Teacher Image" />
                </div>
                <div className="col-8">
                    <h3> Natoli Abera</h3>
                     <p>Natoli is a highly skilled software engineer and an experienced teacher. He has been working as a professional software developer for the past 10 years, specializing in web application development using PHP. During this time, John has built numerous complex web applications for various clients, ranging from small startups to large enterprises.</p>
                       
                     <p className="fw-bold"><b>Skills:</b> <Link to="/category/php">Php</Link>,<Link to="/category/php">Python</Link>,<Link to="/category/php">JavaScripts</Link>,<Link to="//category/php">C++</Link></p>
                     <p className="fw-bold"><b>Recent Course:</b> <Link to="//category/php">ReactJs Course</Link></p>
                     <p className="fw-bold"> Total Enrolled : 456 Students</p>
                     <p className="fw-bold"> Rating: 4/5</p>
                </div>
            </div>
            {/* Course Videos*/}
            <div className='card mt-4'>
            <h5 className='card-header'>
                Course List
            </h5>
            <div className='list-group list-group-flash'>
                <Link to= "/detail/1" class="list-group-item list-group-item-action">Php Course 1</Link>
                <Link to= "/detail/1" class="list-group-item list-group-item-action">Php Course 2</Link>
                <Link to= "/detail/1" class="list-group-item list-group-item-action">Python Course 1</Link>
                <Link to= "/detail/1" class="list-group-item list-group-item-action">Python Course 2</Link>
                <Link to= "/detail/1" class="list-group-item list-group-item-action">JavaScript Course 1</Link>
                <Link to= "/detail/1" class="list-group-item list-group-item-action">JavaScript Course 2</Link>
            </div>

            </div>

            </div>
    );

}

export default TeacherDetail;
