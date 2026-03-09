import { useState } from "react";
import { useWizardValidity } from "../../../providers/WizardProvider";
import { motion, AnimatePresence } from "framer-motion";
import { BsUpload } from "react-icons/bs";

export const Documents = () => {
    const [documents, setDocuments] = useState({
        certificates: [],
        licenses: [],
        jobLetters: [],
    });

    const handleFileChange = (e, type) => {
        const files = Array.from(e.target.files);
        setDocuments((prev) => ({
            ...prev,
            [type]: [...prev[type], ...files],
        }));
    };

    useWizardValidity(() => {
        // You can validate here if needed
        return () => documents;
    }, [documents]);

    const uploadCard = (label, type) => (
        <motion.div
            className="border border-dashed rounded-3 p-4 text-center mb-4 position-relative bg-light"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
        >
            <label className="d-flex flex-column align-items-center justify-content-center mb-0 cursor-pointer">
                <BsUpload className="fs-1 mb-2 text-primary" />
                <span className="fw-semibold">{label}</span>
                <small className="text-muted">Click or drag files here</small>
                <input
                    type="file"
                    multiple
                    onChange={(e) => handleFileChange(e, type)}
                    className="position-absolute top-0 start-0 w-100 h-100 opacity-0 cursor-pointer"
                />
            </label>

            {/* Preview files */}
            <AnimatePresence>
                {documents[type].length > 0 && (
                    <motion.ul
                        className="list-group mt-3"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                    >
                        {documents[type].map((file, idx) => (
                            <motion.li
                                key={idx}
                                className="list-group-item d-flex justify-content-between align-items-center"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                            >
                                {file.name}
                                <button
                                    className="btn btn-sm btn-outline-danger"
                                    onClick={() =>
                                        setDocuments((prev) => ({
                                            ...prev,
                                            [type]: prev[type].filter((_, i) => i !== idx),
                                        }))
                                    }
                                >
                                    Remove
                                </button>
                            </motion.li>
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>
        </motion.div>
    );

    return (
        <div>
            <h4 className="mb-4">Upload Your Documents</h4>
            {uploadCard("Certificates", "certificates")}
            {uploadCard("Licenses", "licenses")}
            {uploadCard("Job Letters", "jobLetters")}
        </div>
    );
};