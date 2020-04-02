import React from "react"

export default class PageForm extends React.Component {
    state = { //Добавили состояние
        firstName: "",
        phone: "",
        message: "",
    }

    hendleInputChange = event => {
        const target = event.target;
        const value = target.value
        const name = target.name;

        this.setState({
            [name]: value,
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        alert(`Welcome ${this.state.firstName} ${this.state.phone}!`)
    }

    render() {
        return (
            

        // <form method="post" action="#">
        //     <div className="field half first">
        //       <label htmlFor="name">Name</label>
        //       <input type="text" name="name" id="name" />
        //     </div>
        //     <div className="field half">
        //       <label htmlFor="email">Email</label>
        //       <input type="text" name="email" id="email" />
        //     </div>
        //     <div className="field">
        //       <label htmlFor="message">Message</label>
        //       <textarea name="message" id="message" rows="4"></textarea>
        //     </div>
        //     <ul className="actions">
        //       <li>
        //         <input type="submit" value="Send Message" className="special" />
        //       </li>
        //       <li>
        //         <input type="reset" value="Reset" />
        //       </li>
        //     </ul>
        // </form>

            <form onSubmit={this.handleSubmit} method="POST" data-netlify="true" >
                <label>
                    First name
                    <input type="text" name="firstName" value={this.state.firstName} onChange={this.hendleInputChange} />
                </label>
                <br />
                <label>
                    Phone
                    <input type="phone" name="phone" value={this.state.phone} onChange={this.hendleInputChange} />
                </label>
                <br />
                <label>Message: <textarea name="message" value={this.state.messege} onChange={this.hendleInputChange} ></textarea></label>
                {/* <label>
                    Message
                    <input type="text" name="massege" value={this.state.messege} onChange={this.hendleInputChange} />
                </label> */}
                <button type="submit">Отправить</button>
            </form>
        )
    }
}