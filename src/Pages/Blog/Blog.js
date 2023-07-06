import React from 'react';

const Blog = () => {
    return (
        <div className='my-4 mx-4 '>



            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-4" checked="checked" />
                <div className="collapse-title text-xl font-medium">
                1. What are the different ways to manage a state in a React application?
                </div>
                <div className="collapse-content">
                    <p>There are four main types of state you need to properly manage in your React apps:</p>
                    <p>1. Local state</p>
                    <p>2. Global state</p>
                    <p>3. Server state</p>
                    <p>4. URL state</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium">
                2. How does prototypical inheritance work?
                </div>
                <div className="collapse-content">
                    <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium">
                3. What is a unit test? Why should we write unit tests?
                </div>
                <div className="collapse-content">
                    <p>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium">
                4. React vs. Angular vs. Vue?
                </div>
                <div className="collapse-content">
                    <p>React is a UI library, Angular is a fully-fledged front-end framework, while Vue. js is a progressive framework.</p>
                </div>
            </div>




            {/* <div>
                <h2 className='text-2xl font-bold'>1. What are the different ways to manage a state in a React application?</h2>
                <p className='mt-2'>There are four main types of state you need to properly manage in your React apps:</p>
                <div >
                    <p>1. Local state</p>
                    <p>2. Global state</p>
                    <p>3. Server state</p>
                    <p>4. URL state</p>
                </div>
            </div>
            <div>
                <h2 className='text-2xl mt-4 font-bold'>2. How does prototypical inheritance work?</h2>
                <p className='mt-2'>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object.</p> 
            </div>
            <div>
                <h2 className='text-2xl mt-4 font-bold'>3. What is a unit test? Why should we write unit tests?</h2>
                <p className='mt-2'>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p> 
            </div>
            <div>
                <h2 className='text-2xl mt-4 font-bold'>4. React vs. Angular vs. Vue?</h2>
                <p className='mt-2'>React is a UI library, Angular is a fully-fledged front-end framework, while Vue. js is a progressive framework.</p> 
            </div> */}

        </div>
    );
};

export default Blog;