import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { routes } from "../routes/Routes";
import logo from "../assets/react.svg";

export const Footer = () => {
    return (
        <motion.footer
            className="bg-dark text-white mt-auto pt-5 pb-3"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <div className="container">
                <div className="row align-items-start">
                    {/* Logo & Description */}
                    <div className="col-12 col-md-4 mb-4 text-center text-md-start">
                        <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-2 mb-3">
                            <img src={logo} alt="Nurse's Pride Logo" style={{ height: 40 }} />
                            <span className="fs-5 fw-bold">Nurse's Pride</span>
                        </div>
                        <p className="small">
                            Your platform to connect healthcare professionals with clients seamlessly.
                            Optimizing staffing, empowering caregivers, and simplifying care.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div className="col-6 col-md-2 mb-4 text-center text-md-start">
                        <h6 className="fw-bold mb-3">Explore</h6>
                        <ul className="list-unstyled">
                            <li><Link to={routes.public().home()} className="text-white text-decoration-none">Home</Link></li>
                            <li><Link to={routes.public().healthProfessionals()} className="text-white text-decoration-none">Health Professionals</Link></li>
                            <li><Link to={routes.public().articles()} className="text-white text-decoration-none">News</Link></li>
                            <li><Link to={routes.public().about()} className="text-white text-decoration-none">About Us</Link></li>
                        </ul>
                    </div>

                    {/* Account */}
                    <div className="col-6 col-md-2 mb-4 text-center text-md-start">
                        <h6 className="fw-bold mb-3">Account</h6>
                        <ul className="list-unstyled">
                            <li><Link to={routes.public().signin()} className="text-white text-decoration-none">Login</Link></li>
                            <li><Link to={routes.public().register()} className="text-white text-decoration-none">Sign Up</Link></li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div className="col-12 col-md-4 mb-4 text-center text-md-start">
                        <h6 className="fw-bold mb-3">Connect with us</h6>
                        <div className="d-flex justify-content-center justify-content-md-start gap-3 mb-3">
                            <a href="#" className="text-white"><FaFacebookF /></a>
                            <a href="#" className="text-white"><FaTwitter /></a>
                            <a href="#" className="text-white"><FaInstagram /></a>
                            <a href="#" className="text-white"><FaLinkedinIn /></a>
                        </div>
                        <p className="small mb-0">&copy; {new Date().getFullYear()} Nurse's Pride. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </motion.footer>
    );
};