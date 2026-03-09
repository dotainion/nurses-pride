import { useLayoutEffect, useState } from "react";
import { BiCheckShield } from "react-icons/bi";
import { motion } from "framer-motion";
import { Modal, ModalBodyAlert } from "../../components/Modal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const BookAppointment = ({ bookingFor }) => {
    const [date, setDate] = useState(new Date());
    const [dateRange, setDateRange] = useState([null, null]);
    const [hours, setHours] = useState([]);
    const [selectedHour, setSelectedHour] = useState(null);
    const [showAlert, setShowAlert] = useState(false);
    const [selectedWeekDays, setSelectedWeekDays] = useState([]);
    const [useRangeForWeek, setUseRangeForWeek] = useState(false);

    const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    useLayoutEffect(() => {
        const tempHours = [];
        Array.from({ length: 12 }).forEach((_, i) => {
            let hour = i + 1;
            hour = hour < 10 ? `0${hour}` : `${hour}`;
            tempHours.push(`${hour}:00`);
            tempHours.push(`${hour}:30`);
        });
        setHours(tempHours);
    }, []);

    const toggleWeekDay = (day) => {
        setSelectedWeekDays((prev) =>
            prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
        );
    };

    return (
        <div className="container py-5">
            {/* Header Info */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-4"
            >
                <h4 className="fw-bold">Book Appointment</h4>
                <p className="text-muted">
                    Booking for: <strong>{bookingFor?.name || "Nurse/Client"}</strong>
                </p>
            </motion.div>

            <div className="row gap-4-">
                {/* Calendar Section */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="col-12 col-md-5"
                >
                    <h5 className="mb-2">Select Date</h5>
                    <div className="border rounded-3">
                        <DatePicker
                            //selected={dateRange[0] || date} // fallback to single date
                            onChange={(update, ts) => {
                                console.log(ts)
                                if (Array.isArray(update)) {
                                    setDateRange(update); // range selected
                                    setDate(update[0]);   // keep first date as main
                                } else {
                                    setDate(update);      // single date selected
                                    setDateRange([update, null]);
                                }
                            }}
                            inline
                            minDate={new Date()}
                            selectsRange
                            selectsMultiple
                            
                        />
                    </div>

                    {/* Weekday Selection below calendar */}
                    <div className="mt-3">
                        <label className="form-label fw-semibold">Select Weekdays</label>
                        <div className="d-flex flex-wrap gap-2">
                            {weekDays.map((day) => (
                                <button
                                    type="button"
                                    className={`btn btn-sm ${
                                        selectedWeekDays.includes(day)
                                        ? "btn-primary text-white"
                                        : "btn-outline-primary"
                                    }`}
                                    onClick={() => toggleWeekDay(day)}
                                    key={day}
                                >
                                    {day}
                                </button>
                            ))}
                        </div>
                        <div className="form-check mt-2">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="applyRangeWeek"
                                checked={useRangeForWeek}
                                onChange={() => setUseRangeForWeek((prev) => !prev)}
                            />
                            <label className="form-check-label" htmlFor="applyRangeWeek">
                                Use selected date range for all selected weekdays
                            </label>
                        </div>
                    </div>
                </motion.div>

                {/* Time Selection Section */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="col-12 col-md-7"
                >
                    <h5 className="mb-2">Select Hour</h5>
                    <div className="row gap-0 mt-3">
                        {hours.map((hour, key) => (
                            <motion.div
                                key={key}
                                className="col-3 p-1"
                                whileHover={{ scale: 1.05 }}
                            >
                                <button
                                    onClick={() => setSelectedHour(hour)}
                                    className={`btn btn-sm bg-${
                                        selectedHour === hour
                                            ? 'primary text-white'
                                            : 'light'
                                    } d-flex align-items-center gap-1 w-100 border-0 py-1`}
                                >
                                    <div className="border flex-fill"></div>
                                    <div>{hour}</div>
                                    <div className="border flex-fill"></div>
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Additional Info / Notes */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mt-4 p-3 bg-light rounded-3"
            >
                <h6>Additional Information</h6>
                <textarea
                    className="form-control"
                    placeholder="Add any notes for your appointment..."
                    rows={3}
                />
            </motion.div>

            {/* Confirm Button */}
            <div className="d-flex justify-content-center my-5">
                <button
                    onClick={() => setShowAlert(true)}
                    className="btn btn-primary rounded-pill flex-fill"
                    style={{ maxWidth: "400px" }}
                >
                    Confirm Appointment
                </button>
            </div>

            {/* Confirmation Modal */}
            <Modal show={showAlert} onBackdropDismist={() => setShowAlert(false)}>
                <ModalBodyAlert>
                    <div className="d-inline-block bg-success bg-opacity-50 rounded-circle p-3 mb-3">
                        <BiCheckShield className="display-1 text-white" />
                    </div>
                    <h4>Appointment Confirmed!</h4>
                    <p className="text-muted">
                        Your appointment with{" "}
                        <strong>{bookingFor?.name || "the professional"}</strong> is
                        confirmed for {date?.toDateString()} at {selectedHour}.
                    </p>
                    <div className="d-flex justify-content-center mt-4">
                        <button
                            onClick={() => setShowAlert(false)}
                            className="btn btn-primary rounded-pill flex-fill"
                        >
                            Done
                        </button>
                    </div>
                    <div className="d-flex justify-content-center mt-3">
                        <button className="btn border-0">Edit your appointment</button>
                    </div>
                </ModalBodyAlert>
            </Modal>
        </div>
    );
};