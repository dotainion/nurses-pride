import { useState } from "react";
import { useWizardValidity } from "../../../providers/WizardProvider";
import { motion } from "framer-motion";
import { IoLocationSharp } from "react-icons/io5";

export const Location = () => {
    const [location, setLocation] = useState({
        city: "",
        state: "",
        country: "",
    });

    const change = (e) => {
        setLocation((prev) => ({
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
        // Place validation here if needed
        return () => location;
    }, [location]);

    return (
        <motion.div
          className="p-4 bg-light rounded shadow-sm"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
            <h4 className="mb-4 fw-bold d-flex align-items-center">
                <IoLocationSharp className="me-2 text-primary" /> Location
            </h4>

            <motion.div whileFocus="focus" variants={inputVariants} className="mb-3">
                <label className="form-label small fw-semibold">City</label>
                <input
                    className="form-control"
                    placeholder="Enter your city"
                    name="city"
                    value={location.city}
                    onChange={change}
                />
            </motion.div>

            <motion.div whileFocus="focus" variants={inputVariants} className="mb-3">
                <label className="form-label small fw-semibold">State / Region</label>
                <input
                    className="form-control"
                    placeholder="Enter your state or region"
                    name="state"
                    value={location.state}
                    onChange={change}
                />
            </motion.div>

            <motion.div whileFocus="focus" variants={inputVariants} className="mb-3">
                <label className="form-label small fw-semibold">Country</label>
                <select
                  className="form-select"
                  name="country"
                  value={location.country}
                  onChange={change}
                >
                    <option value="" hidden>Select country</option>
                    <option value="USA">United States</option>
                    <option value="Canada">Canada</option>
                    <option value="UK">United Kingdom</option>
                    <option value="Other">Other</option>
                </select>
            </motion.div>

            <p className="small text-muted mt-2">
                Your location helps us match you with clients and opportunities nearby.
            </p>
        </motion.div>
    );
};