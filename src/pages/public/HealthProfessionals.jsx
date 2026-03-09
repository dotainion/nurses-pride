import { motion } from "framer-motion";
import { AuthButton } from "../../components/AuthButton";
import heroImg from "../../assets/images/undraw_doctor_aum1.png";
import verifiedImg from "../../assets/images/undraw_document-ready_o5d5.png";
import flexibleImg from "../../assets/images/undraw_articles_visl.png";
import communicationImg from "../../assets/images/undraw_online-profile_v9c1.png";

const images = {
    hero: heroImg,
    verified: verifiedImg,
    flexible: flexibleImg,
    communication: communicationImg,
};

const fadeLeft = { hidden: { opacity: 0, x: -100 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8 } } };
const fadeRight = { hidden: { opacity: 0, x: 100 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8 } } };
const fadeUp = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } };

export const HealthProfessionals = () => {
    return (
        <div className="py-5">
            <div className="bg-light py-5">
                <div className="container">
                    {/* Hero Section */}
                    <motion.div 
                        className="row align-items-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.div className="col-md-6" variants={fadeLeft}>
                            <h1 className="display-5 fw-bold">Health Professionals</h1>
                            <p className="lead text-muted">
                                Our verified network of nurses and caregivers provides personalized, high-quality care. 
                                From home care to specialized medical support, we connect clients with professionals they can trust.
                            </p>
                            <div className="d-flex justify-content-center">
                                <AuthButton to="/search-health-professionals" className="btn btn-primary btn-lg mt-3">
                                    Find a Health Professional
                                </AuthButton>
                            </div>
                        </motion.div>
                        <motion.div className="col-md-6 text-center" variants={fadeRight}>
                            <img src={images.hero} alt="Health Professionals" className="img-fluid" />
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Benefits Section - alternating layout */}
            <div className="bg-white py-5">
                <section className="container">
                    <motion.div className="row align-items-center mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeRight}>
                        <div className="col-md-6">
                            <img src={images.verified} alt="Verified Professionals" className="img-fluid" />
                        </div>
                        <div className="col-md-6">
                            <h3>Trusted & Verified Professionals</h3>
                            <p>
                                Every professional on our platform is verified and experienced, giving clients peace of mind.
                                We maintain a high standard of quality care for all our users.
                            </p>
                        </div>
                    </motion.div>
                </section>
            </div>

            <div className="bg-light py-5">
                <section className="container">
                    <motion.div className="row align-items-center mb-4 flex-md-row-reverse" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeLeft}>
                        <div className="col-md-6">
                            <img src={images.flexible} alt="Flexible Care" className="img-fluid" />
                        </div>
                        <div className="col-md-6">
                            <h3>Flexible Care Options</h3>
                            <p>
                                Professionals are available for hourly, daily, or long-term assignments. 
                                Clients can select services that fit their schedule and specific care needs.
                            </p>
                        </div>
                    </motion.div>
                </section>
            </div>
            
            <div className="bg-white py-5">
                <section className="container">
                    <motion.div className="row align-items-center mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeRight}>
                        <div className="col-md-6">
                            <img src={images.communication} alt="Easy Communication" className="img-fluid" />
                        </div>
                        <div className="col-md-6">
                            <h3>Direct & Efficient Communication</h3>
                            <p>
                                Chat, schedule, and manage appointments easily. Our platform allows clients and professionals to communicate seamlessly.
                            </p>
                        </div>
                    </motion.div>
                </section>
            </div>

            {/* How it works Section */}
            <div className="bg-light py-5">
                <motion.div className="container" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                    <h2 className="text-center mb-4">How It Works</h2>
                    <div className="row g-4">
                        <div className="col-md-3 text-center">
                            <div className="bg-white p-3 rounded shadow-sm">
                                <h6>Sign Up</h6>
                                <p className="text-muted small">Create an account as a professional or client.</p>
                            </div>
                        </div>
                        <div className="col-md-3 text-center">
                            <div className="bg-white p-3 rounded shadow-sm">
                                <h6>Browse Professionals</h6>
                                <p className="text-muted small">Search by specialty, experience, and location.</p>
                            </div>
                        </div>
                        <div className="col-md-3 text-center">
                            <div className="bg-white p-3 rounded shadow-sm">
                                <h6>Connect & Schedule</h6>
                                <p className="text-muted small">Message and arrange appointments directly.</p>
                            </div>
                        </div>
                        <div className="col-md-3 text-center">
                            <div className="bg-white p-3 rounded shadow-sm">
                                <h6>Review & Rate</h6>
                                <p className="text-muted small">Give feedback to maintain quality standards.</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* FAQs Section */}
            <div className="bg-white py-5">
                <motion.div className="container" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                    <h2 className="mb-3 text-center">Frequently Asked Questions</h2>
                    <div className="accordion" id="faqAccordion">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="faq1">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1">
                                    Who can join as a Health Professional?
                                </button>
                            </h2>
                            <div id="collapse1" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                <div className="accordion-body">
                                    Registered nurses, caregivers, or any qualified professional providing health or support services can join after verification.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="faq2">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2">
                                    Can clients find nurses for home care?
                                </button>
                            </h2>
                            <div id="collapse2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                <div className="accordion-body">
                                    Yes! Clients can search for professionals for home care, hospital support, elderly care, pediatric care, and more.
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* CTA for users who may have clicked wrong */}
            <motion.div className="text-center my-5 p-5 bg-light rounded shadow-sm" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <h4>Looking for Clients Instead?</h4>
                <p className="text-muted mb-3">
                    If you are a health professional trying to find clients, click below to start your search.
                </p>
                <AuthButton to="/search-clients" className="btn btn-outline-primary btn-lg">
                    Search for Clients
                </AuthButton>
            </motion.div>
        </div>
    );
};