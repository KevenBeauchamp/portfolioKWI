import classes from "../css/Contact.module.css";
import telephone from "../assets/455705.png";
import email from "../assets/email_542689.png"
import { useState } from "react";
export default function ContactPage(){
    const submitDetail = {
        name: "",
        email: "",
        subject: "",
        message: "",
      };
      const [formDetails, setFormDetails] = useState(submitDetail);
      const [submitMessage, setsubmitMessage] = useState("Send Message");
      const [status, setStatus] = useState({});
      const onFormUpdate = (category, value) => {
        setFormDetails({
          ...formDetails,
          [category]: value,
        });
      };
      const handleSubmit = async (e) => {
        e.preventDefault();
        setsubmitMessage("Sending...");
        let response = await fetch("http://localhost:3001/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify(formDetails),
        });
        console.log(formDetails);
        setsubmitMessage("Send");
        let result = await response.json();
        setFormDetails(submitDetail);
        if (result.code == 200) {
          setStatus({ succes: true, message: "Message sent successfully" });
          alert("Message sent successfully");
        } else {
          setStatus({
            succes: false,
            message: "Something went wrong, please try again later.",
          });
          alert("Something went wrong, please try again later.");
        }
      };
    return(
        <>
            <div className={classes.content}>
                <div className={classes.contact}>
                    <h2 className={classes.titleForm}>Let's work together !</h2>
                    <p className={classes.paragrafForm}>I create and develop elegantly straightforward solutions, and I am passionate about my work.</p>
                    <form className="form-inner" onSubmit={handleSubmit}>
                    
                        <div className={classes.name}>
                            <div>
                                <input
                                    type="text"
                                    value={formDetails.name}
                                    required
                                    placeholder="Your name"  
                                    onChange={(e) => onFormUpdate("name", e.target.value)} 
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    value={formDetails.email} 
                                    required
                                    placeholder="Your email"
                                    onChange={(e) => onFormUpdate("email", e.target.value)} 
                                />
                            </div>
                        </div>
                        <div className={classes.subject}>
                            <input 
                                type="text" 
                                value={formDetails.subject} 
                                required
                                name="subject" id="" 
                                placeholder="Subject"
                                onChange={(e) => onFormUpdate("subject", e.target.value)} 
                            />
                        </div>
                        <div className={classes.message}>
                            <textarea 
                                name="message" 
                                value={formDetails.message} 
                                placeholder="Your message"
                                required
                                id=""
                                onChange={(e) => onFormUpdate("message", e.target.value)} 

                            >

                            </textarea>
                        </div>
                        <div className={classes.submitMessage}>
                            <input type="submit" value={submitMessage} />
                        </div>
                    </form>
                </div>
                <div className={classes.info}>
                    <h3 className={classes.titleInfo}>Please do not hesitate to reach out to me !</h3>
                    <p className={classes.paragrafInfo}>I am consistently open to freelance opportunities should a suitable project arise.</p>
                    <div className={classes.phone}>
                        <div> 
                            <img src={telephone} alt="" srcset="" width="95px" />
                        </div>
                        <div>
                            <h6>Phone</h6>
                            <span>+17542620862</span>
                        </div>
                    </div>
                    <div className={classes.email}>
                        <div>
                            <img src={email} alt="" srcset="" width="95px"/>
                        </div>
                        <div>
                            <h6>Email</h6>
                            <span>kevenbeauchamp96@gmail.com</span>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}