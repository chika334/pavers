import React, { useState } from "react";
import clsx from "clsx";
import { connect } from "react-redux";
import { NavLink, withRouter } from "react-router-dom";
import { setSidebarToggleMobile } from "../../reducers/ThemeOptions";
import { Collapse, Button, List, ListItem } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeaderDots from "../../layout-components/HeaderDots";
import HeaderDrawer from "../../layout-components/HeaderDrawer";
import HeaderUserbox from "../../layout-components/HeaderUserbox";
import HeaderSearch from "../../layout-components/HeaderSearch";
import HeaderMenu from "../../layout-components/HeaderMenu";

const Header = (props) => {
  const [toggles, setToggles] = useState(false);
  const {
    headerShadow,
    headerBgTransparent,
    sidebarToggleMobile,
    setSidebarToggleMobile,
  } = props;

  const toggleSidebarMobile = () => {
    setSidebarToggleMobile(!sidebarToggleMobile);
  };

  const toggle = () => {
    setToggles(!toggles);
  };

  const good = () => {
    console.log("profile");
  };

  const loginRedirect = (e) => {
    e.preventDefault();
    // console.log("good");
    // props.history.push(`/login`);
    props.history.push(`${process.env.REACT_APP_URL}/login`);
  };

  const homeRedirect = (e) => {
    e.preventDefault();
    // props.history.push(`/home`);
    props.history.push(`${process.env.REACT_APP_URL}/home`);
  };

  return (
    <>
      <div>
        <div
          className="app-header shadow-sm-dark"
          style={{ paddingLeft: "2em", paddingRight: "2em" }}
        >
          <div className="app-header--pane">
            <HeaderSearch />
          </div>
          {/* end part navbar */}
          <div className="header-nav-menu d-none d-lg-block">
            <ul
              style={{ display: "flex", float: "right" }}
              className="d-flex nav nav-neutral-first justify-content-center"
            >
              <li>
                <Button
                  onClick={(e) => homeRedirect(e)}
                  className="w-100 font-weight-bold rounded-sm"
                >
                  Home
                </Button>
              </li>
              <li>
                <Button
                  onClick={(e) => loginRedirect(e)}
                  className="font-weight-bold rounded-sm"
                >
                  Login
                </Button>
              </li>
              {/* <li>
                <Button
                  onClick={(e) => {
                    if (this.props.authUser) {
                      this.props.history.push(
                        `${process.env.REACT_APP_URL}/profilepage`
                      );
                    } else {
                      return () => good();
                      // localStorage.setItem("redirectPage", "/profilepage");
                    }
                  }}
                  className="font-weight-bold rounded-sm px-3"
                >
                  Profile
                </Button>
              </li>
              <li>
                <Button
                  // onClick={(e) => {
                  //   if (this.props.authUser) {
                  //     this.props.history.push(
                  //       `${process.env.REACT_APP_URL}/profilepage`
                  //     );
                  //   } else {
                  //     this.good(e);
                  //     // localStorage.setItem("redirectPage", "/profilepage");
                  //   }
                  // }}
                  className="font-weight-bold rounded-sm px-3"
                >
                  Dashboard
                </Button>
              </li> */}
            </ul>
          </div>
          <span className="d-block d-lg-none">
            <button
              onClick={() => toggle()}
              className={clsx("navbar-toggler hamburger hamburger--elastic", {
                "is-active": toggles,
              })}
            >
              <span className="hamburger-box">
                <span className="hamburger-inner" />
              </span>
            </button>
          </span>
        </div>
      </div>

      <Collapse in={toggles} className="nav-collapsed-wrapper navbar-collapse">
        <div className="nav-inner-wrapper">
          <Button
            onClick={() => toggle()}
            className="btn-icon d-40 shadow-sm hover-scale-lg btn-animated-icon-sm nav-toggle-inner-btn p-0"
          >
            <span className="btn-wrapper--icon">
              <FontAwesomeIcon icon={["fas", "times"]} />
            </span>
          </Button>

          <div className="p-3">
            <List
              component="div"
              className="nav-pills nav-neutral-primary nav-pills-rounded"
            >
              <ListItem
                button
                component={NavLink}
                to="#"
                to={`${process.env.REACT_APP_URL}`}
                className="w-100 d-flex align-items-center"
              >
                <span>Home</span>
                <FontAwesomeIcon
                  icon={["fas", "angle-right"]}
                  className="opacity-6 ml-auto"
                />
              </ListItem>
              <ListItem
                button
                component={NavLink}
                to="#"
                to={`${process.env.REACT_APP_URL}/login`}
                className="w-100 d-flex align-items-center"
              >
                <span>Login</span>
                <FontAwesomeIcon
                  icon={["fas", "angle-right"]}
                  className="opacity-6 ml-auto"
                />
              </ListItem>
              <ListItem
                button
                component={NavLink}
                to="#"
                // to={`${process.env.REACT_APP_URL}`}
                className="w-100 text-center d-flex align-items-center"
              >
                <span>Profile</span>
                <FontAwesomeIcon
                  icon={["fas", "angle-right"]}
                  className="opacity-6 ml-auto"
                />
              </ListItem>
              <ListItem
                button
                component={NavLink}
                to="#"
                // to={`${process.env.REACT_APP_URL}`}
                className="w-100 text-center d-flex align-items-center"
              >
                <span>Dashboard</span>
                <FontAwesomeIcon
                  icon={["fas", "angle-right"]}
                  className="opacity-6 ml-auto"
                />
              </ListItem>
            </List>
          </div>
        </div>
        <hr />
      </Collapse>
      {/* </div> */}
    </>
  );
};

const mapStateToProps = (state) => ({
  headerShadow: state.ThemeOptions.headerShadow,
  headerBgTransparent: state.ThemeOptions.headerBgTransparent,
  sidebarToggleMobile: state.ThemeOptions.sidebarToggleMobile,
});

const mapDispatchToProps = (dispatch) => ({
  setSidebarToggleMobile: (enable) => dispatch(setSidebarToggleMobile(enable)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
