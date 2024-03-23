import React, { useState } from "react";
import "../styles/Bai5.css";
function Result({ formData }) {
    const options = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
    };
    const timeString = new Date().toLocaleString("en-GB", options);
    const formattedDateTime = `${timeString} - ${formData.date}`;
    const formattedRequests = formData.otherRequests
        .split("\n")
        .map((line, index) => (
            <React.Fragment key={index}>
                {line}
                <br />
            </React.Fragment>
        ));
    return (
        <div className="result-container-5">
            <h1>THÔNG TIN ĐẶT CHỖ</h1>
            <div className="result-content-5">
                <div>
                    <h4>Thông tin khách hàng</h4>
                    <p>
                        Họ tên: {formData.name} - Độ tuổi: {formData.age} / Giới
                        tính: {formData.gender}
                    </p>
                    <p>Địa chỉ: {formData.address}</p>
                </div>
                <div>
                    <h4>Thông tin đặt chỗ</h4>
                    <p>
                        Số khách tham gia bữa tiệc: {formData.numberOfGuests} -
                        Ngày đặt tiệc: {formData.date}
                    </p>
                    <p>
                        Loại tiệc: {formData.partyTypes.join(" - ")} / Địa điểm:{" "}
                        {formData.location}
                    </p>
                </div>
                <div>
                    <h4>
                        <i>Các yêu cầu kèm theo:</i>
                    </h4>
                    <p>{formattedRequests}</p>
                </div>
                <p style={{ textAlign: "center" }}>
                    <i>Quý khách biết đến nhà hàng của chúng tôi qua:</i>{" "}
                    {formData.media.join(", ")}
                </p>
                <p>
                    Chúng tôi đã nhận được thông tin đặt chỗ của quý khách vào
                    lúc: <b>{formattedDateTime}</b>
                </p>
            </div>
        </div>
    );
}
function Bai5() {
    const [formData, setFormData] = useState({
        numberOfGuests: "",
        date: new Date().toLocaleDateString("en-GB"),
        partyTypes: [],
        location: "",
        name: "",
        address: "",
        age: "Từ 18 đến 34 tuổi",
        gender: "",
        media: [],
        otherRequests: "",
    });
    const [result, setResult] = useState(false);
    const handleInputChange = (e) => {
        const { name, value, type, checked, options } = e.target;
        let updatedValues;
        if (type === "checkbox") {
            updatedValues = checked
                ? [...formData[name], value]
                : formData[name].filter((item) => item !== value);
        } else if (type === "select-multiple") {
            updatedValues = Array.from(options)
                .filter((option) => option.selected)
                .map((option) => option.value);
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
        console.log(formData);
        setResult(formData);
    };
    return (
        <div className="form-container-5">
            <h1>THÔNG TIN ĐẶT CHỖ</h1>
            <form onSubmit={handleSubmit}>
                <div className="number-date">
                    <div className="number">
                        <label>
                            Số lượng khách tham dự bữa tiệc của quý khách:{" "}
                        </label>
                        <input
                            required
                            type="number"
                            name="numberOfGuests"
                            min="1"
                            value={formData.numberOfGuests}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="date-5">
                        <label>Ngày: </label>
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className="type">
                    <label>Loại tiệc: </label>
                    <input
                        type="checkbox"
                        name="partyTypes"
                        value="Tiệc sáng"
                        checked={formData.partyTypes.includes("Tiệc sáng")}
                        onChange={handleInputChange}
                    />
                    Tiệc sáng
                    <input
                        type="checkbox"
                        name="partyTypes"
                        value="Tiệc trưa"
                        checked={formData.partyTypes.includes("Tiệc trưa")}
                        onChange={handleInputChange}
                    />
                    Tiệc trưa
                    <input
                        type="checkbox"
                        name="partyTypes"
                        value="Tiệc tối"
                        checked={formData.partyTypes.includes("Tiệc tối")}
                        onChange={handleInputChange}
                    />
                    Tiệc tối
                </div>
                <div className="location">
                    <label>Địa điểm: </label>
                    <input
                        required
                        type="radio"
                        name="location"
                        value="Trong nhà"
                        checked={formData.location === "Trong nhà"}
                        onChange={handleInputChange}
                    />
                    Trong nhà
                    <input
                        required
                        type="radio"
                        name="location"
                        value="Ngoài trời"
                        checked={formData.location === "Ngoài trời"}
                        onChange={handleInputChange}
                    />
                    Ngoài trời
                </div>
                <div className="name-address">
                    <div className="name">
                        <label>Tên quý khách: </label>
                        <input
                            required
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="address">
                        <label>Địa chỉ liên lạc: </label>
                        <input
                            required
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className="age-gender">
                    <div className="age">
                        <label>Độ tuổi: </label>
                        <select
                            required
                            name="age"
                            value={formData.age}
                            onChange={handleInputChange}
                        >
                            <option value="Dưới 18 tuổi">Dưới 18 tuổi</option>
                            <option value="Từ 18 đến 34 tuổi">
                                Từ 18 đến 34 tuổi
                            </option>
                            <option value="Từ 34 đến 50 tuổi">
                                Từ 34 đến 50 tuổi
                            </option>
                            <option value="Trên 50 tuổi">Trên 50 tuổi</option>
                        </select>
                    </div>
                    <div className="gender">
                        <label>Giới tính: </label>
                        <input
                            required
                            type="radio"
                            name="gender"
                            value="Nam"
                            checked={formData.gender === "Nam"}
                            onChange={handleInputChange}
                        />
                        Nam
                        <input
                            required
                            type="radio"
                            name="gender"
                            value="Nữ"
                            checked={formData.gender === "Nữ"}
                            onChange={handleInputChange}
                        />
                        Nữ
                    </div>
                </div>
                <div className="media">
                    <label>Quý khách biết đến nhà hàng chúng tôi qua: </label>
                    <select
                        multiple
                        name="media"
                        value={formData.media}
                        onChange={handleInputChange}
                    >
                        <option value="Báo chí">Báo chí</option>
                        <option value="Đài phát thanh">Đài phát thanh</option>
                        <option value="Tivi">Tivi</option>
                        <option value="Khác">Khác</option>
                    </select>
                </div>
                <div className="other-requests">
                    <label>Các yêu cầu khác của quý khách: </label>
                    <br />
                    <textarea
                        name="otherRequests"
                        value={formData.otherRequests}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="submit-button">
                    <button type="submit">Đặt chỗ</button>
                </div>
            </form>
            {result && <Result formData={result} />}
        </div>
    );
}
export default Bai5;
