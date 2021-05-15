import React, { useState } from 'react';
import axios from 'axios';

export default ({ postId }) => {
    const [content, setContent] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();

        await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
            content,
        });

        setContent('');
    };
    return (
        <div>
            <form className="d-flex align-items-end" onSubmit={onSubmit}>
                <div className="input-group">
                    <input
                        value={content}
                        placeholder="Comment"
                        onChange={(e) => setContent(e.target.value)}
                        className="form-control"
                    />
                    <button className="btn btn-outline-primary">Submit</button>
                </div>
            </form>
        </div>
    );
};
