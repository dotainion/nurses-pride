import { useState } from "react";
import { motion } from "framer-motion";
import { BiSave, BiPlus, BiTrash } from "react-icons/bi";

export const AdminArticles = () => {

    const [form, setForm] = useState({
        title: "",
        summary: "",
        category: "",
        author: "",
        authorRole: "",
        readingTime: "",
        tags: "",
        image: "",
        content: [""]
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleContentChange = (index, value) => {
        const updated = [...form.content];
        updated[index] = value;

        setForm({
            ...form,
            content: updated
        });
    };

    const addParagraph = () => {
        setForm({
            ...form,
            content: [...form.content, ""]
        });
    };

    const removeParagraph = (index) => {
        const updated = form.content.filter((_, i) => i !== index);

        setForm({
            ...form,
            content: updated
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const article = {
            id: Date.now(),
            attributes: {
                ...form,
                date: new Date().toISOString().split("T")[0],
                tags: form.tags.split(",").map(t => t.trim())
            }
        };

        console.log("New Article:", article);

        alert("Article Created (check console)");
    };

    return (
        <div className="container py-4">

            <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mb-4"
            >
                Create Article
            </motion.h2>

            <form onSubmit={handleSubmit} className="card shadow-sm p-4 border-0">

                {/* Title */}
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input
                        name="title"
                        value={form.title}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>

                {/* Summary */}
                <div className="mb-3">
                    <label className="form-label">Summary</label>
                    <textarea
                        name="summary"
                        value={form.summary}
                        onChange={handleChange}
                        className="form-control"
                        rows="2"
                        required
                    />
                </div>

                {/* Category */}
                <div className="mb-3">
                    <label className="form-label">Category</label>
                    <input
                        name="category"
                        value={form.category}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="App Updates / Wellness / Industry"
                    />
                </div>

                {/* Author */}
                <div className="row">

                    <div className="col-md-6 mb-3">
                        <label className="form-label">Author</label>
                        <input
                            name="author"
                            value={form.author}
                            onChange={handleChange}
                            className="form-control"
                        />
                    </div>

                    <div className="col-md-6 mb-3">
                        <label className="form-label">Author Role</label>
                        <input
                            name="authorRole"
                            value={form.authorRole}
                            onChange={handleChange}
                            className="form-control"
                        />
                    </div>

                </div>

                {/* Reading Time */}
                <div className="mb-3">
                    <label className="form-label">Reading Time</label>
                    <input
                        name="readingTime"
                        value={form.readingTime}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="4 min read"
                    />
                </div>

                {/* Tags */}
                <div className="mb-3">
                    <label className="form-label">Tags (comma separated)</label>
                    <input
                        name="tags"
                        value={form.tags}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Technology, Healthcare"
                    />
                </div>

                {/* Image */}
                <div className="mb-3">
                    <label className="form-label">Image URL</label>
                    <input
                        name="image"
                        value={form.image}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="https://..."
                    />
                </div>

                {/* Content */}
                <div className="mb-3">

                    <label className="form-label">Article Content</label>

                    {form.content.map((paragraph, index) => (

                        <div key={index} className="d-flex gap-2 mb-2">

                            <textarea
                                value={paragraph}
                                onChange={(e) =>
                                    handleContentChange(index, e.target.value)
                                }
                                className="form-control"
                                rows="3"
                                placeholder={`Paragraph ${index + 1}`}
                            />

                            {form.content.length > 1 && (
                                <button
                                    type="button"
                                    className="btn btn-outline-danger"
                                    onClick={() => removeParagraph(index)}
                                >
                                    <BiTrash />
                                </button>
                            )}

                        </div>

                    ))}

                    <button
                        type="button"
                        className="btn btn-outline-secondary mt-2 d-flex align-items-center gap-2"
                        onClick={addParagraph}
                    >
                        <BiPlus />
                        Add Paragraph
                    </button>

                </div>

                {/* Submit */}
                <div className="mt-3">

                    <button className="btn btn-primary d-flex align-items-center gap-2">
                        <BiSave />
                        Publish Article
                    </button>

                </div>

            </form>

        </div>
    );
};