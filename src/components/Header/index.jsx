import { useState } from "react";
import style from "components/Header/Header.module.css";

const Header = () => {

    const [ open, setOpen] = useState(false)

    const [ nav, setNav] = useState(false)
    return (
        <header className="bg-emerald-800 py-8 text-orange-50 text-md font-semibold flex sm:px-8 sm:text-xl">
            <div className="max-w-screen-lg flex justify-between mx-auto px-10">

                <nav id="nav-computer" className={style.nav_computer}> 
                    <div className="text-amber-600 font-bold text-2xl">EXPENCE LOG</div>
                    <div className="flex flex-row gap-5 mx-4">
                        <a href="#">О нас</a>
                        <a href="#">Ваши расходы</a>
                        <a href="#">Контакты</a>
                    </div>
                    <button onClick={() => setOpen(!open) } className="flex gap-1 right-6">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                        </svg>
                        <p>Личный кабинет</p>
                    </button>
                    {open 
                    ?   <div className="absolute right-0 top-16 bg-emerald-800 text-orange-50  block py-3 gap-y-2 px-4 w-100 transition:left 1s;">
                            <ul>
                                <li><a href="#">Войти</a></li>
                                <li><a href="#">Регистрация</a></li>
                                <li><a href="#">Забыли пароль?</a></li>
                            </ul>
                        </div>
                    : null}
                </nav>

                <nav id="nav-mobile" className={style.blok_navmob}>
                    <div className="text-amber-600 font-bold text-2xl">EXPENCE LOG</div>
                    <div className={ nav ? [style.nav_mobile, style.active].join(' ') : style.nav_mobile}>
                        <a href="#" className={style.nav_a}>О нас</a>
                        <a href="#" className={style.nav_a}>Ваши расходы</a>
                        <a href="#" className={style.nav_a}>Контакты</a>
                        <a href="#" className={style.nav_a}>Войти</a>
                        <a href="#" className={style.nav_a}>Регистрация</a>
                        <a href="#" className={style.nav_a}>Забыли пароль?</a>
                    </div>
                    <div onClick={() => setNav(!nav) } className={style.mobile_btn}>
                        {nav 
                        ?   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg> 
                        :   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        }

                    </div>
                </nav>


            </div>
        </header>
    )
}

export default Header