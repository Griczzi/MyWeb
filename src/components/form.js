
import React from "react"

//export default class PageForm extends React.Component {
    function encode(data) {
        return Object.keys(data)
          .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
          .join('&')
      }
      
      export default function Contact() {
        const [state, setState] = React.useState({})
      
        const handleChange = (e) => {
          setState({ ...state, [e.target.name]: e.target.value })
        }
      
        const handleSubmit = (e) => {
          e.preventDefault()
          const form = e.target
          fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({
              'form-name': form.getAttribute('name'),
              ...state,
            }),
          })
            // .then(() => navigate(form.getAttribute('action')))
            // .catch((error) => alert(error))
        }
    
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

    //render() {
        return (
            <form 
                name="contact-form"
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                >
                <label>
                    Имя: <input type="text" name="firstName" placeholder="ваше имя" onChange={handleChange} />
                </label>
                <br />
                <label>
                    Телефон: <input type="phone" name="phone" placeholder="ваш телефон" onChange={handleChange} />
                </label>
                <br />
                <label>Сообщение: <textarea name="message" placeholder="текст" onChange={handleChange}></textarea></label>

                <input type="hidden" name="form-name" value="contact" />
                <p hidden>
                <label>
                    Don’t fill this out: <input name="bot-field" onChange={handleChange} />
                </label>
                </p>

                <button>Отправить</button>
            </form>
        )
    }