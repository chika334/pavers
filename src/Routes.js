import React, { lazy, Suspense, useEffect } from "react";
import { useSelector, connect } from "react-redux";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
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

  // const SuspenseLoading = () => {
  //   const [show, setShow] = useState(false);
  //   useEffect(() => {
  //     let timeout = setTimeout(() => setShow(true), 300);
  //     return () => {
  //       clearTimeout(timeout);
  //     };
  //   }, []);

  //   return (
  //     <>
  //       <AnimatePresence>
  //         {show && (
  //           <motion.div
  //             key="loading"
  //             initial={{ opacity: 0 }}
  //             animate={{ opacity: 1 }}
  //             exit={{ opacity: 0 }}
  //             transition={{ duration: 0.4 }}
  //           >
  //             <div className="d-flex align-items-center flex-column vh-100 justify-content-center text-center py-3">
  //               <div className="d-flex align-items-center flex-column px-4">
  //                 <ClimbingBoxLoader color={"#3c44b1"} loading={true} />
  //               </div>
  //               <div className="text-muted font-size-xl text-center pt-3">
  //                 Please wait while we load the live preview examples
  //                 <span className="font-size-lg d-block text-dark">
  //                   This live preview instance can be slower than a real
  //                   production build!
  //                 </span>
  //               </div>
  //             </div>
  //           </motion.div>
  //         )}
  //       </AnimatePresence>
  //     </>
  //   );
  // };

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
              <Switch>
                {/* <Switch>
                <Redirect exact from="/" to={`${process.env.REACT_APP_URL}`} />
              </Switch>
              <Route
                path={[
                  `${process.env.REACT_APP_URL}`,
                  `${process.env.REACT_APP_URL}/protect`,
                ]}
              >
              </Route> */}
                {/* <Redirect exact from="/" to="/home" />
            <Route path={['/home']}>
              <PresentationLayout>
                <Switch location={location} key={location.pathname}>
                  <motion.div
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}>
                    <Route path="/home" component={Home} />
                  </motion.div>
                </Switch> */}
                {/* </PresentationLayout> */}
                {/* </Route> */}

                {/* <Switch> */}
                <Redirect exact from="/" to={`${process.env.REACT_APP_URL}/home`} />
                {/* </Switch> */}
                <Route
                  path={[
                    `${process.env.REACT_APP_URL}/addproducts`,
                    `${process.env.REACT_APP_URL}/addgateway`,
                    `${process.env.REACT_APP_URL}/pageFileManager`,
                    `${process.env.REACT_APP_URL}/pageProfile`,
                    `${process.env.REACT_APP_URL}/home`,
                  ]}
                  // path={[
                  //   `/addproducts`,
                  //   `/addgateway`,
                  //   `/pageFileManager`,
                  //   `/pageProfile`,
                  //   `/https://chika334.github.io/pavers`,
                  // ]}
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
                        <Route path={`${process.env.REACT_APP_URL}/home`} exact component={Home} />
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

                {/* <Redirect exact from="/" to="/home" />
            <Route path={['/home']}>
              <PresentationLayout>
                <Switch location={location} key={location.pathname}>
                  <motion.div
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}>
                    <Route path="/home" component={Home} />
                  </motion.div>
                </Switch> */}

                <Route
                  path={[
                    // '/PageLoginBasic',
                    // '/PageLoginCover',
                    // '/PageLoginIllustration',
                    // '/PageLoginOverlay',
                    // '/PageRegisterBasic',
                    // '/PageRegisterCover',
                    // '/PageRegisterIllustration',
                    // '/PageRegisterOverlay',
                    // '/PageRecoverBasic',
                    // '/PageRecoverCover',
                    // '/PageRecoverIllustration',
                    // '/PageRecoverOverlay',
                    `${process.env.REACT_APP_URL}/PageError404`,
                    `${process.env.REACT_APP_URL}/PageError500`,
                    `${process.env.REACT_APP_URL}/PageError505`,
                    `${process.env.REACT_APP_URL}/login`,
                    // "/home",
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
                        <Route path={`${process.env.REACT_APP_URL}/login`} component={Login} />
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
            </Suspense>
          </>
        )}
      </AnimatePresence>
    </ThemeProvider>
  );
};

export default connect(null, { showLoader, hideLoader })(Routes);
