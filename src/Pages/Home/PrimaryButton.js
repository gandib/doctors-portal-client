import React from 'react';
import { useNavigate } from 'react-router-dom';

const PrimaryButton = ({ children, onClickNavigate }) => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(onClickNavigate);
    }
    return (
        <button onClick={handleNavigate} className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary ">{children}</button>
    );
};

export default PrimaryButton;