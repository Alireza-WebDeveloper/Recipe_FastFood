import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './NavigationSwitchTheme.css';
import { useSelector } from 'react-redux';
import { changeThemeMode } from '../../../features/theme/themeSlice';
import { useEffect } from 'react';
const NavigationSwitchTheme = () => {
  const getTheme = useSelector((store) => store.theme.mode);
  const dispatch = useDispatch();
  useEffect(() => {
    document.body.classList = getTheme;
  }, [getTheme]);
  onChangeTheme = () => {
    dispatch(changeThemeMode());
  };
  return (
    <div
      className="Navigation_SwitchTheme bg-secondary mt-xl-0  mt-2"
      onClick={onChangeTheme}
    >
      <span
        className={`switchTheme-Icon-Moon  ${
          getTheme === 'dark' ? 'active' : ''
        }`}
      >
        <i className="bi bi-moon"></i>
      </span>
      <span className={`switchTheme-Toggle  bg-light ${getTheme}`}></span>
      <span
        className={`switchTheme-Icon-Sun ${
          getTheme === 'light' ? 'active' : ''
        }`}
      >
        <i className="bi bi-sun"></i>
      </span>
    </div>
  );
};

export default NavigationSwitchTheme;
