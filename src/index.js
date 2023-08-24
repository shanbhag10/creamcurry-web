import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles/login.css';
import './styles/home.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { CookiesProvider } from "react-cookie";
import LandingPage from './pages/LandingPage';

const navigation_items_elms = document.querySelectorAll(
  ".navigation-bar .list-items .item"
);
// const navigation_pointer = document.querySelector(".navigation-bar .pointer");

navigation_items_elms.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    navigation_items_elms.forEach((itm) => itm.classList.remove("active"));
    item.classList.add("active");

    // const parentWidth = item.parentElement.clientWidth;
    // const leftPercent = (parentWidth / navigation_items_elms.length) * index;
    // navigation_pointer.style.left = leftPercent + "px";
  });
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<CookiesProvider>
    <React.StrictMode>
      <BrowserRouter>
        <div>
          <LandingPage />
        </div>
      </BrowserRouter>
    </React.StrictMode>
  </CookiesProvider>
);

reportWebVitals();
