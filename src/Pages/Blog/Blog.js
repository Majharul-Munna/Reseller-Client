import React from 'react';
import img1 from "../../assets/image/UmaidSir.jpg";
import img2 from "../../assets/image/AsadSir.jpg";
import img3 from "../../assets/image/Majharul.jpg";

const Blog = () => {
    return (
        <div className='my-4 mx-4 bg-base-200'>




            <div className='flex mt-5'>
                <div className="hero  bg-base-200">
                    <div className="hero-content h-50 flex-col lg:flex-row">
                        <img src={img1} className=" max-w-sm rounded-lg shadow-2xl" alt='' />
                        <div>
                            <h1 className="text-3xl text-blue-500 mb-2 font-bold">Supervisor</h1>
                            <h1 className="text-2xl font-bold">Md Umaid Hasan</h1>
                            <p className="">Lecturer</p>
                            <p className="">Daffodil International University</p>
                            <p className="">Email: umaid.cse@diu.edu.bd</p>
                            <p className="">Phone: 01764390924</p>
                        </div>
                    </div>
                </div>

                <div className="hero  bg-base-200">
                    <div className="hero-content h-50 flex-col lg:flex-row">
                        <img src={img2} className=" max-w-sm rounded-lg shadow-2xl" alt='' />
                        <div>
                            <h1 className="text-3xl text-blue-500 mb-2 font-bold">Co-Supervisor</h1>
                            <h1 className="text-2xl font-bold">Md Assaduzzaman</h1>
                            <p className="">Lecturer</p>
                            <p className="">Daffodil International University</p>
                            <p className="">Email: assaduzzaman.cse@diu.edu.bd</p>
                            <p className="">Phone: 01824089009</p>
                        </div>
                    </div>
                </div>
            </div>

            
            <div className="hero h-30 bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={img3} className=" max-w-sm rounded-lg h-20 shadow-2xl" alt='' />
                    <div>
                        <h1 className="text-3xl text-blue-500 mb-2 font-bold">Presenter</h1>
                        <h1 className="text-2xl font-bold">Md. Majharul Islam Munna</h1>
                        <p className="">Student ID: 192-15-2790</p>
                        <p className="">Daffodil International University</p>
                        <p className="">Email: majharul15-2790@diu.edu.bd</p>
                        <p className="">Phone: 01763937037</p>
                    </div>
                </div>
            </div>


            {/* <div className="collapse collapse-plus bg-base-200">
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
            </div> */}




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