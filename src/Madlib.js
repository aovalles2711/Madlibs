import React, { useState } from 'react';
import MadlibForm from './MadlibForm';
import Story from './Story';
import { v4 as uuid } from 'uuid';

function Madlib() {
    const initialState = [];
    const [story, setStory] = useState(initialState);
    const [showStory, setShowStory] = useState(false);
    const createStory = (newStory) => {
        setStory((entries) => [...entries, { ...newStory, id: uuid() }]);
    };
    return (
        <div className='Madlib'>
            <h1>Madlibs!</h1>
            {showStory ? (
                <Story
                    setShowStory={setShowStory}
                    setStory={setStory}
                    story={story[0]}
                />
            ) : (
                <MadlibForm setShowStory={setShowStory} createStory={createStory} />
            )}
        </div>
    );
}

export default Madlib;