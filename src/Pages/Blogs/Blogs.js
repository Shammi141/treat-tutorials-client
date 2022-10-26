import React from 'react';
import './Blog.css'

const Blogs = () => {
    return (
        <div>
            <div className='blog my-3'>
                <h5>1. What is cors?</h5>
                <p><small>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</small></p>
            </div>
            <div className='blog my-3'>
                <h5>2. Why are you using firebase? What other options do you have to implement authentication?</h5>
                <p><small>Firebase helps you develop high-quality apps, grow your user base, and earn more money. Each feature works independently, and they work even better together.<br />
                Usually, authentication by a server entails the use of a user name and password. There are more options to authenticate- 
                <ul>
                    <li>Facebook Authentication</li>
                    <li>Phone Authentication</li>
                    <li>Twitter Authentication</li>
                    <li>Microsoft Authentication</li>
                    <li>Yahoo Authentication</li>
                    <li>Apple Authentication</li>
                    <li>Phone Authentication</li>
                </ul>
                </small></p>
            </div>
            <div className='blog my-3'>
                <h5>3. How does the private route work?</h5>
                <p><small>
                    The react private route component renders child components (children) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.
                    The current logged in user (authUser) is retrieved from Redux state with a call to the useSelector() hook. Redux is used in this example however it is not required to implement a Private Route component in React Router. You could use a different state management library or any approach you prefer to get the logged in status of the user.
                </small></p>
            </div>
            <div className='blog my-3'>
                <h5>4. What is Node? How does Node work?</h5>
                <p><small>
                    Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
                </small></p>
            </div>           
        </div>
    );
};

export default Blogs;