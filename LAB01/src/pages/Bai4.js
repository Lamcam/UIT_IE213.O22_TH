import React, { useState } from "react";
import "../styles/Bai4.css";
function Result({ formData }) {
    return (
        <div className="result-container-4">
            <h2>Thông tin phiếu theo dõi</h2>
            <div className="result-content-4">
                <p>
                    Tên học sinh: {formData.fullName} - Lớp:{" "}
                    {formData.classroom}
                </p>
                <p>
                    Ngày đăng ký: {formData.date} - Giáo viên phụ trách:{" "}
                    {formData.teacher}
                </p>
                <p>
                    Những công việc đã được phân công nhưng chưa hoàn thành:
                    <br />
                    {formData.notDone}
                </p>
                <p>
                    Cam kết sẽ hoàn thành tại : {formData.commits.join(" - ")}
                </p>
            </div>
        </div>
    );
}
function Bai4() {
    const [formData, setFormData] = useState({
        fullName: "",
        teacher: "",
        classroom: "",
        date: "",
        notDone: "",
        commits: [],
    });
    const [result, setResult] = useState("");
    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        let updatedValues;
        if (type === "checkbox") {
            updatedValues = checked
                ? [...formData[name], value]
                : formData[name].filter((item) => item !== value);
        } else {
            updatedValues = value;
        }
        setFormData({
            ...formData,
            [name]: updatedValues,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted with data:", formData);
        setResult(formData);
    };

    return (
        <div className="form-container-4">
            <h1>THEO DÕI HỌC TẬP</h1>
            <form onSubmit={handleSubmit}>
                <div className="input-content-4-container">
                    <div className="input-content-4">
                        <label>Họ tên học sinh: </label>
                        <input
                            required
                            type="text"
                            value={formData.fullName}
                            name="fullName"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="input-content-4">
                        <label>Giáo viên phụ trách: </label>
                        <input
                            required
                            type="text"
                            value={formData.teacher}
                            name="teacher"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="classroom-date">
                        <div className="classroom">
                            <label>Lớp: </label>
                            <input
                                required
                                type="text"
                                value={formData.classroom}
                                name="classroom"
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="date">
                            <label>Ngày: </label>
                            <input
                                required
                                type="Date"
                                value={formData.date}
                                name="date"
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div className="input-textarea">
                        <label>Những việc phân công chưa làm: </label>
                        <br />
                        <textarea
                            name="notDone"
                            value={formData.notDone}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className="input-checkbox">
                    <label>Chọn hình thức hoàn thành:</label>
                    <br />
                    <input
                        type="checkbox"
                        name="commits"
                        value="Tại lớp"
                        checked={formData.commits.includes("Tại lớp")}
                        onChange={handleInputChange}
                    />{" "}
                    Những việc chưa làm sẽ được hoàn thành ngay tại lớp
                    <br />
                    <input
                        type="checkbox"
                        name="commits"
                        value="Tại nhà"
                        checked={formData.commits.includes("Tại nhà")}
                        onChange={handleInputChange}
                    />{" "}
                    Sẽ hoàn thành những việc chưa làm tại nhà và nộp lại cho
                    giáo viên vào ngày hôm sau
                </div>
                <button type="submit">Ghi nhận</button>
            </form>
            {result && <Result formData={result} />}
        </div>
    );
}
export default Bai4;
