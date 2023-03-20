const Footer = () => {
    return (
        <div className="bg-stone-800 p-0 m-0">
            <div className="max-w-screen-lg mx-auto px-8 items-center flex flex-col-reverse justify-around sm:flex-row sm:px-10 text-orange-50 text-center text-lg">
                <div className="py-5 flex flex-col">
                    <h3 className="py-3 text-xl">Контакты:</h3>
                    <p>expense@log.com</p>
                    <p>+7 495 111 11 11</p>
                    <p>Санкт-Петербург, ул. Маросейка, д. 31</p>
                </div>
                <div className="py-5 flex flex-col">
                    <h3 className="py-3 text-xl">Личный кабинет:</h3>
                        <p>Войти</p>
                        <p>Регистрация</p>
                        <p>Забыли пароль?</p>
                </div>
               
            </div>
        </div>
    )
}

export default Footer