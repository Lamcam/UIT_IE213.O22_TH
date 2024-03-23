import { Button, Checkbox, FormControlLabel, TextField, TextareaAutosize } from '@mui/material';
import React, { useState } from 'react'; // Import useState hook
import { useForm } from 'react-hook-form';
import './style.scss';

const LearningManage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [submittedData, setSubmittedData] = useState(null); // Initialize submittedData state

    const onSubmit = (data) => {
        // Format the form data
        const formattedData = `
    Tên học sinh: ${data.tenHocSinh} - Lớp: ${data.lop}
    Ngày đăng ký: ${data.ngay} - Giáo viên phụ trách: ${data.giaoVien}
    Những công việc đã được phân công nhưng chưa hoàn thành:
    ${data.congViec.split('\n').map((item, index) => `${item} `).join('')}
    Cam kết sẽ hoàn thành:
    ${data.hinhThucHoanThanh.includes('taiLop') ? 'Tại lớp' : ''} ${data.hinhThucHoanThanh.includes('taiNha') ? '- Tại nhà' : ''}
    `;
        // Set the formatted data to state
        setSubmittedData(formattedData);
    };

    return (
        <div className="container container-learning-monitoring">
            <form className="learning-monitoring-form" onSubmit={handleSubmit(onSubmit)} method="post" action={window.location.pathname}>
                <div className="learning-monitoring-title">
                    <h2>THEO DÕI HỌC TẬP</h2>
                </div>
                <div className="content-infor">
                    <div className="content-info--left">
                        <div className="student-name">
                            <label htmlFor="tenHocSinh">Tên học sinh:</label>
                            <TextField
                                id="tenHocSinh"
                                {...register('tenHocSinh', { required: true })}
                                variant="outlined"
                                error={errors.tenHocSinh}
                                helperText={errors.tenHocSinh ? 'Vui lòng nhập tên học sinh' : ''}
                            />
                        </div>
                        <div className="teacher-name">
                            <label htmlFor="giaoVien">Giáo viên phụ trách:</label>
                            <TextField
                                id="giaoVien"
                                {...register('giaoVien', { required: true })}
                                variant="outlined"
                                error={errors.giaoVien}
                                helperText={errors.giaoVien ? 'Vui lòng nhập tên giáo viên' : ''}

                            />
                        </div>
                        <div className="class-date">
                            <div className="class">
                                <label htmlFor="lop">Lớp:</label>
                                <TextField
                                    id="lop"
                                    {...register('lop', { required: true })}
                                    variant="outlined"
                                    error={errors.lop}
                                    helperText={errors.lop ? 'Vui lòng nhập lớp' : ''}

                                />
                            </div>
                            <div className="date">
                                <label htmlFor="ngay">Ngày:</label>
                                <TextField
                                    id="ngay"
                                    {...register('ngay', { required: true })}
                                    variant="outlined"
                                    type="date"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    error={errors.ngay}
                                    helperText={errors.ngay ? 'Vui lòng nhập ngày' : ''}

                                />
                            </div>
                        </div>
                        <div className="job">
                            <label htmlFor="congViec">Những việc phân công chưa làm:</label>
                            <TextareaAutosize
                                id="congViec"
                                {...register('congViec', { required: true })}
                                aria-label="empty textarea"
                            />
                            {errors.congViec && <span>Những việc phân công chưa làm</span>}
                        </div>
                    </div>
                    <div className="content-info--right">
                        <img src="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books_23-2149342941.jpg" alt="ảnh" />
                    </div>
                </div>
                <div className="job-check">
                    <div className="job-check--title">Chọn hình thức hoàn thành</div>
                    <FormControlLabel
                        control={<Checkbox {...register('hinhThucHoanThanh')} value="taiLop" />}
                        label="Những việc chưa làm sẽ được hoàn thành ngay tại lớp"
                        className="job-check-label"
                    />
                    <FormControlLabel
                        control={<Checkbox {...register('hinhThucHoanThanh')} value="taiNha" />}
                        label="Sẽ hoàn thành những việc chưa làm tại nhà và nộp lại cho giáo viên vào ngày hôm sau"
                        className="job-check-label"
                    />
                </div>
                <div className="button-confirm">
                    <Button variant="contained" color="primary" type="submit">
                        Ghi nhận
                    </Button>
                </div>
            </form>
            <div className="submitted-data">
                <div className="ignore"></div>
                {submittedData && (
                    <div className="result">
                        <h2>Thông tin phiếu theo dõi</h2>
                        <pre>{submittedData}</pre>
                    </div>
                )}
            </div>

        </div>
    );
};

export default LearningManage;