import { useState } from "react";
import { useWizardValidity } from "../../../providers/WizardProvider";
import { motion } from "framer-motion";

export const BasicInformation = () => {
    const [basic, setBasic] = useState({
        id: null,
        firstName: "",
        lastName: "",
        email: "",
        dob: "",
    });

    const change = (e) => {
        setBasic((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const containerVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    const inputVariants = {
        focus: { scale: 1.02, transition: { duration: 0.2 } },
    };

    useWizardValidity(() => {
        // place validation here if needed
        return () => basic;
    }, [basic]);

    return (
        <motion.div
            className="p-4 bg-light rounded shadow-sm"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <h4 className="mb-4 fw-bold">Basic Information</h4>
            <motion.div whileFocus="focus" variants={inputVariants}>
                <label className="form-label small fw-semibold">First Name</label>
                <input
                    className="form-control mb-3"
                    placeholder="Enter your first name"
                    name="firstName"
                    value={basic.firstName}
                    onChange={change}
                />
            </motion.div>

            <motion.div whileFocus="focus" variants={inputVariants}>
                <label className="form-label small fw-semibold">Last Name</label>
                <input
                    className="form-control mb-3"
                    placeholder="Enter your last name"
                    name="lastName"
                    value={basic.lastName}
                    onChange={change}
                />
            </motion.div>

            <motion.div whileFocus="focus" variants={inputVariants}>
                <label className="form-label small fw-semibold">Email</label>
                <input
                    className="form-control mb-3"
                    placeholder="you@example.com"
                    name="email"
                    value={basic.email}
                    onChange={change}
                    type="email"
                />
            </motion.div>

            <motion.div whileFocus="focus" variants={inputVariants}>
                <label className="form-label small fw-semibold">Date of Birth</label>
                <input
                    className="form-control mb-3"
                    placeholder="Select your DOB"
                    value={basic.dob}
                    name="dob"
                    onChange={change}
                    type="date"
                />
            </motion.div>

            {/* Optional: small helper text */}
            <p className="small text-muted mt-2">
                Your personal information will only be used to set up your account and match you with clients.
            </p>
        </motion.div>
    );
};