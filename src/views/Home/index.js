import React, { useState } from "react";
import clsx from "clsx";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect, useSelector } from "react-redux";
import {
  Table,
  Grid,
  InputAdornment,
  ButtonGroup,
  Card,
  Button,
  List,
  ListItem,
  TextField,
  Container,
} from "@material-ui/core";
import PerfectScrollbar from "react-perfect-scrollbar";
import SearchTwoToneIcon from "@material-ui/icons/SearchTwoTone";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import { Box, Collapse } from "@material-ui/core";
import PropTypes from "prop-types";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function LivePreviewExample(props) {
  const user = useSelector((state) => state.userReducer.isAuthenticated);
  const [inputBg, setInputBg] = useState(false);
  const [toggles, setToggles] = useState(false);
  const [value, setValue] = React.useState(0);
  const toggleInputBg = () => setInputBg(!inputBg);
  const [searchStatus3, setSearchStatus3] = useState(false);
  const toggleSearch3 = () => setSearchStatus3(!searchStatus3);
  const [activeTab, setActiveTab] = useState("1");
  // const toggle = (tab) => {
  //   if (activeTab !== tab) setActiveTab(tab);
  // };
  const [isSidebarMenuOpen, setIsSidebarMenuOpen] = useState(false);
  const toggleSidebarMenu = () => setIsSidebarMenuOpen(!isSidebarMenuOpen);

  const addPaymentGateway = (e) => {
    e.preventDefault();
    if (!user) {
      // props.history.push(`/login`);
      props.history.push(`${process.env.REACT_APP_URL}/login`);
    } else {
      const redirect = localStorage.getItem("redirect");
      props.history.push(`${redirect}`);
      props.history.push(`${process.env.REACT_APP_URL}${redirect}`);
    }
  };

  const toggle = () => {
    setToggles(!toggles);
  };

  const addProduct = (e) => {
    e.preventDefault();
    if (!user) {
      // props.history.push(`/login`);
      props.history.push(`${process.env.REACT_APP_URL}/login`);
    } else {
      const redirect = localStorage.getItem("redirect");
      props.history.push(`${redirect}`);
      props.history.push(`${process.env.REACT_APP_URL}${redirect}`);
    }
    localStorage.removeItem("redirect");
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <PerfectScrollbar>
        <div className="app-inner-content-layout app-inner-content-layout">
          <div className="app-inner-content-layout--main bg-white p-0">
            <div className="px-5 pt-4">
              <div
                className={clsx(
                  "app-inner-content-layout--sidebar__xl pos-r bg-white border-left",
                  { "layout-sidebar-open": isSidebarMenuOpen }
                )}
              >
                {/* <Card className="d-block text-center text-md-left card-box p-4 align-items-center bg-secondary justify-content-between flex-row"> */}
                <div className="d-block d-lg-flex align-items-center justify-content-center">
                  <div className="text-center text-lg-left mr-lg-4">
                    <div className="font-size-lg text-black-50">
                      Welcome back,
                    </div>
                    <div className="display-4 font-weight-bold">
                      Anifowose Gbolahan
                    </div>
                  </div>
                  {/* </Card> */}
                </div>
              </div>
            </div>
            <div className="px-4 pt-4 pb-5">
              <Card className="d-block d-md-flex text-center text-md-left card-box p-4 align-items-center bg-secondary justify-content-between flex-row">
                <div className="d-block d-md-flex align-items-center">
                  <div>
                    <b className="font-size-lg">2</b> Products
                  </div>
                  <div className="mx-3 d-none d-md-block">
                    <div className="divider-v bg-dark opacity-3 position-relative" />
                    <div className="divider-v bg-dark opacity-3 position-relative" />
                  </div>
                  <div className="d-flex d-md-block justify-content-center py-3 py-md-0">
                    <div
                      className={clsx("search-wrapper search-wrapper--grow", {
                        "is-active": searchStatus3,
                      })}
                    >
                      <TextField
                        variant="outlined"
                        size="small"
                        classes={{ root: "bg-white" }}
                        className="w-100"
                        placeholder="Search products"
                        id="input-with-icon-textfield22-3"
                        onFocus={toggleSearch3}
                        onBlur={toggleSearch3}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <SearchTwoToneIcon />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </div>
                  </div>
                  {/* <span className="d-block d-lg-none">
                    <button
                      onClick={() => toggle()}
                      className={clsx(
                        "navbar-toggler hamburger hamburger--elastic",
                        {
                          "is-active": toggles,
                        }
                      )}
                    >
                      <span className="hamburger-box">
                        <span className="hamburger-inner" />
                      </span>
                    </button>
                  </span> */}
                  {/* <Collapse
                    in={toggles}
                    className="nav-collapsed-wrapper navbar-collapse"
                  >
                    <div className="nav-inner-wrapper">
                      <Tabs
                        value={value}
                        TabIndicatorProps={{
                          style: { backgroundColor: "#64b5f6" },
                        }}
                        onChange={handleChange}
                        aria-label="simple tabs example"
                      >
                        <Tab label="Payment Gateway" {...a11yProps(0)} />
                        <Tab label="Products" {...a11yProps(1)} />
                      </Tabs>
                    </div>
                  </Collapse> */}
                  <div style={{ position: "absolute", right: 0 }} className="sm-tab-item-wrapper">
                    <div className="header-nav-menu p-sm-5 d-sm-block">
                      {/* <div> */}
                      <Tabs
                        value={value}
                        TabIndicatorProps={{
                          style: { backgroundColor: "#64b5f6" },
                        }}
                        onChange={handleChange}
                        aria-label="simple tabs example"
                      >
                        <Tab label="Payment Gateway" {...a11yProps(0)} />
                        <Tab label="Products" {...a11yProps(1)} />
                      </Tabs>
                      {/* <ul className="d-flex d-sm-block nav nav-neutral-first justify-content-center">
                        <li>
                          <a
                            // to={`${process.env.REACT_APP_URL}`}
                            // href="/#"
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                              toggle("1");
                            }}
                            className="font-weight-bold rounded-sm px-3"
                          >
                            Payment gateways
                          </a>
                        </li>
                        <li>
                          <a
                            // href={`${process.env.REACT_APP_URL}`}
                            // href="/#"
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                              toggle("2");
                            }}
                            className="font-weight-bold rounded-sm px-3"
                          >
                            Products
                          </a>
                        </li>
                      </ul> */}
                    </div>
                  </div>
                </div>
              </Card>
            </div>
            {/* <div
              className={clsx("tab-item", {
                // className={clsx("tab-item-wrapper", {
                active: activeTab === "1",
              })}
              index={1}
            > */}
            <TabPanel value={value} index={0}>
              <div>
                <div className="p-4">
                  <div className="text-center">
                    <h5
                      style={{ color: "#64b5f6" }}
                      className="text-first font-weight-bold font-size-xxl"
                    >
                      Payment Gateway
                    </h5>
                    <p className="text-black-50 font-size-lg">
                      These are the 3rd party gateway you have added to your
                      profile
                    </p>
                  </div>
                  <Grid container spacing={6}>
                    <Grid item sm={6} md={4} lg={4} xl={4}>
                      {/* <Grid item md={4} lg={12} xl={4}> */}
                      <Card className="card-box card-box-border-bottom border-primary my-4">
                        <div className="text-center py-3">
                          <div className="d-60 rounded-circle border-0 my-2 card-icon-wrapper bg-plum-plate text-white btn-icon mx-auto text-center">
                            <FontAwesomeIcon
                              icon={["far", "bell"]}
                              className="font-size-xxl"
                            />
                          </div>
                          <div className="font-size-xl font-weight-bold pt-2 text-black">
                            Paystack
                          </div>
                          <div className="opacity-5 pb-3">3 Products</div>

                          <div className="divider mx-auto w-50 my-3" />

                          {/* <div className="text-center">
                            <Button
                              // className="p-0 d-30 mx-1 btn-transition-none border-0 btn-outline-first"
                              variant="outlined"
                              style={{ backgroundColor: "#64b5f6" }}
                            >
                              Checkout
                            </Button>
                          </div> */}
                          <div className="text-center">
                            <Button
                              className="p-0 d-30 mx-1 btn-transition-none border-0 btn-outline-first"
                              variant="outlined"
                            >
                              <span className="btn-wrapper--icon">
                                <FontAwesomeIcon
                                  icon={["far", "eye"]}
                                  className="font-size-lg"
                                />
                              </span>
                            </Button>
                            <Button
                              className="p-0 d-30 mx-1 btn-transition-none border-0 btn-outline-warning"
                              variant="outlined"
                            >
                              <span className="btn-wrapper--icon">
                                <FontAwesomeIcon
                                  icon={["fas", "edit"]}
                                  className="font-size-lg"
                                />
                              </span>
                            </Button>
                            <Button
                              className="p-0 d-30 mx-1 btn-transition-none border-0 btn-outline-danger"
                              variant="outlined"
                            >
                              <span className="btn-wrapper--icon">
                                <FontAwesomeIcon
                                  icon={["fas", "times"]}
                                  className="font-size-lg"
                                />
                              </span>
                            </Button>
                          </div>
                        </div>
                      </Card>
                    </Grid>
                    <Grid item sm={6} md={4} lg={4} xl={4}>
                      <Card className="card-box card-box-border-bottom border-primary my-4">
                        <div className="text-center py-3">
                          <div className="d-60 rounded-circle border-0 my-2 card-icon-wrapper bg-happy-fisher text-white btn-icon mx-auto text-center">
                            <FontAwesomeIcon
                              icon={["fas", "cubes"]}
                              className="font-size-xl"
                            />
                          </div>
                          <div className="font-size-xl font-weight-bold pt-2 text-black">
                            Flutterwave
                          </div>
                          <div className="opacity-5 pb-3">Latest analytics</div>

                          <div className="divider mx-auto w-50 my-3" />
                          <div className="text-center">
                            <Button
                              className="p-0 d-30 mx-1 btn-transition-none border-0 btn-outline-first"
                              variant="outlined"
                            >
                              <span className="btn-wrapper--icon">
                                <FontAwesomeIcon
                                  icon={["far", "eye"]}
                                  className="font-size-lg"
                                />
                              </span>
                            </Button>
                            <Button
                              className="p-0 d-30 mx-1 btn-transition-none border-0 btn-outline-warning"
                              variant="outlined"
                            >
                              <span className="btn-wrapper--icon">
                                <FontAwesomeIcon
                                  icon={["fas", "edit"]}
                                  className="font-size-lg"
                                />
                              </span>
                            </Button>
                            <Button
                              className="p-0 d-30 mx-1 btn-transition-none border-0 btn-outline-danger"
                              variant="outlined"
                            >
                              <span className="btn-wrapper--icon">
                                <FontAwesomeIcon
                                  icon={["fas", "times"]}
                                  className="font-size-lg"
                                />
                              </span>
                            </Button>
                          </div>
                        </div>
                      </Card>
                    </Grid>
                    <Grid item sm={6} md={4} lg={4} xl={4}>
                      <Card className="card-box card-box-border-bottom border-primary my-4">
                        <div className="text-center py-3">
                          <div className="d-60 rounded-circle border-0 my-2 card-icon-wrapper bg-love-kiss text-white btn-icon mx-auto text-center">
                            <FontAwesomeIcon
                              icon={["fas", "shapes"]}
                              className="font-size-xl"
                            />
                          </div>
                          <div className="font-size-xl font-weight-bold pt-2 text-black">
                            Paypal
                          </div>
                          <div className="opacity-5 pb-3">
                            Successful orders
                          </div>

                          <div className="divider mx-auto w-50 my-3" />
                          <div className="text-center">
                            <Button
                              className="p-0 d-30 mx-1 btn-transition-none border-0 btn-outline-first"
                              variant="outlined"
                            >
                              <span className="btn-wrapper--icon">
                                <FontAwesomeIcon
                                  icon={["far", "eye"]}
                                  className="font-size-lg"
                                />
                              </span>
                            </Button>
                            <Button
                              className="p-0 d-30 mx-1 btn-transition-none border-0 btn-outline-warning"
                              variant="outlined"
                            >
                              <span className="btn-wrapper--icon">
                                <FontAwesomeIcon
                                  icon={["fas", "edit"]}
                                  className="font-size-lg"
                                />
                              </span>
                            </Button>
                            <Button
                              className="p-0 d-30 mx-1 btn-transition-none border-0 btn-outline-danger"
                              variant="outlined"
                            >
                              <span className="btn-wrapper--icon">
                                <FontAwesomeIcon
                                  icon={["fas", "times"]}
                                  className="font-size-lg"
                                />
                              </span>
                            </Button>
                          </div>
                        </div>
                      </Card>
                    </Grid>
                  </Grid>
                  <div className="text-center">
                    <Button variant="text" className="text-first font-size-lg">
                      View All
                    </Button>
                  </div>
                </div>
                <div className="divider opacity-3 rounded-lg m-3" />
              </div>
            </TabPanel>
            {/* <div
              className={clsx("", {
                // className={clsx("tab-item-wrapper", {
                active: activeTab === "2",
              })}
              index={2}
            > */}
            <TabPanel value={value} index={1}>
              <div className="p-4">
                <div className="text-center">
                  <h5 className="text-success font-weight-bold font-size-xxl">
                    Product
                  </h5>
                  <p className="text-black-50 font-size-lg">
                    These are the products that have been successfully added to
                    your profile with their respective Payment Gateway
                  </p>
                </div>
                <Table className="table table-alternate-spaced text-nowrap mb-0">
                  <thead className="bg-white font-size-sm text-uppercase">
                    <tr>
                      <th className="bg-white text-left px-4">Product</th>
                      <th className="bg-white text-center">Date Added</th>
                      <th className="bg-white text-center">
                        No. of Payment gateways
                      </th>

                      <th className="bg-white text-right px-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4">
                        <div className="d-flex align-items-center">
                          <div className="d-40 text-white d-flex align-items-center justify-content-center rounded-pill mr-3 bg-plum-plate">
                            <FontAwesomeIcon
                              icon={["far", "bell"]}
                              className="font-size-xxl"
                            />
                          </div>
                          <div>
                            <div className="font-weight-bold">Fastpayr</div>
                          </div>
                        </div>
                      </td>
                      <td className="text-center">
                        <span>14 October</span>
                      </td>
                      <td className="text-center">
                        <span>2</span>
                      </td>
                      <td className="text-right px-4">
                        <Button
                          className="p-0 d-30 mx-1 btn-transition-none border-0 btn-outline-first"
                          variant="outlined"
                        >
                          <span className="btn-wrapper--icon">
                            <FontAwesomeIcon
                              icon={["far", "eye"]}
                              className="font-size-lg"
                            />
                          </span>
                        </Button>
                        <Button
                          className="p-0 d-30 mx-1 btn-transition-none border-0 btn-outline-warning"
                          variant="outlined"
                        >
                          <span className="btn-wrapper--icon">
                            <FontAwesomeIcon
                              icon={["fas", "edit"]}
                              className="font-size-lg"
                            />
                          </span>
                        </Button>
                        <Button
                          className="p-0 d-30 mx-1 btn-transition-none border-0 btn-outline-danger"
                          variant="outlined"
                        >
                          <span className="btn-wrapper--icon">
                            <FontAwesomeIcon
                              icon={["fas", "times"]}
                              className="font-size-lg"
                            />
                          </span>
                        </Button>
                      </td>
                    </tr>
                    <tr className="divider"></tr>
                    <tr>
                      <td className="px-4">
                        <div className="d-flex align-items-center">
                          <div className="d-40 text-white d-flex align-items-center justify-content-center rounded-pill mr-3 bg-happy-fisher">
                            <FontAwesomeIcon
                              icon={["fas", "cubes"]}
                              className="font-size-xxl"
                            />
                          </div>
                          <div>
                            <div className="font-weight-bold">Card Master</div>
                          </div>
                        </div>
                      </td>
                      <td className="text-center">
                        <span>18 October</span>
                      </td>
                      <td className="text-center">
                        <span>1</span>
                      </td>

                      <td className="text-right px-4">
                        <Button
                          className="p-0 d-30 mx-1 btn-transition-none border-0 btn-outline-first"
                          variant="outlined"
                        >
                          <span className="btn-wrapper--icon">
                            <FontAwesomeIcon
                              icon={["far", "eye"]}
                              className="font-size-lg"
                            />
                          </span>
                        </Button>
                        <Button
                          className="p-0 d-30 mx-1 btn-transition-none border-0 btn-outline-warning"
                          variant="outlined"
                        >
                          <span className="btn-wrapper--icon">
                            <FontAwesomeIcon
                              icon={["fas", "edit"]}
                              className="font-size-lg"
                            />
                          </span>
                        </Button>
                        <Button
                          className="p-0 d-30 mx-1 btn-transition-none border-0 btn-outline-danger"
                          variant="outlined"
                        >
                          <span className="btn-wrapper--icon">
                            <FontAwesomeIcon
                              icon={["fas", "times"]}
                              className="font-size-lg"
                            />
                          </span>
                        </Button>
                      </td>
                    </tr>
                    <tr className="divider"></tr>
                  </tbody>
                </Table>

                {/*    <div className="d-flex mt-4 align-items-center justify-content-center flex-wrap">
                  <Pagination className="pagination-primary" count={10} />
                </div> */}
                <div className="text-center">
                  <Button variant="text" className="text-first font-size-lg">
                    View All
                  </Button>
                </div>
              </div>
            </TabPanel>
            {/* </div> */}
            <hr />

            {/* bottom */}
            <div className="p-5">
              <Grid container spacing={6}>
                <Grid item sm={6} md={6} lg={6} xl={6}>
                  {/* <Grid item md={4} lg={12} xl={4}> */}
                  <Card
                    style={{ maxHeight: "80%" }}
                    className="card-box bg-dark card-box-border-bottom border-primary my-4"
                  >
                    <Grid item sm={12} md={12} lg={12} xl={12}>
                      <div className="p-4">
                        <Grid container spacing={3}>
                          <Grid item sm={12}>
                            <div className="">
                              <div className="font-size-lg text-black-50">
                                Payment Gateways
                              </div>
                              <Card className="border-0 shadow-none my-2 overflow-visible">
                                <div className="card-indicator bg-danger" />
                                <div className="display-3 line-height-1 font-weight-bold ml-3">
                                  3
                                </div>
                              </Card>
                            </div>
                          </Grid>
                          <Grid item sm={12}>
                            <div className="pb-3">
                              <div className="font-size-lg text-black-50">
                                Products
                              </div>
                              <Card className="border-0 shadow-none my-2 overflow-visible">
                                <div className="card-indicator bg-success" />
                                <div className="display-3 line-height-1 font-weight-bold ml-3">
                                  2
                                </div>
                              </Card>
                            </div>
                          </Grid>
                        </Grid>
                      </div>
                    </Grid>
                  </Card>
                </Grid>
                {/* set modal here */}
                <Grid item sm={6} md={6} lg={6} xl={6}>
                  <Card
                    style={{ maxHeight: "100%" }}
                    className="p-5 card-box card-box-border-bottom border-primary my-4"
                  >
                    <div className="px-2 p-2">
                      {/* <Card className="h-100 d-block text-center text-md-left card-box p-4 align-items-center bg-secondary justify-content-between flex-row"> */}
                      <List component="div" className="list-group-flush">
                        <ListItem
                          // component="button"
                          button
                          // href="#/"
                          onClick={(e) => {
                            addPaymentGateway(e);
                            localStorage.setItem("redirect", "/addgateway");
                            // setmodalDetails("gateway");
                          }}
                          className="d-flex justify-content-between align-items-center py-3"
                        >
                          <div className="d-flex align-items-center">
                            <div>
                              <div className="font-weight-bold font-size-sm text-black">
                                Add Payment Gateway
                              </div>
                            </div>
                          </div>
                          <div>
                            <Button
                              size="small"
                              className="btn-neutral-dark btn-pill btn-icon d-30 p-0"
                            >
                              <span className="btn-wrapper--icon">
                                <FontAwesomeIcon icon={["fas", "plus"]} />
                              </span>
                            </Button>
                          </div>
                        </ListItem>
                        <ListItem
                          // component="a"
                          button
                          // href="#/"
                          onClick={(e) => {
                            addProduct(e);
                            localStorage.setItem("redirect", "/addproducts");
                            // localStorage.setItem("pavers", "product");
                            // setmodalDetails("product");
                          }}
                          className="d-flex justify-content-between align-items-center py-3"
                        >
                          <div className="d-flex align-items-center">
                            <div>
                              <div className="font-weight-bold font-size-sm text-black">
                                Add Product
                              </div>
                            </div>
                          </div>
                          <div>
                            <Button
                              size="small"
                              className="btn-neutral-dark btn-pill btn-icon d-30 p-0"
                            >
                              <span className="btn-wrapper--icon">
                                <FontAwesomeIcon icon={["fas", "plus"]} />
                              </span>
                            </Button>
                          </div>
                        </ListItem>
                      </List>
                    </div>
                  </Card>
                  {/* </Card> */}
                </Grid>
              </Grid>
            </div>
          </div>
          <div
            onClick={toggleSidebarMenu}
            className={clsx("sidebar-inner-layout-overlay", {
              active: isSidebarMenuOpen,
            })}
          />
        </div>
      </PerfectScrollbar>
    </>
  );
}

export default LivePreviewExample;
