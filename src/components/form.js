
import React from "react"


    function encode(data) {
        return Object.keys(data)
          .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
          .join('&')
      }
      
      export default function Contact() {
        const [state, setState] = React.useState({})
        //const setAlert = useState({ type: false, message: '' });
      
        const handleChange = (e) => {
          setState({ ...state, [e.target.name]: e.target.value })
        }
      
        const handleSubmit = (e) => {
          e.preventDefault()

        if ( !e.target.elements['name'].value || !e.target.elements['phone'].value || !e.target.elements['message'].value ) {
            alert('*****  Заполните все поля!  *****')
            // setAlert({type: 'danger', message: 'Введите свои данные!'});
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
            // .then(() => {
            //  setAlert({type: 'success', message: 'Ваша заявка успешно отправлена!'});
            // })
            //  .catch((error) => alert('Не все поля заполнены! Заполните все поля =)'))
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
                <button>Отправить</button>
            </form>
        )
    }