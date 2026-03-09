import { useState } from "react";
import { useWizardValidity } from "../../../providers/WizardProvider";
import { motion } from "framer-motion";

export const Skills = () => {
    const [selected, setSelected] = useState([]);
    const [skills, setSkills] = useState({});

    const departments = [
        "Medical Ward",
        "Surgical Ward",
        "Operating Theatre",
        "Recovery",
        "ICU",
        "Emergency",
        "Obstetrics & Gynaecology",
        "Pediatrics",
        "Geriatrics",
        "Mental Health",
        "Cardiology",
        "Oncology",
    ];

    const toggle = (dept) => {
        let arr = [...selected];
        if (arr.includes(dept)) arr = arr.filter((d) => d !== dept);
        else arr.push(dept);
        setSelected(arr);
        setSkills({ ...skills, selectedDepartments: arr });
    };

    const containerVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    const pillVariants = {
        hover: { scale: 1.05 },
        tap: { scale: 0.95 },
    };

    useWizardValidity(() => {
        // Add validation here if needed
        return () => skills;
    }, [skills]);

    return (
        <motion.div
            className="p-4 bg-light rounded shadow-sm"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <h4 className="mb-4 fw-bold">Skill Set</h4>
            <p className="small text-muted mb-3">
                Select the departments or skill areas you are experienced in. This helps us match you with
                appropriate clients and opportunities.
            </p>

            <div className="d-flex flex-wrap gap-2">
                {departments.map((d) => (
                  <motion.button
                      type="button"
                      onClick={() => toggle(d)}
                      className={`btn btn-sm rounded-pill ${
                          selected.includes(d) ? "btn-primary text-white" : "btn-outline-primary"
                      }`}
                      whileHover="hover"
                      whileTap="tap"
                      variants={pillVariants}
                      key={d}
                  >
                      {d}
                  </motion.button>
                ))}
            </div>

            {selected.length > 0 && (
                <div className="mt-4">
                    <h6 className="fw-semibold">Selected Skills:</h6>
                    <div className="d-flex flex-wrap gap-2 mt-2">
                        {selected.map((d) => (
                            <span key={d} className="badge bg-primary">
                                {d}
                            </span>
                        ))}
                    </div>
                </div>
            )}
        </motion.div>
    );
};