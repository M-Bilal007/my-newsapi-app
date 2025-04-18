import React from 'react'
const Form = () => {
    return (
        <div>
            <form>
                <div>
                <label>Name</label>
                <input type='text' placeholder='Enter your Name'/>
                </div>
                <div>
                <label>Email</label>
                <input type='email' placeholder='Enter your email'/>
                </div>
                <div>
                <label>Message</label>
                <textarea 
                placeholder="Enter your message"
                rows="4"
                ></textarea>
                </div>
                <button type='submit'>Send Message</button>
            </form>
            <div>
                <h2>Visit Us</h2>
                <p>
                    UET Lahore, Punjab, Pakistan <br />
                    Phone: +923039898987
                </p>
            </div>
            <div>
                <h2 className="text-xl font-semibold">Get In Touch</h2>
                <p>
                    You can get in touch with us on this <br/> provided email.<br />
                <br/>
                    Email: hmjawad087@gmail.com
                </p>
            </div>
            </div>
    )
}
export default Form;