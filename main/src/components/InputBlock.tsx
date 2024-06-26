'use client'

import React, { useState } from 'react';
import ConfirmPassword from './ConfirmPassword';

interface inputBlockProps{
    label?: string;
    type?: string;
    value?: string;
    placeholder?: string;
    stylesheet?: string;
}

export default function InputBlock({label = "", type = "", value = "", placeholder = "", stylesheet = ""}: inputBlockProps) {
    const [password, setPassword] = useState(value);
    const [passwordError, setPasswordError] = useState('');
    const [inputValue, setInputValue] = useState(value);

    function validatePassword(password: string) : boolean{
        return password.length >= 8 || password.length === 0;
    }

    function handlePasswordChange (e: React.ChangeEvent<HTMLInputElement>) {
        const newPassword = e.target.value;
        setPassword(newPassword);

        if(!validatePassword(newPassword)){
            setPasswordError('Password length should be greater than 8.');
        } else {
            setPasswordError('');
        }
    }

    function handleInputValue(e : React.ChangeEvent<HTMLInputElement>){
        const newInputValue = e.target.value;
        setInputValue(newInputValue);
    }

    const isPasswordInvalid = !!passwordError;
    const isStyleSheet = !!stylesheet;

    if(type === "email") {
        return (
            <form>
                <label className="text-white ml-1 text-lg">
                    {label}
                </label>
                <input 
                    type={type}
                    placeholder={placeholder} 
                    className="peer border-[1px] border-gray-400 text-white caret-white bg-inherit rounded-3xl h-10 w-full px-4 invalid:border-pink-600 focus-visible:outline-none disabled:cursor-not-allowed"
                />
                <p className="-mt-4 ml-1 invisible peer-invalid:visible peer-invalid:mt-2 text-pink-600 text-sm">
                    Please provide a valid email address.
                </p>
            </form>
        );
    } else if(type === "password") {
        return (
            <form>
                <label className="text-white ml-1 text-lg">
                    {label}
                </label>

                <input 
                    type='password'
                    value={password} 
                    onChange={handlePasswordChange} 
                    className={`border-[1px] text-white caret-white bg-inherit rounded-3xl h-10 w-full px-4 focus-visible:outline-none disabled:cursor-not-allowed ${isPasswordInvalid ? 'border-pink-600' : 'border-gray-400'}`}
                />
                {passwordError && (
                    <p className="ml-1 mt-2 text-pink-600 text-sm">
                        {passwordError}
                    </p> 
                )} 
            </form>
        );
    } else if(type === "password and confirm password") {
        return (
            <div>
                <form>
                    <label className="text-white ml-1 text-lg">
                        {label}
                    </label>

                    <input 
                        type='password'
                        value={password} 
                        onChange={handlePasswordChange} 
                        className={`border-[1px] text-white caret-white bg-inherit rounded-3xl h-10 w-full px-4 focus-visible:outline-none disabled:cursor-not-allowed ${isPasswordInvalid ? 'border-pink-600' : 'border-gray-400'}`}
                    />
                    {passwordError && (
                        <p className="ml-1 mt-2 text-pink-600 text-sm">
                            {passwordError}
                        </p> 
                    )} 
                </form>
                <div className='mt-3'>
                    <ConfirmPassword password={password} label="Confirm Password" type='password'/>
                </div>
            </div>
        );
    } else {
        return (
            <form>
                <label className="text-white ml-1 text-lg">
                    {label}
                </label>
                <input 
                    type={type}
                    value={inputValue}
                    onChange={handleInputValue}
                    placeholder={placeholder} 
                    className={`${isStyleSheet ? stylesheet : 'border-gray-400 bg-inherit rounded-3xl h-10 w-full px-4'} border-[1px] text-white caret-white focus-visible:outline-none disabled:cursor-not-allowed`}
                />
            </form>
        );
    }
}   