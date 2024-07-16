import Header from './Header';
import Home from './Home';
import CourseDetail from './CourseDetail';
import TeacherDetail from './TeacherDetail';
import CategoryCourses from './CategoryCourses';

//Lists
import AllCourses from './AllCourses';
import PopularCourses from './PopularCourses';
import PopularTeachers from './PopularTeachers';

// Users dashboard
import Login from './User/Login';
import Register from './User/Register';
import Dashboard from './User/Dashboard';

import MyCourses from './User/MyCourses';
import FavoriteCourses from './User/FavoriteCourses';
import RecommendedCourses from './User/RecommendedCourses';
import ProfileSettings from './User/ProfileSettings';
import ChangePassword from './User/ChangePassword';

// Teachers dashboard
import TeacherLogin from './Teacher/TeacherLogin';
import TeacherRegister from './Teacher/TeacherRegister';
import TheDashboard from './Teacher/TheDashboard';
import TeacherCourses from './Teacher/TeacherCourses';
import AddCourse from './Teacher/AddCourse';
import AddChapter from './Teacher/AddChapter';
import About from './About';
import Footer from './Footer';


import { Routes as Switch,Route } from 'react-router-dom';

function Main() {
  return (
    <div className="App">
         <Header />
         <Switch>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/detail/:course_id" element={<CourseDetail />} />
            <Route path="/user-login" element={<Login />} />
            <Route path="/teacher-login" element={<TeacherLogin />} />
            <Route path="/user-register" element={<Register />} />
            <Route path="/teacher-register" element={<TeacherRegister />} />
            <Route path="/user-dashboard" element={<Dashboard />} />
            <Route path="/teacher-dashboard" element={<TheDashboard />} />
            <Route path="/my-courses" element={<MyCourses />} />
            <Route path="/favorite-courses" element={<FavoriteCourses />} />
            <Route path="/recommended-courses" element={<RecommendedCourses />} />
            <Route path="/profile-setting" element={<ProfileSettings />} />
            <Route path="/change-password" element={<ChangePassword/>} />
            <Route path="/teacher-detail/:teacher_id" element={<TeacherDetail />} />
            <Route path="/all-courses" element={<AllCourses />} />
            <Route path="/popular-courses" element={<PopularCourses />} />
            <Route path="/popular-teachers" element={<PopularTeachers />} />
            <Route path="/category/:category_slug" element={<CategoryCourses />} />
            <Route path="/add-courses" element={<AddCourse />} />
            <Route path="/add-chapter/:course_id" element={<AddChapter />} />
            <Route path="/teacher-courses" element={<TeacherCourses/>} />
         </Switch>
         <Footer />
    </div>
  );
}

export default Main;
