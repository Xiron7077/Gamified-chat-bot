'use client'

import React, { useState } from 'react';

interface inputBlockProps{
    password: string;
    label?: string;
    type?: string;
}

export default function ConfirmPassword({password, label = "", type = ""}: inputBlockProps) {
    const [confirmPassword, setConfirmPassword] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

    function validateConfirmPassword(confirmPassword: string, password: string): boolean {
        return confirmPassword === password || password === '' || confirmPassword === '';
    }

    function handleConfirmPasswordChange (e: React.ChangeEvent<HTMLInputElement>) {
        const newConfirmPassword = e.target.value;
        setConfirmPassword(newConfirmPassword);
        
        if(!validateConfirmPassword(newConfirmPassword, password)){
            setConfirmPasswordError('Password do not match.');
        } else {
            setConfirmPasswordError('');
        }
    }

    const isConfirmPasswordInvalid = !!confirmPasswordError;

    return (
        <form>
            <label className="text-white ml-1 text-lg">
                {label}
            </label>

            <input 
                type={type}
                value={confirmPassword} 
                onChange={handleConfirmPasswordChange} 
                className={`border-[1px] text-white caret-white bg-inherit rounded-3xl h-10 w-full px-4 focus-visible:outline-none disabled:cursor-not-allowed ${isConfirmPasswordInvalid ? 'border-pink-600' : 'border-gray-400'}`}
            />
            {confirmPasswordError && (
                <p className="ml-1 mt-2 text-pink-600 text-sm">
                    {confirmPasswordError}
                </p> 
            )} 
        </form>
    );
}   