
import React from "react"


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
                {/* <p hidden>
                <label>
                    <input name="bot-field" onChange={handleChange} />
                </label>
                </p> */}

                <button>Отправить</button>
            </form>
        )
    }