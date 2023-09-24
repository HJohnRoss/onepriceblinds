import "react";
import { Link } from "react-router-dom";

const TopNavbar = () => {

  return (
    <>
      {/* Navbar */}
      <nav id="topNavbar" className="topNavbar">
        {/* social media links */}
        <ul className="topNavbar__socials">

          {/* Facebook Link */}
          <li>
            {/* =================================== add to link here ========================================= */}
            <Link to="https://www.facebook.com/onepriceblinds/?show_switched_toast=1&show_invite_to_follow=0&show_switched_tooltip=0&show_podcast_settings=0&show_community_review_changes=0&show_community_rollback=0&show_follower_visibility_disclosure=0" target="_blank">
              <svg className="topNavbar__socials--icon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0,0,256,256">
                <g fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none"><g transform="scale(10.66667,10.66667)"><path d="M16.403,9h-2.403v-2c0,-1.032 0.084,-1.682 1.563,-1.682h0.868c0.552,0 1,-0.448 1,-1v-1.254c0,-0.523 -0.401,-0.97 -0.923,-1.005c-0.604,-0.041 -1.209,-0.06 -1.815,-0.059c-2.713,0 -4.693,1.657 -4.693,4.699v2.301h-2c-0.552,0 -1,0.448 -1,1v2c0,0.552 0.448,1 1,1l2,-0.001v8.001c0,0.552 0.448,1 1,1h2c0.552,0 1,-0.448 1,-1v-8.003l2.174,-0.001c0.508,0 0.935,-0.381 0.993,-0.886l0.229,-1.996c0.069,-0.593 -0.395,-1.114 -0.993,-1.114z"></path></g></g>
              </svg>
            </Link>
          </li>

          {/* Instagram Link */}
          <li>
            {/* =================================== add to link here ========================================= */}
            <Link to="https://www.instagram.com/onepriceblinds/?_ga=2.70226448.1476624298.1695516268-192095080.1695335725" target="_blank">
              <svg className="topNavbar__socials--icon" xmlns="http://www.w3.org/2000/svg" viewBox="0,0,256,256">
                <g fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none"><g transform="scale(5.12,5.12)"><path d="M16,3c-7.16752,0 -13,5.83248 -13,13v18c0,7.16752 5.83248,13 13,13h18c7.16752,0 13,-5.83248 13,-13v-18c0,-7.16752 -5.83248,-13 -13,-13zM16,5h18c6.08648,0 11,4.91352 11,11v18c0,6.08648 -4.91352,11 -11,11h-18c-6.08648,0 -11,-4.91352 -11,-11v-18c0,-6.08648 4.91352,-11 11,-11zM37,11c-1.10457,0 -2,0.89543 -2,2c0,1.10457 0.89543,2 2,2c1.10457,0 2,-0.89543 2,-2c0,-1.10457 -0.89543,-2 -2,-2zM25,14c-6.06329,0 -11,4.93671 -11,11c0,6.06329 4.93671,11 11,11c6.06329,0 11,-4.93671 11,-11c0,-6.06329 -4.93671,-11 -11,-11zM25,16c4.98241,0 9,4.01759 9,9c0,4.98241 -4.01759,9 -9,9c-4.98241,0 -9,-4.01759 -9,-9c0,-4.98241 4.01759,-9 9,-9z"></path></g></g>
              </svg>
            </Link>
          </li>

          {/* Phone Call */}
          <li>
            {/* =================================== add to link here ========================================= */}
            <Link to="tel:888-492-5463">
              <svg className="topNavbar__socials--icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
              </svg>

            </Link>
          </li>

          {/* Email to OnePriceBlinds */}
          <li>
            {/* =================================== add to link here ========================================= */}
            <Link to="mailto:info@onepriceblinds.com" target="_blank">
              <svg className="topNavbar__socials--icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
            </Link>
          </li>
        </ul>

        {/* =================================== add to link here ========================================= */}
        <Link to="/shop" className="topNavbar__link">REQUEST YOUR FREE SAMPLE!</Link>

        <div className="topNavbar__invisible">
          One Price Blinds
        </div>
      </nav>
    </>
  )
}

export default TopNavbar;