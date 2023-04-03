import React, { useEffect, useRef, useState } from 'react'
import '../index.module.pcss'
import { useOutsideMenuChecker } from '../../../hooks/useOutsideMenuChecker'

export const TopMenuMobile = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const [textBurgerMenuAvailable, setTextBurgerMenuAvailable] =
        useState(false)

    const handleOpenMenu = () => {
        setOpenMenu((prevState) => !prevState)
    }

    const wrapperRef = useRef(null)

    useEffect(() => {
        wrapperRef.current.addEventListener('transitionend', () =>
            setTextBurgerMenuAvailable((value) => !value)
        )
    }, [])

    useOutsideMenuChecker(wrapperRef, () => setOpenMenu(false))

    return (
        <header
            className={`wt-container top-menu__burger-animate ${
                openMenu ? 'top-menu__burger_open' : 'top-menu__burger'
            }`}
            onMouseDown={() => false}
            ref={wrapperRef}
        >
            {!openMenu && (
                <nav className="wt-row wt-row_size_0 wt-row_align-items_center top-menu__line_mobile">
                    <section className="wt-col-1 top-menu__overview_mobile">
                        <span
                            className="top-menu__overview_mobile-text"
                            onClick={handleOpenMenu}
                        >
                            Overview
                        </span>
                    </section>
                </nav>
            )}
            {openMenu && (
                <nav>
                    <section className="wt-row wt-row_size_0 wt-row_align-items_center top-menu__line_mobile">
                        <a
                            className="top-menu__overview_mobile-text"
                            onClick={handleOpenMenu}
                        >
                            Overview
                        </a>
                    </section>
                    <section className="wt-row wt-row_size_0 wt-row_align-items_center top-menu__main-logo_mobile">
                        <a className="top-menu__main-logo-text">
                            {textBurgerMenuAvailable && 'Toolbox'}
                        </a>
                    </section>
                    <section className="wt-row wt-row_size_0 wt-row_align-items_center top-menu__application_mobile">
                        <a className="top-menu__application-text_mobile">
                            {textBurgerMenuAvailable && 'Toolbox App'}
                        </a>
                    </section>
                    <section className="wt-row wt-row_size_0 wt-row_align-items_center top-menu__button_mobile">
                        <a className="top-menu__button-text_mobile">
                            {textBurgerMenuAvailable && 'Buy Now'}
                        </a>
                    </section>
                </nav>
            )}
        </header>
    )
}
