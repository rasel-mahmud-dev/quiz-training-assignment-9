# Quiz Training Website

## Assignment 9

### Github Repo: https://github.com/programming-hero-web-course2/b6-quiz-crackerz-rasel-mahmud-dev

### Live site: https://quiz-training.netlify.app/


## Features
This is quiz training website. There student can test quiz on some kind of topic.
Student can show correct answer. also will get feedback for their answer.

## Work
- For routing, I use react-router-dom, and create some routes using calling createBrowserRouter method and pass in RouterProvider component router props.

- In homepage fetch all topics from api and render each topic in card as separate component.

- In quiz detail page, fetch each topic dynamically via router params id and render all answer in Quiz component

- In statistics pages, I make bar chart using recharts. There x-axis show topic name and y-axis show total quiz of each topic.


## Technology used.

- Reactjs
- react-router-dom@6.4
- Tailwindcss
- Recharts
- react-hot-toast
- @fontawesome icons

