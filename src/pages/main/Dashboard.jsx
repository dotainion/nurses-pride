import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BiUser, BiCalendar, BiBell, BiMoney, BiSearch } from "react-icons/bi";
import { FaClipboardList, FaCalendarCheck, FaUserNurse, FaHandshake } from "react-icons/fa";
import { useAuth } from "../../providers/AuthProvider";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

export const Dashboard = () => {
    const { user } = useAuth();

    const [stats, setStats] = useState([]);
    const [appointments, setAppointments] = useState([]);
    const [notifications, setNotifications] = useState([]);
    const [search, setSearch] = useState('');

    const chartData = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
            {
                label: 'Hours Worked',
                data: [5, 6, 4, 7, 5, 3, 2],
                fill: true,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
            },
        ],
    };

    const quickActions = [
        { title: 'Book Appointment', icon: <FaCalendarCheck /> },
        { title: 'View Appointments', icon: <FaClipboardList /> },
        { title: 'View Clients/Nurses', icon: <FaUserNurse /> },
        { title: 'Manage Jobs', icon: <FaHandshake /> },
    ];

    useEffect(() => {
        // Mock fetch data
        setStats([
            {
                title: 'Upcoming Shifts',
                value: 5,
                icon: <BiCalendar className="fs-2 text-secondary" />,
            },{
                title: 'Total Bookings',
                value: 23,
                icon: <FaClipboardList className="fs-2 text-secondary" />,
            },{
                title: 'Earnings',
                value: '$1,250',
                icon: <BiMoney className="fs-2 text-secondary" />,
            },{
                title: 'Clients/Nurses',
                value: 12,
                icon: <FaUserNurse className="fs-2 text-secondary" />,
            },
        ]);

        setAppointments([
            {
                id: 1,
                name: 'John Doe',
                type: 'Client',
                date: '2026-03-09',
                time: '10:00 AM',
                status: 'Confirmed',
            },{
                id: 2,
                name: 'Jane Smith',
                type: 'Client',
                date: '2026-03-10',
                time: '2:00 PM',
                status: 'Pending',
            },{
                id: 3,
                name: 'Dr. Alice',
                type: 'Health Professional',
                date: '2026-03-11',
                time: '9:00 AM',
                status: 'Confirmed',
            },
        ]);

        setNotifications([
            'Shift confirmed for March 9, 10:00 AM',
            'New booking request from Client Jane Smith',
            'Payment received for previous shift',
        ]);
    }, []);

    return (
        <div className="container user-select-none py-4">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3"
            >
                <div className="d-flex align-items-center gap-3">
                    <BiUser className="fs-1 text-secondary" />
                    <div>
                        <h5 className="mb-0">{user.attributes.fullName}</h5>
                        <small className="text-muted">{user.attributes.role}</small>
                    </div>
                </div>

                <div className="d-flex align-items-center gap-3">
                    <div className="position-relative">
                        <BiBell className="fs-5 text-secondary" />
                        {notifications.length > 0 && (
                            <span className="d-flex align-items-center position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                <small>{notifications.length}</small>
                            </span>
                        )}
                    </div>
                </div>
            </motion.div>

            {/* Quick Action Cards */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="row mb-4"
            >
                {quickActions.map((action, i) => (
                    <div key={i} className="col-12 col-sm-6 col-md-3 mb-3">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="card shadow-sm p-3 d-flex align-items-center justify-content-center border h-100"
                            style={{ cursor: "pointer" }}
                        >
                            <div className="fs-2 mb-2 text-secondary">{action.icon}</div>
                            <h6 className="text-center">{action.title}</h6>
                        </motion.div>
                    </div>
                ))}
            </motion.div>

            {/* Stats Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="row mb-4"
            >
                {stats.map((stat, i) => (
                    <div key={i} className="col-12 col-sm-6 col-md-3 mb-3">
                        <div className="card p-3 d-flex flex-column align-items-center text-center shadow-sm border">
                            {stat.icon}
                            <h4 className="mt-2">{stat.value}</h4>
                            <small className="text-muted">{stat.title}</small>
                        </div>
                    </div>
                ))}
            </motion.div>

            {/* Chart Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="card p-3 mb-4 shadow-sm"
            >
                <h6 className="mb-3">Weekly Hours</h6>
                <Line data={chartData} />
            </motion.div>

            {/* Search Appointments */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="card p-3 mb-4 shadow-sm"
            >
                <div className="input-group mb-3">
                    <span className="input-group-text bg-light">
                        <BiSearch />
                    </span>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search Appointments, Clients or Nurses..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
            </motion.div>

            {/* Upcoming Appointments */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="card p-3 mb-4 shadow-sm"
            >
                <h6 className="mb-3">Upcoming Appointments</h6>
                <div className="table-responsive">
                    <table className="table table-hover mb-0">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {appointments
                                .filter((app) =>
                                    app.name.toLowerCase().includes(search.toLowerCase()) ||
                                    app.type.toLowerCase().includes(search.toLowerCase())
                                ).map((app) => (
                                    <tr key={app.id}>
                                        <td>{app.name}</td>
                                        <td>{app.type}</td>
                                        <td>{app.date}</td>
                                        <td>{app.time}</td>
                                        <td>{app.status}</td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </motion.div>

            {/* Notifications */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="card p-3 shadow-sm"
            >
                <h6 className="mb-3">Notifications</h6>
                <ul className="list-group list-group-flush">
                    {notifications.map((note, i) => (
                        <li key={i} className="list-group-item">
                            {note}
                        </li>
                    ))}
                </ul>
            </motion.div>
        </div>
    );
};