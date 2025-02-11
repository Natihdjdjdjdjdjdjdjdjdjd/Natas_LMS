import {Link} from "react-router-dom";
import TeacherSidebar from "./TeacherSidebar";

function TheDashboard(){
    return (
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <TeacherSidebar />  
                </aside>
                <section className="col-md-9">
                  Teacher Dashboard
                </section>
            </div>
        </div>
    );
}

export default TheDashboard;
