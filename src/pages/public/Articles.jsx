import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FiCalendar, FiSearch } from "react-icons/fi";
import { Spinner } from "../../components/Spinner";
import { mockNews } from "../../api/FakeApi";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";
import { routes } from "../../routes/Routes";

const categories = [
    'All',
    'App Updates',
    'Industry Insights', 
    'Wellness',
    'Stories'
];

export const Articles = () => {
    const [articles, setArticles] = useState([]);
    const [trendingArticle, setTrendingArticle] = useState(null);
    const [loading, setLoading] = useState(true);

    const search = (data) =>{
        setLoading(true);
        mockNews(data).then((response)=>{
            setArticles(response.data.data.slice(1));
            setTrendingArticle(response.data.data[0]);
        }).catch((error)=>{
            setArticles([]);
            setTrendingArticle(null);
        }).finally(()=>setLoading(false));
    }

    useEffect(() => {
        search({
            value: '',
            category: 'All'
        });
    }, []);

    return (
        <div className="container my-5">
            {/* Header */}
            <motion.div
                className="text-center mb-5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <h2 className="fw-bold mb-2">Latest News</h2>
                <p className="text-muted">
                    Stay informed with the latest updates, trends, and stories in healthcare.
                </p>
            </motion.div>

            <SearchCategory onChange={search} />
            
            {loading ? (<Spinner show inline style={{height: '200px'}} />) : (
                <>
                    {/* Featured Article */}
                    {trendingArticle && (
                        <motion.div
                            className="row mb-5"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <div className="col-12 col-lg-8 mx-auto">
                                <div className="card shadow-sm rounded-4 overflow-hidden">
                                    <img
                                        src={trendingArticle.attributes.image}
                                        className="card-img-top"
                                        alt={trendingArticle.attributes.title}
                                    />
                                    <div className="card-body">
                                        <div className="d-flex align-items-center mb-2 text-muted small">
                                            <FiCalendar className="me-1" />
                                            <span>{trendingArticle.attributes.date}</span>
                                        </div>
                                        <h4>{trendingArticle.attributes.title}</h4>
                                        <p className="text-muted">{trendingArticle.attributes.summary}</p>
                                        <Link to={routes.public().article()} className="btn btn-primary rounded-pill">
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* Article Cards */}
                    <div className="row g-4">
                        {
                            articles.length > 0 ?
                            articles.map((article, i) => (
                                <motion.div
                                    className="col-12 col-md-6 col-lg-4"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: i * 0.2 }}
                                    key={article.id}
                                >
                                    <div className="card shadow-sm h-100 rounded-4 overflow-hidden">
                                        <img src={article.attributes.image} className="card-img-top" alt={article.attributes.title} />
                                        <div className="card-body d-flex flex-column">
                                            <div className="d-flex align-items-center mb-2 text-muted small">
                                                <FiCalendar className="me-1" />
                                                <span>{article.attributes.date}</span>
                                            </div>
                                            <h5 className="card-title">{article.attributes.title}</h5>
                                            <p className="card-text text-muted">{article.attributes.summary}</p>
                                            <Link to={routes.public().article()} className="btn btn-primary mt-auto rounded-pill">
                                                Read More
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                            )):
                            <div>
                                No records
                            </div>
                        }
                    </div>
                </>
            )}
        </div>
    );
};

const SearchCategory = ({onChange}) =>{
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('');

    const timeoutRef = useRef();

    const change = (key, value) =>{
        const data = {
            value: search,
            category: category,
            [key]: value
        };
        setSearch(data.value);
        setCategory(data.category);

        if(['category'].includes(key)) return onChange(data);

        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
            onChange(data);
        }, 500);
    }

    return(
        <motion.div
            className="row m-0 p-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
        >
            <div className="col-12 col-lg-8 mx-auto mb-4 d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-center gap-3">
                <div className="on-hover d-flex align-items-center border rounded-pill overflow-hidden w-100 px-3 py-1">
                    <FiSearch className="text-muted fs-3" />
                    <input
                        className="form-control border-0 shadow-none ps-1 pe-2"
                        placeholder="Search articles..."
                        onChange={(e)=>change('value', e.target.value)}
                        value={search}
                        type="text"
                    />
                    <button onClick={()=>change('value', '')} className="hover-visible btn border-0 d-flex align-items-center p-0">
                        <GrClose className="text-muted fs-5" />
                    </button>
                </div>
                <div className="d-flex flex-wrap gap-2">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={()=>change('category', cat)}
                            className={`btn btn-sm rounded-pill btn-${
                                category === cat 
                                    ? 'primary' 
                                    : 'outline-primary'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}