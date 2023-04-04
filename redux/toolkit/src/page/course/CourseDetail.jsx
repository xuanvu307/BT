import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useGetCourseByIdQuery } from '../../app/service/CourseService';

function CourseDetail() {
    const { courseId } = useParams();
    const { data, isLoading, isError, error } = useGetCourseByIdQuery(courseId);

    if (isLoading) {
        return <h3>Loading...</h3>
    }
    if (isError) {
        return <h3>Có lỗi xảy ra : {error}</h3>
    }

    return (
        <>
            <div className="course-container mt-5">
                <div className="container">
                    <div className="mb-4">
                        <nav>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link to={"/khoa-hoc"}>Khóa học</Link>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    {data.course.name}
                                </li>
                            </ol>
                        </nav>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="main p-4 shadow-sm">
                                <h2 className="course-title fs-5">
                                    {data.course.name}
                                </h2>

                                <hr />

                                <div className="supporter d-flex align-items-center">
                                    <div className="supporter-image">
                                        <img src="https://media.techmaster.vn/api/static/crop/bv9jp4k51co7nj2mhht0"
                                            alt="tư vấn viên" className="rounded-circle w-75 h-75" />
                                    </div>
                                    <div className="supporter-info">
                                        <p>
                                            <b>Tư vấn viên : </b>
                                            {data.course.user.name}
                                        </p>
                                        <p>
                                            <b>Email : </b>
                                            {data.course.user.email}
                                        </p>
                                        <p>
                                            <b>Số điện thoại : </b>
                                            {data.course.user.phone}
                                        </p>
                                    </div>
                                </div>

                                <hr />

                                <div className="course-description">
                                    <p>
                                        {data.course.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="p-4 shadow-sm">
                                <div className="course-image mb-4">
                                    <img src="https://media.techmaster.vn/api/static/8028/bpfneoc51co8tcg6lek0" />
                                </div>
                                <p>
                                    Học phí :
                                    <span className="fw-bold course-price">
                                        {data.course.price}
                                    </span>
                                </p>
                                <p>
                                    Hình thức học :  
                                    <span className="fw-bold course-type"> {data.course.type}</span>
                                </p>
                                <button className="btn btn-success">
                                    Thêm vào giỏ hàng
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CourseDetail