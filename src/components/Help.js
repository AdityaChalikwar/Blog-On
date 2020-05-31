import React from 'react'
import emailjs from 'emailjs-com'
import Modal from 'react-modal'

class HelpPage extends React.Component{
    state = {
        sent: false
    }

    sendEmail = (e) => {
        e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it
        emailjs.sendForm('gmail', 'template_39RW5oYN', e.target, "user_EeL54m0pmSk5u9YZ6MpIz")
            .then((result) => {
                this.open()
            }, (error) => {
                console.log(error.text);
            });
    }

    open = () => {
        this.setState(() => ({sent: true}))
    }

    closeModal = () => {
        this.setState(() => ({sent: false}))
        this.props.history.push('/')
    }

    render(){
        return (
            <div>
                <div className="page-header">
                    <h1 className="page-header__title">Contact Us</h1>
                </div>
                <div className="container">
                    <form id="myForm" className="form" onSubmit={this.sendEmail}>
                        <input 
                            type="text"
                            placeholder="Name"
                            name="from_name"
                            className="text-input"
                            autoFocus
                            required/>
                        <input 
                            type="email"
                            placeholder="Email"
                            name="from_email"
                            className="text-input"
                            required/>
                        <input 
                            type="text"
                            placeholder="Subject"
                            className="text-input"
                            name="subject"/>
                        <textarea 
                            type="text"
                            placeholder="Message"
                            className="message"
                            name="message_html"/>
                        <div>
                            <button className="button">Submit</button>
                            <Modal 
                                className="modal"
                                ariaHideApp={false}
                                onRequestClose={this.closeModal}
                                isOpen={this.state.sent}
                                contentLabel='sent'
                                closeTimeoutMS={300}>
                                <p className="modal_body">Feedback Sent</p>
                                <div className="button-container">
                                    <button className="button" onClick={this.closeModal}>OK</button> 
                                </div>
                            </Modal>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default HelpPage