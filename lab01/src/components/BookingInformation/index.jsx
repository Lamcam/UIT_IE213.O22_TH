import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import './style.scss'

function BookingInformation(props) {
    const [numberOfGuests, setNumberOfGuests] = useState('');
    const [date, setDate] = useState(new Date().toISOString().slice(0, 10)); // Set default date to current date
    const [mealType, setMealType] = useState({
        'Tiệc sáng': false,
        'Tiệc trưa': false,
        'Tiệc tối': false,
    });
    const [location, setLocation] = useState('');
    const [name, setName] = useState('');
    const [contactAddress, setContactAddress] = useState('');
    const [gender, setGender] = useState(''); // Added gender state
    const [submitted, setSubmitted] = useState(false);
    const [bookingInformation, setBookingInformation] = useState(null);

    const [age, setAge] = useState('');
    const [howYouKnowUs, setHowYouKnowUs] = useState([]);
    const [otherRequests, setOtherRequests] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            setSubmitted(true);
            // Logic to handle form submission
            // Update state to store booking information
            const bookingInfo = {
                customerInfo: {
                    name: name,
                    age: age,
                    gender: gender,
                    address: contactAddress,
                },
                reservationInfo: {
                    numberOfGuests: numberOfGuests,
                    date: date,
                    mealType: Object.keys(mealType).filter(key => mealType[key]).join(', '),
                    location: location,
                    otherRequests: otherRequests ? otherRequests.split('\n').map(req => req.trim()) : [],
                    howYouKnowUs: howYouKnowUs.join(', '),
                    timestamp: new Date().toLocaleString(),
                }
            };

            setBookingInformation(bookingInfo);
        } else {
            alert("Vui lòng điền đầy đủ thông tin.");
        }
    };
    const handleHowYouKnowUsChange = (e) => {
        const selectedOptions = Array.from(e.target.options)
            .filter(option => option.selected)
            .map(option => option.value);
        setHowYouKnowUs(selectedOptions);
    };
    const validateForm = () => {
        return (
            numberOfGuests !== '' &&
            date !== '' &&
            Object.values(mealType).includes(true) &&
            location !== '' &&
            name !== '' &&
            contactAddress !== '' &&
            age !== '' &&
            gender !== '' &&
            howYouKnowUs.length > 0
        );
    };
    // Chuyển chuỗi thành chuỗi viết hoa mỗi từ
    function capitalizeEachWord(str) {
        return str.toLowerCase().replace(/(^|\s)\S/g, function (char) {
            return char.toUpperCase();
        });
    }

    // Chuyển đổi định dạng thời gian
    function formatTimestamp(timestamp) {
        const date = new Date(timestamp);
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const seconds = date.getSeconds().toString().padStart(2, '0');
        const formattedTime = `${hours}:${minutes}:${seconds}`;

        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        const formattedDate = `${formattedTime} - ${day}/${month}/${year}`;

        return formattedDate;
    }
    function formatDateWithoutTime(timestamp) {
        const date = new Date(timestamp);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();

        const formattedDate = `${day}/${month}/${year}`;

        return formattedDate;
    }
    return (
        <div className="container container-booking-information">
            <form className="booking-information-form" onSubmit={handleSubmit} method="post" action={window.location.pathname}>
                <div className="booking-information-title">
                    <h2>THÔNG TIN ĐẶT CHỔ</h2>
                </div>
                <div className="infor-quantity-date">
                    <div className="info-quantity">
                        <label>
                            Số khách tham dự buổi tiệc:
                            <TextField
                                id="soKhach"
                                type="number"
                                value={numberOfGuests}
                                onChange={(e) => setNumberOfGuests(e.target.value)}
                            />
                        </label>
                    </div>
                    <div className="infor-date">
                        <label>
                            Ngày:
                            <TextField
                                id="ngay"
                                type="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                            />
                        </label>
                    </div>
                </div>
                <div className="info-type-party">
                    <legend>Loại tiệc:</legend>
                    <label>
                        <input
                            type="checkbox"
                            checked={mealType['Tiệc sáng']}
                            onChange={() =>
                                setMealType({ ...mealType, 'Tiệc sáng': !mealType['Tiệc sáng'] })
                            }
                        />
                        Tiệc sáng
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            checked={mealType['Tiệc trưa']}
                            onChange={() =>
                                setMealType({ ...mealType, 'Tiệc trưa': !mealType['Tiệc trưa'] })
                            }
                        />
                        Tiệc trưa
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            checked={mealType['Tiệc tối']}
                            onChange={() =>
                                setMealType({ ...mealType, 'Tiệc tối': !mealType['Tiệc tối'] })
                            }
                        />
                        Tiệc tối
                    </label>


                </div>
                <div className="infor-location">
                    <legend>Địa điểm:</legend>
                    <label>
                        <input
                            type="radio"
                            value="Trong nhà"
                            checked={location === 'Trong nhà'}
                            onChange={(e) => setLocation(e.target.value)}
                        />
                        Trong nhà
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="Ngoài trời"
                            checked={location === 'Ngoài trời'}
                            onChange={(e) => setLocation(e.target.value)}
                        />
                        Ngoài trời
                    </label>
                </div>
                <div className="infor-name-address">
                    <div className="infor-name">
                        <label>
                            Tên quý khách:
                            <TextField
                                id="tenKhach"
                                type="text"
                                value={name}

                                onChange={(e) => setName(e.target.value)}
                            />
                        </label>
                    </div>
                    <div className="infor-address">
                        <label>
                            Địa chỉ liên lạc:
                            <TextField
                                id="diaChi"
                                value={contactAddress}
                                onChange={(e) => setContactAddress(e.target.value)}
                            />
                        </label>
                    </div>
                </div>
                <div className="infor-age-gender">
                    <div className="infor-age">
                        <label>
                            Độ tuổi:
                            <select value={age} onChange={(e) => setAge(e.target.value)} id="tuoi">
                                <option value="">Chọn độ tuổi</option>
                                <option value="Từ 0 đến 18 tuổi">Từ 0 đến 18 tuổi</option>
                                <option value="Từ 19 đến 34 tuổi">Từ 19 đến 34 tuổi</option>
                                <option value="Từ 35 đến 50 tuổi">Từ 35 đến 50 tuổi</option>
                                <option value="Trên 50 tuổi">Trên 50 tuổi</option>
                            </select>
                        </label>
                    </div>
                    <div className="infor-gender">
                        <legend>Giới tính:</legend>
                        <label>
                            <input
                                type="radio"
                                value="Nam"
                                checked={gender === 'Nam'}
                                onChange={(e) => setGender(e.target.value)}
                            />
                            Nam
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="Nữ"
                                checked={gender === 'Nữ'}
                                onChange={(e) => setGender(e.target.value)}
                            />
                            Nữ
                        </label>
                    </div>
                </div>
                <div className="infor-contact">
                    <label>
                        Quý khách biết đến nhà hàng của chúng tôi qua:
                        <select multiple={true} value={howYouKnowUs} onChange={handleHowYouKnowUsChange} id="bietDen">
                            <option value="Báo chí">Báo chí</option>
                            <option value="Đài phát thanh">Đài phát thanh</option>
                            <option value="Tivi">Tivi</option>
                            <option value="Khác">Khác</option>
                        </select>
                    </label>
                </div>
                <div className="infor-other">
                    <div className="infor-other-title">Yêu cầu khác:</div>
                    <label>
                        <textarea
                            id="yeuCauKhac"
                            value={otherRequests}
                            onChange={(e) => setOtherRequests(e.target.value)}
                        />
                    </label>
                </div>
                <div className="button-booking">
                    <Button variant="contained" color="primary" type="submit">
                        Đặt chổ
                    </Button>
                </div>
            </form>
            <div className="submitted-info">
                <div className="ignore"></div>
                {submitted && (
                    <div className="result-info">
                        <div className="booking-information-title">
                            <h2>THÔNG TIN ĐẶT CHỖ</h2>
                        </div>
                        <div className="result-customer-info">
                            <p><strong>Thông tin khách hàng</strong></p>
                            <p>Họ tên: {capitalizeEachWord(bookingInformation.customerInfo.name)} - Độ tuổi: {bookingInformation.customerInfo.age} / Giới tính: {bookingInformation.customerInfo.gender}</p>
                            <p>Địa chỉ: {capitalizeEachWord(bookingInformation.customerInfo.address)}</p>
                        </div>
                        <div className="result-booking-info">
                            <p><strong>Thông tin đặt chỗ</strong></p>
                            <p>Số khách tham gia bữa tiệc: {bookingInformation.reservationInfo.numberOfGuests} - Ngày đặt tiệc: {formatDateWithoutTime(bookingInformation.reservationInfo.date)}</p>
                            <p>Loại tiệc: - {bookingInformation.reservationInfo.mealType} / Địa điểm: {bookingInformation.reservationInfo.location}</p>
                        </div>
                        <div className="result-other-info">
                            <p><strong>Các yêu cầu kèm theo:</strong></p>
                            <ul>
                                {bookingInformation.reservationInfo.otherRequests.map((request, index) => (
                                    <li key={index}>- {request}</li>
                                ))}
                            </ul>
                        </div>
                        <p className="result-contact-info">Quý khách biết đến nhà hàng của chúng tôi qua: {bookingInformation.reservationInfo.howYouKnowUs}</p>
                        <p className="result-datetime-info">Chúng tôi đã nhận được thông tin đặt chỗ của quý khách vào lúc: <strong>{formatTimestamp(bookingInformation.reservationInfo.timestamp)}</strong></p>
                    </div>
                )}
            </div>


        </div>
    );
}

export default BookingInformation;