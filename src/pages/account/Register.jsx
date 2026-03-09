import { BiClinic } from "react-icons/bi";
import { MdWorkspacePremium } from "react-icons/md";
import { FaRegHospital, FaHandsHelping } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { routes } from "../../routes/Routes";
import { useState } from "react";
import { motion } from "framer-motion";

export const Register = () => {
    const navigate = useNavigate();

    const asWorker = () => navigate(routes.wizard().basicInformation());
    const asClient = () => navigate(routes.wizard().basicInformation());

    const mainChoices = [
        {
            icon: MdWorkspacePremium,
            title: "Health Care Professional",
            description: "Sign up as a nurse or caregiver to find clients, manage shifts, and grow your career.",
            onClick: asWorker,
        },{
            icon: BiClinic,
            title: "Client / Care Seeker",
            description: "Register as a client to find qualified healthcare professionals for home care or facility support.",
            onClick: asClient,
        },
    ];

    const extraSections = [
        {
            icon: FaRegHospital,
            title: "Trusted Professionals",
            description: "All healthcare professionals are verified, certified, and highly rated by clients.",
        },{
            icon: FaHandsHelping,
            title: "Flexible Matching",
            description: "Whether you need last-minute support or planned care, we match you quickly with the right professionals.",
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <div className="container py-5">
            {/* Header / Intro Section */}
            <motion.div
                className="text-center mb-5"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <h2 className="fw-bold mb-3">Join Nurse's Pride</h2>
                <p className="text-muted mb-0">
                    Connect with clients or healthcare professionals in just a few clicks. Flexible, trusted, and professional.
                </p>
            </motion.div>

            {/* Main Choices Section */}
            <motion.div
                className="row justify-content-center gap-3 mb-5"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {mainChoices.map((choice) => (
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex" key={choice.title}>
                        <ChoiceCard choice={choice} />
                    </div>
                ))}
            </motion.div>

            {/* Extra Info / Features Section */}
            <motion.div className="row text-center gap-4" variants={containerVariants} initial="hidden" animate="visible">
                {extraSections.map((section) => (
                    <div className="col-12 col-md-6 col-lg-5" key={section.title}>
                        <motion.div whileHover={{ scale: 1.05 }} className="p-4 rounded shadow-sm h-100 bg-light">
                            <div className="mb-3">
                                <section.icon className="fs-2 text-primary" />
                            </div>
                            <h5 className="fw-semibold">{section.title}</h5>
                            <p className="text-muted">{section.description}</p>
                        </motion.div>
                    </div>
                ))}
            </motion.div>

            {/* Call to Action / Bottom Section */}
            <motion.div className="text-center mt-5" variants={containerVariants} initial="hidden" animate="visible">
                <p className="fw-semibold mb-3">Already have an account?</p>
                <button onClick={() => navigate(routes.public().signin())} className="btn btn-outline-primary px-5">
                    Sign In
                </button>
            </motion.div>
        </div>
    );
};

const ChoiceCard = ({ choice }) => {
    const [loading, setLoading] = useState(false);

    const trigger = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            choice.onClick?.();
        }, 500);
    };

    return (
        <motion.div
            onClick={trigger}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="card card-btn rounded-4 position-relative shadow-sm flex-grow-1 cursor-pointer"
        >
            <div className="card-body text-center p-4">
                <div className="mb-3">
                    <choice.icon className="fs-1 text-primary" />
                </div>
                <h6 className="fw-semibold">{choice.title}</h6>
                <p className="mb-0 text-muted small">{choice.description}</p>
            </div>

            {loading && (
                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-white bg-opacity-75 rounded-4">
                    <div className="spinner-border text-primary">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            )}
        </motion.div>
    );
};