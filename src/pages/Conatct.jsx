import classes from "../css/Contact.module.css";
import telephone from "../assets/455705.png";
import email from "../assets/email_542689.png"
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useMediaQuery } from "react-responsive";

export default function ContactPage(){
    const form = useRef();
    const YOUR_PUBLIC_KEY = "fiJMSN5TQPH17M_gb";
    const YOUR_SERVICE_ID = "service_2xl96cl";
    const YOUR_TEMPLATE_ID = "template_bi9quuo";
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
      const sendEmail = (e) => {
        e.preventDefault();
        console.log(form.current)
        emailjs.sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form.current, YOUR_PUBLIC_KEY)
            .then((result) => {
                console.log("Email sent successfully:", result.text);
                setStatus({ succes: true, message: "Message sent successfully" });
                alert("Message sent successfully");
                setsubmitMessage("Send");
                setFormDetails(submitDetail);
            })
            .catch((error) => {
                console.log("Error sending email:", error);
            });
    };
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    return(
        <>
            <div className= {isTabletOrMobile?"": classes.content}>
                <div className={isTabletOrMobile?classes.contactMobile: classes.contact}>
                    <h2 className={classes.titleForm}>Let's work together !</h2>
                    <p className={classes.paragrafForm}>I create and develop elegantly straightforward solutions, and I am passionate about my work.</p>
                    <form className="form-inner" ref={form} onSubmit={sendEmail}>
                    
                        <div className={classes.name}>
                            <div>
                                <input
                                    type="text"
                                    name="f_name"
                                    value={formDetails.name}
                                    required
                                    placeholder="Your name"  
                                    className={classes.inputTry}
                                    onChange={(e) => onFormUpdate("name", e.target.value)} 
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    name="f_email"
                                    value={formDetails.email} 
                                    required
                                    placeholder="Your email"
                                    className={classes.inputTry}
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
                                className={classes.inputTry}
                                onChange={(e) => onFormUpdate("subject", e.target.value)} 
                            />
                        </div>
                        <div className={classes.message}>
                            <textarea 
                                name="message" 
                                value={formDetails.message} 
                                placeholder="Your message"
                                required
                                className={classes.inputTry}
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
                <div className={isTabletOrMobile?classes.infoMobile: classes.info}>
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