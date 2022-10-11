import React from "react";

const Blogs = () => {
    const blogs = [
        {
            id: 1,
            title: "What is the purpose of react router ?",
            description: `The purpose of react route render enable multiple views in a single page application by defining multiple routes in the React application. We can render component like multi page website
            `,
        },
        {
            id: 2,
            title: "How does context api work ?",
            description: `Context api builtin React Object it help props drilling issue. We can pass any data in child n nested component without passing props to all child component
            
            React.createContext() method return consumer and provider. Provider is a React component that provides the state to its children.
            It will hold the "state" and be the parent of all the components that might need that state.
            Consumer as it so happens is a component that consumes and uses the state. Alternative we can use useContext hook to use this context state
            
        `,
        },
        {
            id: 3,
            title: "What is use Ref ?",
            description: `useRef is a reference to a DOM element in React.
            that is can access directly from component using refContainer.current property. it return a mutable object.
            Using ref we can directly Managing focus, text selection, or media playback with dom element without re-render component`,
        },
    ];

    return (
        <div className="max-w-screen-md mx-auto ">
            <h1 className="text-3xl font-semibold text-center mt-12">Blogs</h1>
            <div className="px-4">
                {blogs.map((blog) => (
                    <div className="shadow-primary-sm p-4 my-10 rounded-md">
                        <h1 className="text-xl font-semibold text-neutral-800">{blog.title}</h1>
                        <p className="mt-3 text-neutral-500 whitespace-pre-line">{blog.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blogs;
