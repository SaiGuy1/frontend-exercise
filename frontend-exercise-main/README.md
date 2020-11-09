# two chairs Frontend Take-home Exercise

Hey there Two Chairs Candidate. This coding exercise will help us evaluate your technical skills as well as allow you to show off how you approach some UI/React problems. Please plan to spend no more than 2 hours on the exercise. If you hit two hours feel free to stop working, but please be prepared to briefly talk through any additional changes you would have made with more time.

## Submission

Please have your completed project ready for the review portion of the on-site interview. We do not require you to push your code to any repo, but be prepared to screenshare both the working page as well as the code itself.

## Overview

This project is a react app initialized from [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html). You are to build a simple version of the main [listing page for our blog](https://twochairs.com/blog/), including a simple header and entries for individual blog posts. We have provided a mock, `mock.png`, and the corresponding Figma file, `mock.fig`, in this repo for you to work off of. We do not require pixel perfection to the mockups -- please use default fonts, margins, widths as necessary to get close to the mock.

## Task
Your tasks are as follows:

- Start in `App.js`.
- Create a yellow (#f9c511) header that says "Talk Therapy Blog"
    - Text should be a good size for desktop and for mobile, and the margins should line up with your blog posts.
- Please use any library or API of your choosing to GET the blog posts starting from [this endpoint](https://app.twochairs.com/interview-exercise/blog-data-1.json) and display them per the mock. 
    - Please note, the results are paginated! There are 6 blog entries total from this endpoint, but your code should elegantly handle any number of entries. You can assume that the endpoint will at most contain a reasonable number of entries per page, say, 10.
    - Please display all entries on initial load of your page. You will not need to build pagination or lazy-loading into the blog.
    - Blog posts entries should be 3 to a row on desktop and in a column full-width (with margin) on mobile. Feel free to use your discretion here and flex your frontend muscles!
    - Please store the blog data in state in any way that you think appropriate. Consider some basic scaling scenarios, such as supporting pulling additional paginated blog posts asynchronously, and build your state tree accordingly.
- Create any components as necessary to build the blog. We're a big fan of reusable components -- anywhere you see something that can be compartmentalized and reused, please do so!
- Style the page using any technologies you'd like to match the mock.
    - We use `styled-components` and love CSS-in-JS in general, but please use what you are most comfortable with, keeping reusability in mind.
    - As mentioned, we are not evaluating on pixel perfection. We're using two colors (#f9c511 for the header and  #F5F3EB for the background), and #000 and #fff otherwise. Feel free to use your best judgment for margin widths, sizing, and typefaces. 


## Requirements
- Feel free to add any libraries you desire.
- Don't worry about cross-browser compatibility. If it runs on your own screen, that's enough for us.
- Modify any existing code as you wish.