import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "../../routes/Routes";

// Dummy worker data
const dummyWorkers = [
    {
        id: 1,
        name: "Alice Johnson",
        type: "Full-time",
        location: "New York, NY",
        distance: 2.5,
        skills: ["ICU", "Critical Care"],
        availability: "Day",
        experience: 5,
    },
    {
        id: 2,
        name: "Michael Smith",
        type: "Part-time",
        location: "Brooklyn, NY",
        distance: 4.2,
        skills: ["Elderly Care", "Medication Management"],
        availability: "Evening",
        experience: 3,
    },
    {
        id: 3,
        name: "Sarah Lee",
        type: "Temporary",
        location: "Queens, NY",
        distance: 3.1,
        skills: ["Surgery Assistance", "Post-op Care"],
        availability: "Night",
        experience: 7,
    },
    {
        id: 4,
        name: "David Brown",
        type: "Full-time",
        location: "Manhattan, NY",
        distance: 1.9,
        skills: ["OB/GYN", "Neonatal Care"],
        availability: "Day",
        experience: 4,
    },
];

export const WorkerSearch = () =>{
    const [filterLocation, setFilterLocation] = useState("");
    const [filterType, setFilterType] = useState("");
    const [filterSkill, setFilterSkill] = useState("");
    const [filterAvailability, setFilterAvailability] = useState("");

    const navigate = useNavigate();

    const filteredWorkers = dummyWorkers.filter((worker) => {
      const matchLocation = filterLocation
        ? worker.location.toLowerCase().includes(filterLocation.toLowerCase())
        : true;
      const matchType = filterType ? worker.type === filterType : true;
      const matchSkill = filterSkill
        ? worker.skills.some((s) =>
            s.toLowerCase().includes(filterSkill.toLowerCase())
          )
        : true;
      const matchAvailability = filterAvailability
        ? worker.availability === filterAvailability
        : true;

      return matchLocation && matchType && matchSkill && matchAvailability;
    });

    return (
        <div className="container my-4">
            <h3 className="mb-4">Search Workers / Nurses</h3>

            {/* Filters */}
            <div className="row mb-4 g-2">
                <div className="col-md-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Location"
                        value={filterLocation}
                        onChange={(e) => setFilterLocation(e.target.value)}
                    />
                </div>
                <div className="col-md-3">
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
                <div className="col-md-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Skill"
                        value={filterSkill}
                        onChange={(e) => setFilterSkill(e.target.value)}
                    />
                </div>
                <div className="col-md-3">
                    <select
                        className="form-select"
                        value={filterAvailability}
                        onChange={(e) => setFilterAvailability(e.target.value)}
                    >
                        <option value="">Any Availability</option>
                        <option value="Day">Day</option>
                        <option value="Evening">Evening</option>
                        <option value="Night">Night</option>
                    </select>
                </div>
            </div>

            {/* Worker List */}
            {filteredWorkers.length === 0 ? (
                <p>No workers found matching your criteria.</p>
            ) : (
                <div className="row g-3">
                    {filteredWorkers.map((worker) => (
                        <div className="col-md-6 col-lg-4" key={worker.id}>
                            <div className="card shadow-sm h-100">
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">{worker.name}</h5>
                                    <p className="card-text mb-1">
                                        <strong>Type:</strong> {worker.type}
                                    </p>
                                    <p className="card-text mb-1">
                                        <strong>Location:</strong> {worker.location} (
                                        {worker.distance} km)
                                    </p>
                                    <p className="card-text mb-1">
                                        <strong>Experience:</strong> {worker.experience} years
                                    </p>
                                    <p className="card-text mb-1">
                                        <strong>Availability:</strong> {worker.availability}
                                    </p>
                                    <p className="card-text mb-2">
                                        <strong>Skills:</strong>{' '}
                                        {worker.skills.map((s, i) => (
                                            <span className="badge bg-success me-1" key={i}>{s}</span>
                                        ))}
                                    </p>
                                    <button onClick={()=>navigate(routes.main().viewNurses(worker.id))} className="btn btn-outline-primary mt-auto">
                                        Contact / Request
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