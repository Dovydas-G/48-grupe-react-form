import { useState } from 'react';
import style from './Form.module.css';

export function RegisterForm() {
    const [username, setUsername] = useState('');
    const [usernameErr, setUsernameErr] = useState('');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    function handleUsernameChange(e) {
        setUsername(e.target.value);
    }

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }

    function handleRepeatPasswordChange(e) {
        setRepeatPassword(e.target.value);
    }

    function isValidUsername(text) {
        if (text.length < 1) {
            return 'Per trumpas';
        }

        if (text.length > 20) {
            return 'Per ilgas';
        }

        return true;
    }

    function isValidEmail(text) {
        if (text.length < 6) {
            return 'Per trumpas';
        }

        if (text.length > 50) {
            return 'Per ilgas';
        }

        return true;
    }

    function isValidPassword(text) {
        if (text.length < 1) {
            return false;
        }

        return true;
    }

    function handleFormSubmit(e) {
        e.preventDefault();

        const usernameErrorValue = isValidUsername(username);
        let isAllFormValid = true;

        if (usernameErrorValue !== true) {
            isAllFormValid = false;
            setUsernameErr(usernameErrorValue);
        } else {
            setUsernameErr('');
        }

        if (!isValidEmail(email)) {
            isAllFormValid = false;
            console.log('blogas email');
        }

        if (!isValidPassword(password)) {
            isAllFormValid = false;
            console.log('blogas password');
        }

        if (password !== repeatPassword) {
            isAllFormValid = false;
            console.log('blogas repeat password');
        }

        if (isAllFormValid) {
            console.log('viskas gerai, siuncia info i serveri');
        }
    }

    return (
        <form onSubmit={handleFormSubmit} className={style.form}>
            <div className={style.formRow}>
                <label className={style.label} htmlFor="">Username</label>
                <input value={username} onChange={handleUsernameChange} className={style.input} type="text" placeholder="Eg. John" />
                {usernameErr.length === 0 ? null : <p className={style.error}>{usernameErr}</p>}
                {usernameErr && <p className={style.error}>{usernameErr}</p>}
            </div>
            <div className={style.formRow}>
                <label className={style.label} htmlFor="">Email</label>
                <input value={email} onChange={handleEmailChange} className={style.input} type="email" placeholder="Eg. john@cena.com" />
                <p className={style.error}>Error...</p>
            </div>
            <div className={style.formRow}>
                <label className={style.label} htmlFor="">Password</label>
                <input value={password} onChange={handlePasswordChange} className={style.input} type="password" placeholder="enter your password" />
                <p className={style.error}>Error...</p>
            </div>
            <div className={style.formRow}>
                <label className={style.label} htmlFor="">Repeat password</label>
                <input value={repeatPassword} onChange={handleRepeatPasswordChange} className={style.input} type="password" placeholder="enter your password" />
                <p className={style.error}>Error...</p>
            </div>
            <div className={style.formRow}>
                <button className={style.button} type="submit">Register</button>
            </div>
        </form>
    );
}