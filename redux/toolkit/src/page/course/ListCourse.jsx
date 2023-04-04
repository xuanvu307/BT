import React from 'react'
import { Link } from 'react-router-dom';
import { useGetAllCourseQuery } from '../../app/service/CourseService';

function ListCourse() {
    const { data, isLoading, isError, error } = useGetAllCourseQuery();

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
                    <div className="row">
                        <div className="col-md-3">
                            <h2 className="fs-5 mb-4">Chủ đề</h2>
                            <div className="topic-item input-group d-flex align-items-center mb-1">
                                <input type="radio" value="Backend" id="backend" name="topic" />
                                <label htmlFor="backend" className="ms-2 fs-5">Lập trình Backend</label>
                            </div>
                            <div className="topic-item input-group d-flex align-items-center mb-1">
                                <input type="radio" value="Frontend" id="frontend" name="topic" />
                                <label htmlFor="frontend" className="ms-2 fs-5">Lập trình Frontend</label>
                            </div>
                            <div className="topic-item input-group d-flex align-items-center mb-1">
                                <input type="radio" value="Di động" id="mobile" name="topic" />
                                <label htmlFor="mobile" className="ms-2 fs-5">Lập trình di động</label>
                            </div>
                            <div className="topic-item input-group d-flex align-items-center mb-1">
                                <input type="radio" value="Database" id="database" name="topic" />
                                <label htmlFor="database" className="ms-2 fs-5">Cơ sở dữ liệu</label>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="seach-form d-flex align-items-center rounded shadow-sm mb-4 pe-3">
                                        <input type="text" placeholder="Tìm kiếm khóa học"
                                            className="form-control border-0 seach-form-input" />
                                        <span className="text-black-50 seach-form-button"><i
                                            className="fa-solid fa-magnifying-glass"></i></span>
                                    </div>
                                </div>
                            </div>
                            <div className="course-list row">
                                {data.map((e, index) => (
                                    <div className="col-md-4" key={index}>
                                        <Link to={`${e.id}`}>
                                            <div className="course-item shadow-sm rounded mb-4">
                                                <div className="course-item-image">
                                                    <img src="https://media.techmaster.vn/api/static/8028/bpfneoc51co8tcg6lek0"
                                                        alt="Marge Innastraightline" />
                                                </div>
                                                <div className="course-item-info p-3">
                                                    <h2 className="fs-5 mb-4 text-dark">
                                                        {e.course.name}
                                                    </h2>
                                                    <div
                                                        className="d-flex justify-content-between align-items-center fw-light text-black-50">
                                                        <p className="type">{e.course.type}</p>
                                                        <p className="rating">
                                                            <span>{e.course.rating}</span>
                                                            <span className="text-warning"><i className="fa-solid fa-star"></i></span>
                                                        </p>
                                                    </div>
                                                    <p className="price text-danger fs-5">
                                                        {e.course.price}
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListCourse