# Oct22 Recap


## 🚊 React router 
Lets start with routing!
### Pages
There are 3 component in the pages directory, we should add react router to make these pages navigable.

1. install react router `npm i react-router-dom`
2. add imports from react-router-dom to `App.js`
3. use imports and add pages to App.js

You should now be able to use the url address bar to get to all of your pages. Remember to delete the 'App component' text - we no longer need it.
<br />
<br />
### Navigation
We can use the address bar to get around the app, but it would be better if we could use a real nav.

1. Add a `nav` html element in your router (why does nav need to go inside the router?)
2. Inside the nav, add an unorganised list - containing 3 list items
3. Each list item will contain an element that will is imported from react router dom, can you add this element?
4. Add the `nav` className to the nav html element
<br />
<br />

## 🏡 ( Home Page )
We're not going to do much with the home page, in fact it will be in a 'perpetual state of loading'...

1. Import the `Loading` component into the `Home` page and add the classname `home` to the top level container in the Home component
<br />
<br />

## 🏡 Props ⭐️ State and 🪝 React Hooks - About & Contact Page
1. To illustrate the use of the aforementioned aspects of React, we'll make an api call and display an image

1. In the `App.js` create an image state variable, and an appropriately named function to update the image state
(what React hook would we want to do this?)
2. Pass the image as a prop to the About and Contact pages
3. In the About page destructure the `image` prop
4. Conditionally display the image if the prop is 'truthy'
5. Repeat steps 3 - 4 for the Contact page

Stretch - Add an input, to allow the user to select a character by number
<br />
<br />

## ⭐️ More on State  - Toggling visibility of About Page info 
In the data folder, we have some info for the about page

1. Import this data into the About page
2. Create some `aboutData` state and use the imported data as the initial state
3. `.map` the `aboutData` state within the component return statement.Render a `button` for each title and `p` for each description in the array
4. Add an empty event handler prop to the button
5. Create an event hanler function called `handleClick`, leave the contents empty for now
6. We need an intermediate variable, create a var called `newData`. Map the aboutData state (leave map implementation empty for now)
7. Name parameter `data`, if the `data.id` matches the id we will pass to this function then ('?') we will ('do something') or (':') we wil ('do something else')
8. If true we will spread `data` and update the `visible` proerty to the inverse value using the bang operator `!`
9. If false we will simply return the data, we now need to `setAboutData` with the `newData`

Stretch: In your own time add a css transition to make toggling the visibility in the UI smoother
<br />
<br />

## 🎷 Events & Forms - Contact Page 
1. Create some `formData` state
2. Add a form html element, with an empty onSubmit handler (can make this a comment for now)
3. Add input and button elements within the form
4. The input should be of type text and have an onChange handler, set the value of this handler to `handleChange`
5. We need to create this handler, it will need to access the event target's value. We will use this to `setFormData` when the input's value changes
6. The button should be of type submit and contain the text submit
7. Back to the form's submit handler, we will now create the `handleSubmit` function, create an empty function for now
8. We need to prevent the default behaviour when submitting forms, what is this?
9. This is where in a real application we might use axios to post formata to a database but we will just console.log it instead!
￼



