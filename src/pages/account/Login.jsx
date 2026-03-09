import { BiUser } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { routes } from "../../routes/Routes";
import { motion } from "framer-motion";
import logo from "../../assets/react.svg";
import { useAuth } from "../../providers/AuthProvider";

export const Login = () => {
    const { signIn } = useAuth();

    const navigate = useNavigate();

    const submit = (e) => {
        e.preventDefault();
        signIn();
        navigate(routes.main().dashboard());
    };

    return (
        <div className="container py-5">
            <div className="row justify-content-center p-0 m-0 align-items-center flex-column-reverse flex-md-row">
                {/* Info panel */}
                <motion.div
                    className="col-12 col-md-6 mb-4 mb-md-0 mt-5 mt-md-0 d-flex flex-column align-items-center text-center text-md-start"
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <img src={logo} alt="Nurse's Pride Logo" className="mb-3" style={{ maxWidth: "120px" }} />
                    <h3 className="fw-bold">Welcome to Nurse's Pride</h3>
                    <p className="text-muted">
                        Connect with trusted healthcare professionals easily and safely.
                    </p>
                </motion.div>

                {/* Login form */}
                <motion.div
                  className="col-12 col-md-6"
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <form onSubmit={submit} className="card shadow rounded-4 border">
                        <div className="card-body">
                            <BiUser className="bg-light d-block display-1 border rounded-circle m-auto p-3" />
                            <h4 className="text-center mt-3">Sign In</h4>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input
                                    className="form-control"
                                    placeholder="you@example.com"
                                    type="email"
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input
                                    className="form-control"
                                    placeholder="example@Password1"
                                    type="password"
                                    required
                                />
                            </div>
                            <div className="d-flex flex-column mt-4 mb-3">
                                <button className="btn btn-primary" type="submit">Login</button>
                            </div>
                            <Link to={routes.public().register()} className="link-primary">
                                Create Account
                            </Link>
                        </div>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};