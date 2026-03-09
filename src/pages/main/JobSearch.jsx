import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "../../routes/Routes";

// Dummy job data
const dummyJobs = [
    {
        id: 1,
        title: "ICU Nurse",
        type: "Full-time",
        location: "New York, NY",
        distance: 2.3,
        skills: ["ICU", "Critical Care"],
        shift: "Day",
        posted: "2026-03-01",
    },{
        id: 2,
        title: "Geriatric Care Nurse",
        type: "Part-time",
        location: "Brooklyn, NY",
        distance: 5.1,
        skills: ["Elderly Care", "Medication Management"],
        shift: "Evening",
        posted: "2026-03-02",
    },{
        id: 3,
        title: "Surgical Ward Nurse",
        type: "Full-time",
        location: "Queens, NY",
        distance: 3.5,
        skills: ["Surgery Assistance", "Post-op Care"],
        shift: "Night",
        posted: "2026-02-28",
    },{
        id: 4,
        title: "Obstetrics Nurse",
        type: "Temporary",
        location: "Manhattan, NY",
        distance: 1.8,
        skills: ["OB/GYN", "Neonatal Care"],
        shift: "Day",
        posted: "2026-03-03",
    },
];

export const JobSearch = () =>{
    const [filterLocation, setFilterLocation] = useState("");
    const [filterType, setFilterType] = useState("");
    const [filterSkill, setFilterSkill] = useState("");

    const navigate = useNavigate();

    const filteredJobs = dummyJobs.filter((job) => {
        const matchLocation = filterLocation
            ? job.location.toLowerCase().includes(filterLocation.toLowerCase())
            : true;
        const matchType = filterType ? job.type === filterType : true;
        const matchSkill = filterSkill
            ? job.skills.some((s) => s.toLowerCase().includes(filterSkill.toLowerCase()))
            : true;
        return matchLocation && matchType && matchSkill;
    });

    return (
        <div className="container my-4">
            <h3 className="mb-4">Search Jobs / Clients</h3>

            {/* Filters */}
            <div className="row mb-4 g-2">
                <div className="col-md-4">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Location"
                        value={filterLocation}
                        onChange={(e) => setFilterLocation(e.target.value)}
                    />
                </div>
                <div className="col-md-4">
                    <select
                        className="form-select"
                        value={filterType}
                        onChange={(e) => setFilterType(e.target.value)}
                    >
                        <option value="">All Types</option>
                        <option value="Full-time">Full-time</option>
                        <option value="Part-time">Part-time</option>
                        <option value="Temporary">Temporary</option>
                    </select>
                </div>
                <div className="col-md-4">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Skill"
                        value={filterSkill}
                        onChange={(e) => setFilterSkill(e.target.value)}
                    />
                </div>
            </div>

            {/* Job List */}
            {filteredJobs.length === 0 ? (
                <p>No jobs found matching your criteria.</p>
            ) : (
                <div className="row g-3">
                    {filteredJobs.map((job) => (
                        <div className="col-md-6 col-lg-4" key={job.id}>
                            <div className="card shadow-sm h-100">
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">{job.title}</h5>
                                    <p className="card-text mb-1">
                                        <strong>Type:</strong> {job.type}
                                    </p>
                                    <p className="card-text mb-1">
                                        <strong>Location:</strong> {job.location} ({job.distance}{' '}km)
                                    </p>
                                    <p className="card-text mb-1">
                                        <strong>Shift:</strong> {job.shift}
                                    </p>
                                    <p className="card-text mb-2">
                                        <strong>Skills:</strong>{' '}
                                        {job.skills.map((s, i) => (
                                            <span className="badge bg-primary me-1" key={i}>{s}</span>
                                        ))}
                                    </p>
                                    <button onClick={()=>navigate(routes.main().viewNurses(job.id))} className="btn btn-outline-primary mt-auto">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}