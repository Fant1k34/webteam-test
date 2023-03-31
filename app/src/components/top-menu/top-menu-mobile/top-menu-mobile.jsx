import React, { useState } from "react";
import '../index.module.pcss';

export const TopMenuMobile = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
      setOpenMenu((prevState) => !prevState);
  }

  return (
    <div className={`wt-container ${ openMenu ? 'top-menu__burger_open' : 'top-menu__burger' }`}>
        { !openMenu && (
          <div className="wt-row wt-row_size_0 wt-row_align-items_center top-menu__line_mobile">
            <div className="wt-col-1 top-menu__overview_mobile">
              <span className="top-menu__overview_mobile-text" onClick={handleOpenMenu}> Overview </span>
            </div>
          </div>
        ) }
        { openMenu && (
          <>
            <div className="wt-row wt-row_size_0 wt-row_align-items_center top-menu__line_mobile">
              <span className="top-menu__overview_mobile-text" onClick={handleOpenMenu}> Overview </span>
            </div>
            <div className="wt-row wt-row_size_0 wt-row_align-items_center top-menu__main-logo_mobile">
              <span className="top-menu__main-logo-text" onClick={handleOpenMenu}> Toolbox </span>
            </div>
            <div className="wt-row wt-row_size_0 wt-row_align-items_center top-menu__application_mobile">
              <span className="top-menu__application-text_mobile" onClick={handleOpenMenu}> Toolbox App </span>
            </div>
            <div className="wt-row wt-row_size_0 wt-row_align-items_center top-menu__button_mobile">
              <span className="top-menu__button-text_mobile" onClick={handleOpenMenu}> Buy Now </span>
            </div>
          </>
        ) }
    </div>
  );
};
