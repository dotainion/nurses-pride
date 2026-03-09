import { useState } from "react";
import { useWizardValidity } from "../../../providers/WizardProvider";
import { motion } from "framer-motion";

export const WorkPreferences = () => {
    const [preferences, setPreferences] = useState({
        employmentType: "",
        available: false,
        willingToTravel: false,
    });

    const change = (e) => {
        const { name, value, type, checked } = e.target;
        setPreferences((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const containerVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    const buttonVariants = {
        hover: { scale: 1.05 },
        tap: { scale: 0.95 },
    };

    useWizardValidity(() => {
        // Add validation here if needed
        return () => preferences;
    }, [preferences]);

    return (
        <motion.div
          className="p-4 bg-light rounded shadow-sm"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
            <h4 className="mb-4 fw-bold">Work Preferences</h4>
            <p className="small text-muted mb-3">
                Set your preferred working type and availability. This helps us match you with relevant opportunities.
            </p>

            {/* Employment Type */}
            <div className="mb-3">
                <label className="form-label small fw-semibold mb-2">Employment Type</label>
                <div className="d-flex gap-2 flex-wrap">
                    {["Full Time", "Part Time", "Per Diem", "Temporary"].map((type) => (
                        <motion.button
                            type="button"
                            className={`btn btn-sm rounded-pill ${
                              preferences.employmentType === type ? "btn-primary text-white" : "btn-outline-primary"
                            }`}
                            onClick={() => setPreferences((prev) => ({ ...prev, employmentType: type }))}
                            whileHover="hover"
                            whileTap="tap"
                            variants={buttonVariants}
                            key={type}
                        >
                            {type}
                        </motion.button>
                    ))}
                </div>
            </div>

            {/* Availability */}
            <div className="mb-3 d-flex align-items-center gap-3">
                <label className="form-check-label fw-semibold">
                    <input
                        type="checkbox"
                        name="available"
                        checked={preferences.available}
                        onChange={change}
                        className="form-check-input me-2"
                    />
                    Available
                </label>

                <label className="form-check-label fw-semibold">
                    <input
                        type="checkbox"
                        name="willingToTravel"
                        checked={preferences.willingToTravel}
                        onChange={change}
                        className="form-check-input me-2"
                    />
                    Willing to Travel
                </label>
            </div>

            <p className="small text-muted">
                Being flexible and clear about your availability helps clients find you faster.
            </p>
        </motion.div>
    );
};