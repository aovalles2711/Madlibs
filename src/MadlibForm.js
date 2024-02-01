import React, { useState } from "react";
import "./MadlibForm.css";

function MadlibForm({ setShowStory, createStory}) {
    const initialState = { color: "", noun: "", noun2: "", noun3: "" };
    const [formData, setFormData] = useState(initialState);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((formData) => ({
            ...formData, [name]: value,
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        createStory({ ...formData });
        setFormData(initialState);
        setShowStory(true);
    };
    return (
        <div className="MadlibForm">
            <form onSubmit={handleSubmit}>
                <input
                    required
                    id="color"
                    type="type"
                    name="color"
                    placeholder="Color"
                    value={formData.color}
                    onChange={handleChange}
                />
                <input
                    required
                    id="noun"
                    type="type"
                    name="noun"
                    placeholder="First Noun"
                    value={formData.noun}
                    onChange={handleChange}
                />
                <input
                    required
                    id="adjective"
                    type="type"
                    name="adjective"
                    placeholder="Adjective"
                    value={formData.adjective}
                    onChange={handleChange}
                />
                <input
                    required
                    id="noun2"
                    type="type"
                    name="noun2"
                    placeholder="Second Noun"
                    value={formData.noun2}
                    onChange={handleChange}
                />
                <input
                    required
                    id="noun3"
                    type="type"
                    name="noun3"
                    placeholder="Third Noun"
                    value={formData.noun3}
                    onChange={handleChange}
                />
                <button>Submit</button>
            </form>
        </div>
    );
}

export default MadlibForm;