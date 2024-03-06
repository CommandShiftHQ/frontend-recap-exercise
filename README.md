# Recap

Make sure to run `npm i` to install the dependencies and `npm start` to start the app

## 🚊 React router 
Lets start with routing!
### Pages
There are 3 components/pages in the `pages` directory, we'll be adding react router to our app in order to make these pages navigable.

1. Firstly we need to install react router - `npm i react-router-dom`
2. Then we must import the 3 relevant routing components from react-router-dom into the `App.js` file
3. Finally, we need to nest each of the imported components within each other and ensure each component/page is navigable at an appropriately named `path` for each `element` i.e. page
<details>

<summary>Solution</summary>

 <!-- <code> -->
 import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
  
  ...

    <Router>
        <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<About img={img} />} path='/about' />
          <Route element={<Contact img={img} />} path='/contact' />
        </Routes>
    </Router>

  ...
 <!-- </code> -->

</details>
<br>

You should now be able to use the url address bar to get to all of your pages. 
Also - delete the 'App component' text in  the App.js as we'll no longer need it.
<br />
<br />
### Navigation
We can use the address bar to get around the app, but it would be better if we could use a real nav.

1. Add a `nav` jsx element inside of your router but before your routes
2. Inside the nav, add an unorganised list - containing 3 list items
3. Each list item will contain an element that will is imported from react router dom, can you remember what this called?
4. Add the `nav` className to the nav html element
<details>

<summary>Solution</summary>

 <!-- <code> -->
    <nav className="nav">
        <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='about'>About</NavLink></li>
            <li><NavLink to='contact'>Contact</NavLink></li>
        </ul>
    </nav>
 <!-- </code> -->

</details>

<br />
<br />

## 🏡 ( Home Page )
We're not going to do much with the home page, in fact it will be in a 'perpetual state of loading'...

1. Import the `Loading` component into the `Home` page and add the classname `home` to the top level container in the Home component
<details>

<summary>Solution</summary>

 <!-- <code> -->
    <div className='home'>
      <h1>Home page</h1>
     <Loading />
    </div>
<!-- <code> -->

 </code>

</details>
<br />
<br />

## 🏡 Props ⭐️ State and 🪝 React Hooks - About & Contact Page
We'll now make an api call and display an image

1. In the `App.js` create an image state variable, and an appropriately named function to update the image state (what React hook would we want to do this?)
2. Pass the image as a prop to the About and Contact pages
3. In the About page destructure the `image` prop
4. Conditionally display the image if the prop is 'truthy'
5. Repeat steps 3 - 4 for the Contact page
<details>

<summary>Solution step 1</summary>

 <!-- <code> -->
    const [img, setImg] = useState('');
<!-- <code> -->

 </code>

</details>
<details>

<summary>Solution step 2</summary>

 <!-- <code> -->
    <Route element={<Home />} path='/' />
    <Route element={<About img={img} />} path='/about' />
    <Route element={<Contact img={img} />} path='/contact' />
<!-- <code> -->

 </code>

</details>
<details>

<summary>Solution step 3</summary>

 <!-- <code> -->
    const About = ({img}) => {
        ...
<!-- <code> -->

 </code>

</details>
<details>

<summary>Solution step 4</summary>

 <!-- <code> -->
    <h1>About page</h1>
      {img && <img src={img} alt='about' />}
<!-- <code> -->

 </code>

</details>

<br />
<br />

## ⭐️ More on State  - Toggling visibility of About Page info 
In the data folder, we have some info for the about page. Have a look at how the data is structured

1. Import this data into the About page
2. Create some `aboutData` state and use the imported data as the initial state
3. `.map` the `aboutData` state below the image within the return statement of the about component. Render a `button` for each title and a `p` tag to display the description for each item in the array if the visible property is truthy (Add an empty event handler prop to the button for now)
4. Create an event handler function called `handleClick`
- Within this function you will need an intermediate variable, create a variable called `newData`
- `newData` should store the result of mapping the aboutData state to search for a matching id which will in turn toggle the section's visibility
- Name the parameter of the cb function `data` 
- This function will compare the `data.id` with the `id` of the aboutSection data that is passed to it from the trigger buttin element
- If the id matches we should toggle the visibility of the element using the bang operator `!` or else return the `data` as is
- We then need to `setAboutData` with the newly updated `newData` (This will happen each time an about section button is clicked)
- Make sure to update the button event handler so the handler function is called with an aboutSection id

<details>

<summary>Solution step 1</summary>

 <!-- <code> -->
    import { data } from '../data/aboutInfo'
<!-- <code> -->

 </code>

</details>
<details>

<summary>Solution step 2</summary>

 <!-- <code> -->
     const [aboutData, setAboutData] = useState(data)
<!-- <code> -->

 </code>

</details>
<details>

<summary>Solution step 3</summary>

 <!-- <code> -->
    {aboutData.map(aboutSection => (
        <>
            <button onClick={() => {}}>{aboutSection.title}</button>
            <p>{aboutSection.visible && aboutSection.description}</p>
        </>
    ))}
<!-- <code> -->

 </code>

</details>
<details>

<summary>Solution step 4</summary>

 <!-- <code> -->
    const handleClick = (id) => {
        const newData = aboutData.map(data => data.id === id ? ({...data, visible: !data.visible }) : data)
        setAboutData(newData)
    }

    ...

    <button onClick={() => handleClick(aboutSection.id)}>{aboutSection.title}</button>

<!-- <code> -->

 </code>

</details>
<br>
Stretch: In your own time add a css transition to make toggling the visibility in the UI smoother
<br />
<br />

## 🎷 Events & Forms - Contact Page 
1. Create some `formData` state
2. Add a form html element, with an empty onSubmit handler
3. Add an input and a button element within the form. The button should be of type submit and contain the text submit
4. The input should be of type text and have an onChange handler, set the value of this handler to `handleChange`
5. We need to create this handler, it will need to access the event target's value. We will use this to `setFormData` when the input's value changes
6. Back to the overall form's submit handler, we will now create a `handleSubmit` function
- This function will need to prevent the default behaviour when submitting forms, what is this?
- In a real application we might use axios to post formata to a database but we will just console.log it instead
￼
<details>

<summary>Solution step 1</summary>

 <!-- <code> -->
    const [formData, setFormData] = useState()
<!-- <code> -->

 </code>

</details>
<details>

<summary>Solution step 2</summary>

 <!-- <code> -->
    <form onSubmit={() => {}}>
        ...
     </form>
<!-- <code> -->

 </code>

</details>
<details>

<summary>Solution step 3 / 4</summary>

 <!-- <code> -->
    <form onSubmit={() => {}}>
        <input type='text' onChange={handleChange} />
        <button type='submit'>Submit</button>
     </form>
<!-- <code> -->

 </code>

</details>
<details>

<summary>Solution step 5</summary>

 <!-- <code> -->
    const handleChange = (e) => {
        setFormData(e.target.value)
    }
<!-- <code> -->

 </code>

</details>
<details>

<summary>Solution step 6</summary>

 <!-- <code> -->
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
    }
<!-- <code> -->

 </code>

</details>


