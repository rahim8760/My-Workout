import './Question.css';
import React from 'react';

const Question = () => {
    return (
        <div>
            <h1 className=''>Question</h1>
            <div className="Question">
                <h1>how React works?</h1>

                <p>React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes</p>
            </div>
            <div className="Question">
                <h1>react props state difference?</h1>

                <p>The key difference between props and state is that state is internal and controlled by the component itself while props are external and controlled by whatever renders the component.</p>
            </div>
            <div className="Question">
                <h1>how useeffect works in react?</h1>

                <p>What does useEffect do? By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we'll refer to it as our “effect”), and call it later after performing the DOM updates.</p>
            </div>

        </div>
    );
};

export default Question;
