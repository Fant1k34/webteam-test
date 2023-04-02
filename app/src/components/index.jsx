import React from 'react'
import { TopMenu } from './top-menu/top-menu'
import { AllProductsSection } from './all-products-section'
import './index.module.pcss'
import { ProductsNameSection } from './products-name-section/products-name-section'

export const LandingPage = () => {
    return (
        <main className="landing">
            <TopMenu />
            <AllProductsSection />
            <ProductsNameSection />
        </main>
    )
}
