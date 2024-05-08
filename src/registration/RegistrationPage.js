import React, {useState} from "react";

const RegistrationPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        password: '',
        confPassword: ''
    })
    const [error, setError] = useState('');
    const [registration, setRegistration] = useState(false)

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData({
            ...formData, [name]: value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!formData.name || !formData.password || !formData.confPassword) {
            setError("Пожалуйста, заполните все поля");
            return;
        }
         if (formData.password !== formData.confPassword) {
             setError('Пароли не совпадают');
             return;
         }
        const existUser = localStorage.getItem(formData.name);
        if (existUser) {
            setError('Пользователь с таким именем уже зарегистрирован')
            return;
        }
        localStorage.setItem(formData.name, formData.password);
        setRegistration(true);
    }

    return (
        <div>
            {registration ? (
                <p>Пользователь успешно зарегистрирован</p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Имя пользователя:</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange}/>
                    </div>
                    <div>
                        <label>Пароль:</label>
                        <input type="password" name="password" value={formData.password} onChange={handleChange}/>
                    </div>
                    <div>
                        <label>Повторите пароль:</label>
                        <input type="password" name="confPassword" value={formData.confPassword}
                               onChange={handleChange}/>
                    </div>
                    <button type="submit">Зарегистрироваться</button>
                    {error && <p>{error}</p>}
                </form>
            )}
        </div>
    )
}


export default RegistrationPage;