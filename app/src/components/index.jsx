import React from 'react'
import { TopMenu } from './top-menu/top-menu'
import { AllProductsSection } from "./all-products-section";
import './index.module.pcss';

export const LandingPage = () => {
    return (
        <main className="landing">
            <TopMenu />
            <AllProductsSection />
        </main>
    )
}
