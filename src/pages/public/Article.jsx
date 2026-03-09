import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { BiArrowBack, BiShareAlt, BiCalendar, BiTime } from "react-icons/bi";
import { useEffect, useState } from "react";
import { mockNews } from "../../api/FakeApi";

export const Article = () => {

    const { id } = useParams();

    const [article, setArticle] = useState(null);
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        mockNews().then((response) => {
            setArticles(response.data.data);
            setArticle(response.data.data[0]);

        });
    }, [id]);

    if (!article) {
        return (
            <div className="container py-5 text-center">
                <h4>Article not found</h4>
            </div>
        );
    }

    const {
        title,
        summary,
        image,
        date,
        category,
        author,
        authorRole,
        readingTime,
        tags,
        content
    } = article.attributes;

    return (
        <div className="container py-4">

            {/* Back */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mb-3"
            >
                <Link
                    to="/news"
                    className="btn btn-light d-inline-flex align-items-center gap-2"
                >
                    <BiArrowBack />
                    Back to News
                </Link>
            </motion.div>

            {/* Image */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-4"
            >
                <img
                    src={image}
                    alt={title}
                    className="img-fluid rounded-3 shadow-sm w-100"
                    style={{ maxHeight: "400px", objectFit: "cover" }}
                />
            </motion.div>

            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-4"
            >

                <div className="d-flex flex-wrap align-items-center gap-3 mb-2">

                    <span className="badge bg-primary">
                        {category}
                    </span>

                    <span className="text-muted small d-flex align-items-center gap-1">
                        <BiCalendar />
                        {new Date(date).toDateString()}
                    </span>

                    <span className="text-muted small d-flex align-items-center gap-1">
                        <BiTime />
                        {readingTime}
                    </span>

                </div>

                <h1 className="fw-bold">{title}</h1>

                <p className="lead text-muted">{summary}</p>

                {/* Author */}
                <div className="small text-muted mt-2">
                    By <strong>{author}</strong> • {authorRole}
                </div>

            </motion.div>

            {/* Tags */}
            {tags && (
                <div className="mb-4">
                    {tags.map((tag, i) => (
                        <span
                            key={i}
                            className="badge bg-light text-dark me-2 mb-2"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            )}

            {/* Content */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mb-5"
                style={{ maxWidth: "800px", lineHeight: "1.8" }}
            >
                {content.map((p, i) => (
                    <p key={i}>{p}</p>
                ))}
            </motion.div>

            {/* Share */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="border-top pt-4 d-flex align-items-center justify-content-between flex-wrap gap-3"
            >

                <div className="text-muted small">
                    Share this article
                </div>

                <button className="btn btn-outline-primary d-flex align-items-center gap-2">
                    <BiShareAlt />
                    Share
                </button>

            </motion.div>

            {/* Related */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-5"
            >

                <h5 className="mb-3">Related Articles</h5>

                <div className="row">

                    {articles
                        .filter(a => a.id !== article.id)
                        .slice(0, 3)
                        .map((a) => (

                            <div key={a.id} className="col-12 col-md-4 mb-3">

                                <Link
                                    to={`/news/${a.id}`}
                                    className="card border-0 shadow-sm h-100 text-decoration-none"
                                >

                                    <img
                                        src={a.attributes.image}
                                        className="card-img-top"
                                        style={{ height: "160px", objectFit: "cover" }}
                                    />

                                    <div className="card-body">

                                        <span className="badge bg-light text-dark mb-2">
                                            {a.attributes.category}
                                        </span>

                                        <h6 className="card-title">
                                            {a.attributes.title}
                                        </h6>

                                    </div>

                                </Link>

                            </div>

                        ))}

                </div>

            </motion.div>

        </div>
    );
};