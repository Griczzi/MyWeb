
import React from "react"

export default class PageForm extends React.Component {
    // state = { //Добавили состояние
    //     firstName: "",
    //     phone: "",
    //     message: "",
    // }

    // hendleInputChange = event => {
    //     const target = event.target;
    //     const value = target.value
    //     const name = target.name;

    //     this.setState({
    //         [name]: value,
    //     })
    // }

    // handleSubmit = event => {
    //     event.preventDefault()
    //     //alert(`Welcome ${this.state.firstName} ${this.state.phone}!`)
    // }

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

            <form name="contact-form" methodx="POST" data-netlify="true" data-netlify-honeypot="bot-field">
                <label>
                    Имя:
                    <input type="text" name="firstName" placeholder="ваше имя " />
                </label>
                <br />
                <label>
                    Телефон:
                    <input type="phone" name="phone" placeholder="ваш телефон" />
                </label>
                <br />
                <label>Сообщение: <textarea name="message" placeholder="текст"></textarea></label>
                <button type="submit">Отправить</button>
            </form>
        )
    }
}