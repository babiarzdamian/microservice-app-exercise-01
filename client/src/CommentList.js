import React from 'react';
import axios from 'axios';

export default ({ comments }) => {
    const renderedComments = comments.map((comment) => {
        let content;

        if (comment.status === 'aproved') {
            content = comment.content;
        }

        if (comment.status === 'pending') {
            content = 'This comment is awaiting moderation'
        }

        if (comment.status === 'rejected') {
            content = 'This comment has been rejected'
        }

        return <li key={comment.id} className={comment.status}>{content}</li>;
    });

    return <ul>{renderedComments}</ul>;
};
