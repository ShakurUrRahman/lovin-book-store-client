import React from 'react';

const Blog = () => {
    return (
        <div className='border-pink-400 bg-pink-50 border-8 m-8 rounded-lg'>
            <div>
                <h2 className='font-bold text-3xl text-pink-400 text-center my-5 mb-10'>Some Q/A's for you</h2>
            </div>
            <div>
                <h2 className='text-center text-lg bg-pink-300 mx-10 mb-3 rounded-xl py-3 font-bold'>What are the different ways to manage a state in a React application?</h2>
                <h2 className='text-center text-lg mx-10 mb-3 rounded-xl py-3 font-bold'>The Four Kinds of React State to Manage. They are -
                    <br />
                    1. Local state.
                    2. Global state.
                    3. Server state.
                    4. URL state.
                </h2>
            </div>
            <div>
                <h2 className='text-center text-lg bg-pink-300 mx-10 mb-3 rounded-xl py-3 font-bold'>How does prototypical inheritance work?</h2>
                <h2 className='text-center text-lg mx-10 mb-3 rounded-xl py-3 font-bold'>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.
                </h2>
            </div>
            <div>
                <h2 className='text-center text-lg bg-pink-300 mx-10 mb-3 rounded-xl py-3 font-bold'>What is a unit test? Why should we write unit tests?</h2>
                <h2 className='text-center text-lg mx-10 mb-3 rounded-xl py-3 font-bold'>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
                </h2>
            </div>
            <div>
                <h2 className='text-center text-lg bg-pink-300 mx-10 mb-3 rounded-xl py-3 font-bold'>React vs. Angular vs. Vue?</h2>
                <h2 className='text-center text-lg mx-10 mb-3 rounded-xl py-3 font-bold'>
                    React often requires extra modules and components, which keeps the core library small, but means there’s extra work involved when incorporating outside tools. Angular, on the other hand, is more of a full-fledged solution that doesn’t require extras like React often does, though it does have a steeper learning curve for its core compared to React.
                    <br /><br />
                    A large library like Angular would require more diligence in keeping up with what’s new, while Vue would be less demanding in this regard and the fact that the two most recent major releases of Vue are in separate repositories helps.
                    <br /><br />
                    Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option.
                </h2>
            </div>
        </div>
    );
};

export default Blog;