import { useState } from "react";
import { useWizardValidity } from "../../../providers/WizardProvider";
import { motion } from "framer-motion";

export const Professional = () => {
    const [professional, setProfessional] = useState({
        dob: "",
        nationality: "",
        profession: "",
        experience: "",
        certifications: [],
        skills: [],
    });

    const change = (e) => {
        const { name, value } = e.target;
        setProfessional((prev) => ({
            ...prev,
            [name]: value,
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
        // Add validation if needed
        return () => professional;
    }, [professional]);

    return (
        <motion.div
            className="p-4 bg-light rounded shadow-sm"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <h4 className="mb-4 fw-bold">Professional Details</h4>

            <motion.div whileFocus="focus" variants={inputVariants} className="mb-3">
                <label className="form-label small fw-semibold">Date of Birth</label>
                <input
                    type="date"
                    name="dob"
                    className="form-control"
                    value={professional.dob}
                    onChange={change}
                />
            </motion.div>

            <motion.div whileFocus="focus" variants={inputVariants} className="mb-3">
                <label className="form-label small fw-semibold">Nationality</label>
                <input
                    className="form-control"
                    name="nationality"
                    placeholder="Enter nationality"
                    value={professional.nationality}
                    onChange={change}
                />
            </motion.div>

            <motion.div whileFocus="focus" variants={inputVariants} className="mb-3">
                <label className="form-label small fw-semibold">Profession / Role</label>
                <input
                    className="form-control"
                    name="profession"
                    placeholder="e.g., Registered Nurse, Caregiver"
                    value={professional.profession}
                    onChange={change}
                />
            </motion.div>

            <motion.div whileFocus="focus" variants={inputVariants} className="mb-3">
                <label className="form-label small fw-semibold">Years of Experience</label>
                <input
                    type="number"
                    className="form-control"
                    name="experience"
                    placeholder="e.g., 3"
                    value={professional.experience}
                    onChange={change}
                />
            </motion.div>

            <motion.div whileFocus="focus" variants={inputVariants} className="mb-3">
                <label className="form-label small fw-semibold">Certifications</label>
                <input
                    className="form-control"
                    name="certifications"
                    placeholder="Comma separated e.g., BLS, ACLS"
                    value={professional.certifications}
                    onChange={change}
                />
            </motion.div>

            <motion.div whileFocus="focus" variants={inputVariants} className="mb-3">
                <label className="form-label small fw-semibold">Skills</label>
                <input
                    className="form-control"
                    name="skills"
                    placeholder="Comma separated e.g., Patient Care, IV Therapy"
                    value={professional.skills}
                    onChange={change}
                />
            </motion.div>

            <p className="small text-muted mt-2">
                This information helps us match you with clients and job opportunities that fit your qualifications.
            </p>
        </motion.div>
    );
};