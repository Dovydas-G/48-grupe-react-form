import { useState } from 'react';
import style from './Form.module.css';
import { alphabetObj } from '../../data/data';
import { charObj } from '../../data/data';

export function RegisterForm() {
    const [username, setUsername] = useState('');
    const [usernameErr, setUsernameErr] = useState('');

    const [email, setEmail] = useState('');
    const [emailErr, setEmailErr] = useState('');

    const [password, setPassword] = useState('');
    const [passwordErr, setPasswordErr] = useState('');

    const [repeatPassword, setRepeatPassword] = useState('');
    const [repeatPasswordErr, setRepeatPasswordErr] = useState('');

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

        let nameStr = '';
        let invalidSymbols = '';

        for (let i = 0; i < text.length; i++) {
            //a-z
            //ąčęėįšųūž
            const letterLt = alphabetObj[text[i]];
            const symbolAtCharCode = text.charCodeAt(i);

            if (symbolAtCharCode >= charObj.alphabetBeginning && symbolAtCharCode <= charObj.alphabetEnd) {
                nameStr += text[i];
            } else if (symbolAtCharCode >= charObj.alphabetUpperCaseBeginning && symbolAtCharCode <= charObj.alphabetUpperCaseEnd) {
                nameStr += text[i];
            } else if (letterLt) {
                nameStr += text[i];
            } else invalidSymbols += text[i];
        }

        if (invalidSymbols.length > 0) {
            return `Siu "${invalidSymbols}" simboliu negalima naudoti `
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

        const parts = text.split('@');

        const recipientName = parts[0];
        const domainNameParts = parts[1].split('.');
        const domain = domainNameParts[domainNameParts.length -1];
        const domainName = parts[1].slice(0, -(domain.length +1));
     
        const firstCharacter = recipientName[0];
        const lastCharacter = recipientName[recipientName.length -1];
        
        let recipientNameStr = '';
        let invalidCharacters = '';

        for (let i = 0; i < recipientName.length; i++) {
            //a-z
            //0-9
            //!# $ % & '* + - /.=?_
            const symbolAtCharCode = recipientName.charCodeAt(i);

            if (symbolAtCharCode >= charObj.alphabetBeginning && symbolAtCharCode <= charObj.alphabetEnd) {
                recipientNameStr += recipientName[i];
            } else if (recipientName[i] >= '0' && recipientName[i] <= '9') {
                recipientNameStr += recipientName[i];
            } else if (symbolAtCharCode === charObj.equal || symbolAtCharCode === charObj.questionMark || symbolAtCharCode === charObj.underscore) {
                if (firstCharacter !== recipientName[i] && recipientName[i] !== lastCharacter && recipientName[i] !== recipientName[i + 1]) {
                    recipientNameStr += recipientName[i];
                } else invalidCharacters += recipientName[i];
            } else if (symbolAtCharCode >= charObj.alphabetUpperCaseBeginning && symbolAtCharCode <= charObj.alphabetUpperCaseEnd) {
                recipientNameStr += recipientName[i];
            } else if (symbolAtCharCode >= charObj.specialCharactersBeginning && symbolAtCharCode <= charObj.specialCharactersEnd && symbolAtCharCode !== charObj.quotationMark) {
                if (firstCharacter !== recipientName[i] && recipientName[i] !== lastCharacter && recipientName[i] !== recipientName[i + 1]) {
                    recipientNameStr += recipientName[i];
                } else invalidCharacters += recipientName[i];
            } else if (symbolAtCharCode >= charObj.specialCharactersBeginning2  && symbolAtCharCode <= charObj.specialCharactersEnd2 && symbolAtCharCode !== charObj.comma) {
                if (firstCharacter !== recipientName[i] && recipientName[i] !== lastCharacter && recipientName[i] !== recipientName[i + 1]) {
                    recipientNameStr += recipientName[i];
                } else invalidCharacters += recipientName[i];
            } else invalidCharacters += recipientName[i];

        }

        let domainNameStr = '';
        let invalidDomainCharacters = '';
        let isIpAddress = '';

        for (let i = 0; i < domainName.length; i++) {
            //a-z
            //0-9
            //-.
            const symbolAtCharCode = domainName.charCodeAt(i);

            if (symbolAtCharCode >= charObj.alphabetBeginning && symbolAtCharCode <= charObj.alphabetEnd) {
                domainNameStr += domainName[i];
            } else if (symbolAtCharCode >= charObj.alphabetUpperCaseBeginning && symbolAtCharCode <= charObj.alphabetUpperCaseEnd) {
                domainNameStr += domainName[i];
            } else if (domainName[i] >= '0' && domainName[i] <= '9') {
                domainNameStr += domainName[i];
                isIpAddress += domainName[i];
            } else if (symbolAtCharCode === charObj.minus || symbolAtCharCode === charObj.dot) {
                if (firstCharacter !== domainName[i] && domainName[i] !== lastCharacter && domainName[i] !== domainName[i + 1]) {
                    domainNameStr += domainName[i];
                    if (symbolAtCharCode === charObj.dot) {
                        isIpAddress += domainName[i];
                    }
                } else invalidDomainCharacters += recipientName[i];
            } else invalidDomainCharacters += domainName[i];        
        }


        if (recipientName.length !== recipientNameStr.length) {
            return `"${invalidCharacters[0]}" Naudojamas netinkamoje "${recipientName}" vietoje`
        }

        if (domainName.length !== domainNameStr.length) {
            return `"${invalidDomainCharacters[0]}" Naudojamas netinkamoje ${domainName} vietoje`
        }

        if (domain.length < 2) {
            return `Per trumpas domenas: ${domain}`
        }
        if (domainName.length === isIpAddress.length) {
            return `"${isIpAddress}" Netinkamas formatas`
        }

        return true;
    }


    function isValidPassword(text) {


        if (text.length < 8) {
            return 'Per trumpas';
        }

        if (text.length > 50) {
            return 'Per ilgas';
        }

        let countLowerCaseLetters = 0;
        let countUpperCaseLetters = 0;
        let countNumbers = 0;


        let passwordStr = '';
        let invalidPasswordStr = '';


        for (let i = 0; i < text.length; i++) {
            //a-z
            //0-9
            //!# $ % & '* + - /.=?_
            const symbolAtCharCode = text.charCodeAt(i);

            if (symbolAtCharCode >= charObj.alphabetBeginning && symbolAtCharCode <= charObj.alphabetEnd) {
                passwordStr += text[i];
                countLowerCaseLetters++
            } else if (symbolAtCharCode >= charObj.alphabetUpperCaseBeginning && symbolAtCharCode <= charObj.alphabetUpperCaseEnd) {
                passwordStr += text[i];
                countUpperCaseLetters++
            } else if (symbolAtCharCode >= charObj.specialCharactersBeginning && symbolAtCharCode <= charObj.specialCharactersEnd && symbolAtCharCode !== charObj.quotationMark) {
                passwordStr += text[i];
            } else if (symbolAtCharCode >= charObj.specialCharactersBeginning2  && symbolAtCharCode <= charObj.specialCharactersEnd2 && symbolAtCharCode !== charObj.comma) {
                passwordStr += text[i];
            } else if (symbolAtCharCode === charObj.equal || symbolAtCharCode === charObj.questionMark || symbolAtCharCode === charObj.underscore) {
                passwordStr += text[i];
            } else if (text[i] >= '0' && text[i] <= '9') {
                passwordStr += text[i];
                countNumbers++
            } else invalidPasswordStr += text[i];
        }
       
        if (invalidPasswordStr.length > 0) {
            return `Siu "${invalidPasswordStr}" simboliu negalima naudoti `;
        }

        if (countLowerCaseLetters < 1) {
            return 'turi buti bent viena mazoji raide';
        }

        if (countUpperCaseLetters < 1) {
            return 'turi buti bent viena didzioji raide';
        }

        if (countNumbers < 1) {
            return 'turi buti bent vienas skaicius';
        }

        return true;
    }

    function handleFormSubmit(e) {
        e.preventDefault();

        const usernameErrorValue = isValidUsername(username);
        const emailErrorValue = isValidEmail(email);
        const passwordErrorValue = isValidPassword(password)
        

        let isAllFormValid = true;

        if (usernameErrorValue !== true) {
            isAllFormValid = false;
            setUsernameErr(usernameErrorValue);
        } else {
            setUsernameErr('');
        }

        if (emailErrorValue !== true) {
            isAllFormValid = false;
           setEmailErr(emailErrorValue);
        } else {
            setEmailErr('');
        }

        if (passwordErrorValue !== true) {
            isAllFormValid = false;
            setPasswordErr(passwordErrorValue);
        } else {
            setPasswordErr('');
        }

        if (password !== repeatPassword) {
            isAllFormValid = false;
            setRepeatPasswordErr('slaptazodziai nesutampa')
        } else {
            setRepeatPasswordErr('');
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
                {/* {usernameErr.length === 0 ? null : <p className={style.error}>{usernameErr}</p>} */}
                {usernameErr && <p className={style.error}>{usernameErr}</p>}
            </div>
            <div className={style.formRow}>
                <label className={style.label} htmlFor="">Email</label>
                <input value={email} onChange={handleEmailChange} className={style.input} type="email" placeholder="Eg. john@cena.com" />
                {emailErr && <p className={style.error}>{emailErr}</p>}
            </div>
            <div className={style.formRow}>
                <label className={style.label} htmlFor="">Password</label>
                <input value={password} onChange={handlePasswordChange} className={style.input} type="password" placeholder="enter your password" />
                {passwordErr && <p className={style.error}>{passwordErr}</p>}
            </div>
            <div className={style.formRow}>
                <label className={style.label} htmlFor="">Repeat password</label>
                <input value={repeatPassword} onChange={handleRepeatPasswordChange} className={style.input} type="password" placeholder="enter your password" />
                {repeatPasswordErr && <p className={style.error}>{repeatPasswordErr}</p>}
            </div>
            <div className={style.formRow}>
                <button className={style.button} type="submit">Register</button>
            </div>
        </form>
    );
}