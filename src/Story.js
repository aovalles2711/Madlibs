import React from 'react';
import './Story.css';

function Story({ setShowStory, setStory, story}) {
    const restart = () => {
        setShowStory(false);
        setStory([]);
    };
    return (
        <div className='Story'>
            <p>
                There once was a {story.color} {story.noun} with a {story.adjective} {story.noun2} who learned how to tie their {story.noun3}.
            </p>
            <button onClick={restart}>Restart</button>
        </div>
    );
}

export default Story;