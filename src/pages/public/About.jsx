import { motion } from "framer-motion";
import img from "../../assets/images/undraw_medical-care_7m9g.png";
import missionImg from "../../assets/images/undraw_publish-article_u3z6.png";
import vissionImg from "../../assets/images/undraw_travel-booking_a6s2.png";
import excelenceImg from "../../assets/images/undraw_apartment-rent_oodr.png";
import integrityImg from "../../assets/images/undraw_team-work_i1f3.png";
import empowermentImg from "../../assets/images/undraw_indoor-bike_9lxj.png";


const fadeLeft = { hidden: { opacity: 0, x: -100 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8 } } };
const fadeRight = { hidden: { opacity: 0, x: 100 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8 } } };
const fadeUp = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } };

export const About = () => {
    return (
        <div>
            {/* Hero Section */}
            <motion.div className="bg-light py-5" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeRight}>
                <div className="container">
                    <div className="row align-items-center">
                        <motion.div className="col-12 col-md-6" variants={fadeLeft}>
                            <img className="w-100" src={img} alt="About Hero" />
                        </motion.div>
                        <motion.div className="col-12 col-md-6" variants={fadeRight}>
                            <h2 className="fw-bold">About Nurse's Pride</h2>
                            <p>
                                Nurse's Pride is dedicated to connecting healthcare professionals with clients in need of quality care. 
                                Our mission is to simplify staffing, empower nurses, and ensure clients receive trusted, reliable healthcare support.
                            </p>
                            <p>
                                Founded with a vision for better healthcare staffing, we provide a platform that saves time, reduces costs, and gives professionals and clients freedom and flexibility.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            {/* Mission Section */}
            <motion.div className="py-5" initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <div className="container">
                    <div className="row align-items-center mb-5">
                        <motion.div className="col-12 col-md-6 d-flex align-items-center" variants={fadeRight}>
                            <div>
                                <h3>Our Mission</h3>
                                <p>
                                    To empower healthcare professionals and provide seamless access to quality care for clients anywhere, anytime.
                                </p>
                            </div>
                        </motion.div>
                        <motion.div className="col-12 col-md-6" variants={fadeLeft}>
                            <img className="w-100" src={missionImg} alt="Mission" />
                        </motion.div>
                    </div>

                    <div className="row align-items-center mb-5">
                        <motion.div className="col-12 col-md-6 order-md-2 d-flex align-items-center" variants={fadeLeft}>
                            <div>
                                <h3>Our Vision</h3>
                                <p>
                                    A world where healthcare staffing is simple, reliable, and flexible — giving professionals and clients the freedom they deserve.
                                </p>
                            </div>
                        </motion.div>
                        <motion.div className="col-12 col-md-6 order-md-1" variants={fadeRight}>
                            <img className="w-100" src={vissionImg} alt="Vision" />
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            {/* Values / Cards Section */}
            <motion.div className="bg-light py-5" initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <div className="container">
                    <h3 className="text-center mb-5">Our Core Values</h3>
                    <div className="row g-3">
                        {[
                            {
                                img: integrityImg,
                                title: "Integrity",
                                desc: "We uphold the highest standards of ethics and honesty in every interaction."
                            },{
                                img: empowermentImg,
                                title: "Empowerment",
                                desc: "We give healthcare professionals the tools to succeed and thrive."
                            },{
                                img: excelenceImg,
                                title: "Excellence",
                                desc: "We strive for the highest quality of service for clients and professionals alike."
                            },
                        ].map((card, index) => (
                            <motion.div key={index} className="col-12 col-md-4" variants={fadeUp}>
                                <div className="card shadow-sm h-100">
                                    <img src={card.img} className="card-img-top rounded-top" alt={card.title} />
                                    <div className="card-body">
                                        <h5 className="card-title">{card.title}</h5>
                                        <p className="card-text">{card.desc}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Call to Action Section */}
            <motion.div className="py-5 text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <h3>Join Nurse's Pride Today</h3>
                <p>Whether you are a healthcare professional or a client seeking care, our platform simplifies your journey.</p>
                <button className="btn btn-primary px-4 py-2 mt-3">Get Started</button>
            </motion.div>
        </div>
    );
};