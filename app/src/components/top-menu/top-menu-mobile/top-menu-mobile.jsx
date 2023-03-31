import React, { useRef, useState } from 'react'
import '../index.module.pcss'
import { useOutsideMenuChecker } from "../../../hooks/useOutsideMenuChecker";

export const TopMenuMobile = () => {
    const [openMenu, setOpenMenu] = useState(false)

    const handleOpenMenu = () => {
        setOpenMenu((prevState) => !prevState)
    }

    const wrapperRef = useRef(null);

    useOutsideMenuChecker(wrapperRef, () => setOpenMenu(false));

    return (
        <header
            className={`wt-container ${
                openMenu ? 'top-menu__burger_open' : 'top-menu__burger'
            }`}
            onMouseDown={() => false}
            ref={wrapperRef}
        >
            {!openMenu && (
                <div className="wt-row wt-row_size_0 wt-row_align-items_center top-menu__line_mobile">
                    <div className="wt-col-1 top-menu__overview_mobile">
                        <span
                            className="top-menu__overview_mobile-text"
                            onClick={handleOpenMenu}
                        >
                            Overview
                        </span>
                    </div>
                </div>
            )}
            {openMenu && (
                <>
                    <div className="wt-row wt-row_size_0 wt-row_align-items_center top-menu__line_mobile">
                        <a
                            className="top-menu__overview_mobile-text"
                            onClick={handleOpenMenu}
                        >
                            Overview
                        </a>
                    </div>
                    <div className="wt-row wt-row_size_0 wt-row_align-items_center top-menu__main-logo_mobile">
                        <a
                            className="top-menu__main-logo-text"
                        >
                            Toolbox
                        </a>
                    </div>
                    <div className="wt-row wt-row_size_0 wt-row_align-items_center top-menu__application_mobile">
                        <a
                            className="top-menu__application-text_mobile"
                        >
                            Toolbox App
                        </a>
                    </div>
                    <div className="wt-row wt-row_size_0 wt-row_align-items_center top-menu__button_mobile">
                        <a
                            className="top-menu__button-text_mobile"
                        >
                            Buy Now
                        </a>
                    </div>
                </>
            )}
        </header>
    )
}
