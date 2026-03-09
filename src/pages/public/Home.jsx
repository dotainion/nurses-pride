import { IoLogoGooglePlaystore } from "react-icons/io5";
import { PiAppleLogoFill } from "react-icons/pi";
import { motion } from "framer-motion";
import { AuthButton } from "../../components/AuthButton";
import img from "../../assets/images/undraw_medicine_hqqg.png";
import img2 from "../../assets/images/undraw_google-docs_fwhy.png";
import img3 from "../../assets/images/undraw_professor_d7zn.png";
import img4 from "../../assets/images/undraw_order-confirmed_m9e9.png";

const fadeLeft = { hidden: { opacity: 0, x: -100 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8 } } };
const fadeRight = { hidden: { opacity: 0, x: 100 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8 } } };
const fadeUp = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } };

export const Home = () => {
    return (
        <div>
            {/* Hero Section */}
            <motion.div className="bg-light" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeRight}>
                <div className="container">
                    <div className="row p-0 m-0 mb-5 align-items-center" style={{minHeight: '100vh'}}>
                        <motion.div className="col-12 col-md-6 py-5" variants={fadeLeft}>
                            <img className="w-100" src={img} alt="Hero" />
                        </motion.div>
                        <motion.div className="col-12 col-md-6" variants={fadeRight}>
                            <div>
                                <h2 className="fw-bold">FREEDOM IS YOUR CULTURE</h2>
                                <p>Optimize staffing and hire per diem healthcare professionals on demand with Nurse's Pride.</p>
                                <div className="d-flex gap-3 mt-4 flex-wrap">
                                    <AuthButton className="btn btn-primary rounded-pill px-4 py-2">
                                        Find Clients
                                    </AuthButton>
                                    <AuthButton className="btn btn-outline-primary rounded-pill px-4 py-2">
                                        Change Open Shifts
                                    </AuthButton>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            {/* How It Works Section */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <div className="container">
                    <div className="row p-0 m-0 mb-5 align-items-center">
                        <motion.div className="col-12 col-md-6 d-flex align-items-center" variants={fadeLeft}>
                            <div className="my-5">
                                <h2>HOW IT WORKS</h2>
                                <p>Nurse's Pride eliminates the need to rely on conventional healthcare staffing agencies by removing the middleman and cutting tedious obstacles out of the process.</p>
                                <div className="bg-dark bg-opacity-10 py-4 rounded-4 mt-5">
                                    <h6 className="text-center small mb-3">Download the Nurse's Pride App</h6>
                                    <div className="d-flex justify-content-center gap-2 flex-wrap">
                                        <div className="d-flex align-items-center rounded-3 bg-dark text-white small p-2 cursor-pointer">
                                          <PiAppleLogoFill className="fs-3 me-2" />
                                          <div className="small">
                                              <div className="small lh-1">Download on the</div>
                                              <div className="fw-semibold lh-1">App Store</div>
                                          </div>
                                        </div>
                                        <div className="d-flex align-items-center rounded-3 bg-dark text-white small p-2 cursor-pointer">
                                            <IoLogoGooglePlaystore className="fs-3 me-2" />
                                            <div className="small">
                                                <div className="small lh-1">Get it on</div>
                                                <div className="fw-semibold lh-1">Google Play</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <AuthButton className="btn btn-primary px-3 mt-5">
                                    Learn More...
                                </AuthButton>
                            </div>
                        </motion.div>
                        <motion.div className="col-12 col-md-6 py-5" variants={fadeRight}>
                            <img className="w-100" src={img2} alt="How it works" />
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            {/* Flexibility Section */}
            <motion.div className="bg-dark text-white" initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <div className="container">
                    <div className="row p-0 m-0 mb-5 align-items-center">
                        <motion.div className="col-12 col-md-6 py-5" variants={fadeLeft}>
                            <img className="w-100" src={img3} alt="Flexibility" />
                        </motion.div>
                        <motion.div className="col-12 col-md-6 d-flex align-items-center" variants={fadeRight}>
                            <div className="my-5">
                                <h4>The Flexibility to be your own boss</h4>
                                <p>
                                    Finding nurses to hire is now swift and easy with Nurse's Pride. Fill last-minute call-outs,
                                    long or short-term leaves, and more without relying on costly staffing agencies.
                                </p>
                                <ul className="list-group mt-5">
                                    <li className="list-group-item bg-dark text-white">Browse and pick up local shifts, working when and where you want.</li>
                                    <li className="list-group-item bg-dark text-white">Gain freedom as an independent contractor, no minimum hours required.</li>
                                    <li className="list-group-item bg-dark text-white">Choose shifts at multiple nearby facilities or stick to your favorites.</li>
                                    <li className="list-group-item bg-dark text-white">Prevent burnout with per diem jobs at your own pace.</li>
                                    <li className="list-group-item bg-dark text-white">Stay in control of your income with instant, same-day payments.</li>
                                    <li className="list-group-item bg-dark text-white">Black books</li>
                                </ul>
                                <AuthButton className="btn btn-primary mt-5">
                                    Start Working Today
                                </AuthButton>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            {/* Clients Section */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <div className="container">
                    <div className="row p-0 m-0 mb-5 align-items-center">
                        <motion.div className="col-12 col-md-6 d-flex align-items-center" variants={fadeLeft}>
                            <div className="my-5">
                                <h4>Benefits for Healthcare Facilities & Clients</h4>
                                <p>Instant access to qualified healthcare professionals for all your staffing needs.</p>
                                <ul className="list-group mt-5">
                                    <li className="list-group-item">Rapid coverage for last-minute shifts or planned staffing gaps.</li>
                                    <li className="list-group-item">Boost your workforce without hiring full-time staff.</li>
                                    <li className="list-group-item">24/7 direct support from Nurse's Pride team.</li>
                                </ul>
                                <AuthButton className="btn btn-primary mt-5">
                                    Start Working Today
                                </AuthButton>
                            </div>
                        </motion.div>
                        <motion.div className="col-12 col-md-6 py-5" variants={fadeRight}>
                            <img className="w-100" src={img4} alt="Clients Section" />
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            {/* Services / Cards Section */}
            <motion.div className="bg-light" initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <div className="container">
                    <div className="row px-0 m-0 py-5 g-3">
                        {[
                            { title: "Assisted & Senior Living", desc: "Senior living centers, long-term care, retirement facilities, residential care homes." },
                            { title: "Behavioral Health", desc: "Facilities for mental health, substance use disorders, medical detox, psychiatric care." },
                            { title: "Long-term Care & Skilled Nursing", desc: "PRN healthcare staffing for nursing homes and long-term care centers." }
                        ].map((card, index) => (
                            <motion.div key={index} className="col-12 col-md-4 p-2" variants={fadeUp}>
                                <img className="w-100 rounded-3 shadow" src={img} alt={card.title} />
                                <div className="py-2">
                                    <h4>{card.title}</h4>
                                    <p>{card.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    );
};