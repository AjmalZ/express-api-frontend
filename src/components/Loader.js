/* eslint-disable react/jsx-indent-props */
/* eslint-disable indent */
import React from 'react';
import Lottie from 'react-lottie-player'
import LoaderLottie from './loading-lottie.json'
import './Loader.css'

export const Loader = () => {
    return (
        <div className="Loader">
            <Lottie
                className="lottie"
                loop
                animationData={LoaderLottie}
                play
                style={{ width: 550, height: 550 }} />
        </div>
    )
}