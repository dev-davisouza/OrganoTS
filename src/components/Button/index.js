import './Button.css'

/*
    This piece of code is a simple React component 
    that make a reusable button. 

    In the first line (this line above) a CSS file named 'Button.css' 
    is being imported. It allow the component 'Button' bellow to be
    stylized using the classes available in this CSS file.

    Below is the declaration of the component Button. In this case
    i used the arrow function to create a React component. By using
    the paramenter props i can pass some arguments into the component.
    Also, is very important to know that the statement `const Button = ...`
    is a JavaScript constant that is recieving an Arrow Function with
    a generic paramenter named props; props is a convetional name
    to Arrow functions with React. Then, while the declaration of the
    constant is a JavaScript code, the body describes the syntax of
    the JSX.

    In the call of the function i will pass a value to the property that 
    i named in the component.


*/
const Button = (props) => {
    /*
        Within the content of the return statament note that i don't
        used the {}, but (). The {} means that it's a JS object, while
        the () represents a JSX which is the structure of the component 
        itself.
    */
    return (
        <div className="button">
            <button type={props.type}>{props.children}</button>
        </div>
    )
}

/* 
    Finally, the component ´<Button />´ is exported with a default value
    of the module. It means that it can be imported in another files.
*/
export default Button