
import React from "react"
import "./form.css"


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

        if ( !e.target.elements['name'].value || !e.target.elements['phone'].value || !e.target.elements['message'].value ) {
            alert('*****  Заполните все поля!  *****')
            return;
          }

          const form = e.target

          fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({
              'form-name': form.getAttribute('name'),
              ...state,
            }),
          })
            .then(() => { alert('***** ЗАЯВКА ОТПРАВЛЕНА! *****') });
        }
        return (
            <form 
                name="contact-form"
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                >
                <label>
                    Имя: <input type="text" name="name" placeholder="ваше имя" onChange={handleChange} />
                </label>
                <br />
                <label>
                    Телефон: <input type="phone" name="phone" placeholder="ваш телефон" onChange={handleChange} />
                </label>
                <br />
                <label>Сообщение: <textarea name="message" placeholder="текст" onChange={handleChange}></textarea></label>
                <input type="hidden" name="form-name" value="contact" />
                <button className="form_button">Отправить</button>
            </form>
        )
    }