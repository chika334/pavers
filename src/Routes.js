import React, { lazy, Suspense, useEffect } from "react";
import { useSelector, connect } from "react-redux";
import {
  Switch,
  Route,
  Redirect,
  useLocation,
  HashRouter,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import { ThemeProvider } from "@material-ui/styles";
import MuiTheme from "./theme";

import { showLoader, hideLoader } from "./actions/loading";

import SuspenseLoading from "./layout-components/Loader/Loader";
import Footer from "./layout-components/Footer";

// Layout Blueprints
import {
  LeftSidebar,
  CollapsedSidebar,
  MinimalLayout,
} from "./layout-blueprints";

// views
import Login from "./views/Login";
import Home from "./views/Home";
import AddProduct from "./views/AddProduct";
import AddGateway from "./views/AddGateway";

// pages
import PageError404 from "./Pages/PageError404";
import PageError500 from "./Pages/PageError500";
import PageError505 from "./Pages/PageError505";
const PageFileManager = lazy(() => import("./Pages/PageFileManager"));
const PageProfile = lazy(() => import("./Pages/PageProfile"));

const Routes = (props) => {
  const location = useLocation();
  const loading = useSelector((state) => state.loading.loading);

  const pageVariants = {
    initial: {
      opacity: 0,
    },
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    },
  };

  const pageTransition = {
    type: "tween",
    ease: "linear",
    duration: 0.3,
  };

  useEffect(() => {
    props.showLoader();
    setTimeout(() => {
      props.hideLoader();
    }, 2000);
  }, []);

  return (
    <ThemeProvider theme={MuiTheme}>
      <AnimatePresence>
        {loading ? (
          <SuspenseLoading />
        ) : (
          <>
            <Suspense fallback={<SuspenseLoading />}>
              {/* <HashRouter> */}
                <Switch>
                  <Redirect
                    exact
                    from="/"
                    to={`${process.env.REACT_APP_URL}/home`}
                  />
                  <Route
                    path={[
                      `${process.env.REACT_APP_URL}/addproducts`,
                      `${process.env.REACT_APP_URL}/addgateway`,
                      `${process.env.REACT_APP_URL}/pageFileManager`,
                      `${process.env.REACT_APP_URL}/pageProfile`,
                      `${process.env.REACT_APP_URL}/home`,
                    ]}
                  >
                    <CollapsedSidebar>
                      <Switch location={location} key={location.pathname}>
                        <motion.div
                          initial="initial"
                          animate="in"
                          exit="out"
                          variants={pageVariants}
                          transition={pageTransition}
                        >
                          <Route
                            path={`${process.env.REACT_APP_URL}/home`}
                            exact
                            component={Home}
                          />
                          <Route
                            path={`${process.env.REACT_APP_URL}/addproducts`}
                            exact
                            component={AddProduct}
                          />
                          <Route
                            path={`${process.env.REACT_APP_URL}/addgateway`}
                            exact
                            component={AddGateway}
                          />
                          <Route
                            path={`${process.env.REACT_APP_URL}/pageFileManager`}
                            exact
                            component={PageFileManager}
                          />
                          <Route
                            path={`${process.env.REACT_APP_URL}/pageProfile`}
                            exact
                            component={PageProfile}
                          />
                        </motion.div>
                      </Switch>
                      <Footer />
                    </CollapsedSidebar>
                  </Route>
                  <Route
                    path={[
                      `${process.env.REACT_APP_URL}/PageError404`,
                      `${process.env.REACT_APP_URL}/PageError500`,
                      `${process.env.REACT_APP_URL}/PageError505`,
                      `${process.env.REACT_APP_URL}/login`,
                    ]}
                  >
                    <MinimalLayout>
                      <Switch location={location} key={location.pathname}>
                        <motion.div
                          initial="initial"
                          animate="in"
                          exit="out"
                          variants={pageVariants}
                          transition={pageTransition}
                        >
                          <Route
                            path={`${process.env.REACT_APP_URL}/login`}
                            component={Login}
                          />
                          <Route
                            path={`${process.env.REACT_APP_URL}/PageError404`}
                            component={PageError404}
                          />
                          <Route
                            path={`${process.env.REACT_APP_URL}/PageError500`}
                            component={PageError500}
                          />
                          <Route
                            path={`${process.env.REACT_APP_URL}/PageError505`}
                            component={PageError505}
                          />
                        </motion.div>
                      </Switch>
                    </MinimalLayout>
                  </Route>
                </Switch>
              {/* </HashRouter> */}
            </Suspense>
          </>
        )}
      </AnimatePresence>
    </ThemeProvider>
  );
};

export default connect(null, { showLoader, hideLoader })(Routes);
