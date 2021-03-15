// import React from "react";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   Table,
//   LinearProgress,
//   Card,
//   CardContent,
//   Button,
//   Tooltip,
// } from "@material-ui/core";

// // import avatar4 from '../../../assets/images/avatars/avatar4.jpg';
// // import avatar5 from '../../../assets/images/avatars/avatar5.jpg';
// // import avatar6 from '../../../assets/images/avatars/avatar6.jpg';
// // import avatar7 from '../../../assets/images/avatars/avatar7.jpg';

// export default function LivePreviewExample() {
//   return (
//     <>
//       <Card className="card-box mb-spacing-6-x2">
//         <div className="card-header pr-2">
//           <div className="card-header--title">Employees status</div>
//           <div className="card-header--actions">
//             <Tooltip title="Refresh">
//               <Button size="small" className="btn-neutral-primary">
//                 <FontAwesomeIcon icon={["fas", "cog"]} spin />
//               </Button>
//             </Tooltip>
//           </div>
//         </div>
//         <CardContent>
//           <div className="table-responsive-md">
//             <Table className="table table-borderless table-hover text-nowrap mb-0">
//               <thead>
//                 <tr>
//                   <th>No.</th>
//                   <th className="text-left">Product</th>
//                   <th className="text-center">Status</th>
//                   <th className="text-center">Date Added</th>
//                   <th className="text-center">No. of Payment gateways</th>
//                   <th className="text-center">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td>1</td>
//                   <td>
//                     <div className="d-flex align-items-center">
//                       <div className="avatar-icon-wrapper mr-3">
//                         <div className="d-40 text-white d-flex align-items-center justify-content-center rounded-pill mr-3 bg-plum-plate">
//                           <FontAwesomeIcon
//                             icon={["far", "bell"]}
//                             className="font-size-xxl"
//                           />
//                         </div>
//                         {/* <div className="avatar-icon">
//                           <img alt="..." src={avatar7} />
//                         </div> */}
//                       </div>
//                       <div>
//                         <a
//                           href="#/"
//                           onClick={(e) => e.preventDefault()}
//                           className="font-weight-bold text-black"
//                           title="..."
//                         >
//                           Fastpayr
//                         </a>
//                         {/* <span className="text-black-50 d-block">
//                           UI Engineer, Apple Inc.
//                         </span> */}
//                       </div>
//                     </div>
//                   </td>
//                   <td className="text-center">
//                     <div className="badge badge-neutral-warning text-warning px-4">
//                       Pending
//                     </div>
//                   </td>
//                   <td>
//                     {/* <LinearProgress
//                       variant="determinate"
//                       value={55}
//                       className="progress-bar-rounded progress-bar-info"
//                     /> */}
//                     14 October
//                   </td>
//                   <td>2</td>

//                   <td className="text-center">
//                     <Button
//                       size="small"
//                       className="btn-neutral-dark hover-scale-sm d-40 p-0 btn-icon"
//                     >
//                       <FontAwesomeIcon icon={["fas", "arrow-right"]} />
//                     </Button>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>12</td>
//                   <td>
//                     <div className="d-flex align-items-center">
//                       <div className="avatar-icon-wrapper mr-3">
//                         <div className="avatar-icon">
//                           {/* <img alt="..." src={avatar4} /> */}
//                         </div>
//                       </div>
//                       <div>
//                         <a
//                           href="#/"
//                           onClick={(e) => e.preventDefault()}
//                           className="font-weight-bold text-black"
//                           title="..."
//                         >
//                           Shanelle Wynn
//                         </a>
//                         <span className="text-black-50 d-block">
//                           UI Engineer, Apple Inc.
//                         </span>
//                       </div>
//                     </div>
//                   </td>
//                   <td className="text-center">
//                     <div className="badge badge-neutral-warning text-warning px-4">
//                       Pending
//                     </div>
//                   </td>
//                   <td>
//                     <LinearProgress
//                       variant="determinate"
//                       value={55}
//                       className="progress-bar-rounded progress-bar-info"
//                     />
//                   </td>
//                   <td>Note</td>

//                   <td className="text-center">
//                     <Button
//                       size="small"
//                       className="btn-neutral-dark hover-scale-sm d-40 p-0 btn-icon"
//                     >
//                       <FontAwesomeIcon icon={["fas", "arrow-right"]} />
//                     </Button>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>12</td>
//                   <td>
//                     <div className="d-flex align-items-center">
//                       <div className="avatar-icon-wrapper mr-3">
//                         <div className="avatar-icon">
//                           {/* <img alt="..." src={avatar5} /> */}
//                         </div>
//                       </div>
//                       <div>
//                         <a
//                           href="#/"
//                           onClick={(e) => e.preventDefault()}
//                           className="font-weight-bold text-black"
//                           title="..."
//                         >
//                           Regan Norris
//                         </a>
//                         <span className="text-black-50 d-block">
//                           Senior Project Manager
//                         </span>
//                       </div>
//                     </div>
//                   </td>
//                   <td className="text-center">
//                     <div className="badge badge-neutral-danger text-danger px-4">
//                       Failed
//                     </div>
//                   </td>
//                   <td>
//                     <LinearProgress
//                       variant="determinate"
//                       value={67}
//                       className="progress-bar-danger progress-bar-rounded"
//                     />
//                   </td>
//                   <td>Note</td>
//                   <td className="text-center">
//                     <Button
//                       size="small"
//                       className="btn-neutral-dark hover-scale-sm d-40 p-0 btn-icon"
//                     >
//                       <FontAwesomeIcon icon={["fas", "arrow-right"]} />
//                     </Button>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>33</td>
//                   <td>
//                     <div className="d-flex align-items-center">
//                       <div className="avatar-icon-wrapper mr-3">
//                         <div className="avatar-icon">
//                           {/* <img alt="..." src={avatar6} /> */}
//                         </div>
//                       </div>
//                       <div>
//                         <a
//                           href="#/"
//                           onClick={(e) => e.preventDefault()}
//                           className="font-weight-bold text-black"
//                           title="..."
//                         >
//                           Beck Simpson
//                         </a>
//                         <span className="text-black-50 d-block">
//                           Frontend Developer
//                         </span>
//                       </div>
//                     </div>
//                   </td>
//                   <td className="text-center">
//                     <div className="badge badge-neutral-success text-success px-4">
//                       Completed
//                     </div>
//                   </td>
//                   <td>
//                     <LinearProgress
//                       variant="determinate"
//                       value={39}
//                       className="progress-bar-dark progress-bar-rounded"
//                     />
//                   </td>
//                   <td>Note</td>

//                   <td className="text-center">
//                     <Button
//                       size="small"
//                       className="btn-neutral-dark hover-scale-sm d-40 p-0 btn-icon"
//                     >
//                       <FontAwesomeIcon icon={["fas", "arrow-right"]} />
//                     </Button>
//                   </td>
//                 </tr>
//               </tbody>
//             </Table>
//           </div>
//         </CardContent>
//         <div className="card-footer d-flex justify-content-between">
//           <Button variant="text" className="btn-outline-danger" size="small">
//             Delete
//           </Button>
//           <div>
//             <Button size="small" color="primary" variant="contained">
//               Add new entry
//             </Button>
//           </div>
//         </div>
//       </Card>
//     </>
//   );
// }

import React, { useState } from "react";
// import paystack from "../../assets/images/paystack.jpg";
// import flutterwave from "../../assets/images/flutterwave.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Table,
  LinearProgress,
  Card,
  CardContent,
  Button,
  Tooltip,
} from "@material-ui/core";

const dataArray = [
  {
    product: {
      name: "Paystack",
      // src: `${paystack}`,
      src: (
        <div className="d-40 text-white d-flex align-items-center justify-content-center rounded-pill mr-3 bg-plum-plate">
          <FontAwesomeIcon icon={["far", "bell"]} className="font-size-xxl" />
        </div>
      ),
    },
    dateAdded: "14 October 2015",
    paymentGateways: 2,
    // Actions: {
    //   firstIcon: (
    //     <span className="btn-wrapper--icon">
    //       <FontAwesomeIcon icon={["far", "eye"]} className="font-size-lg" />
    //     </span>
    //   ),
    //   secondIcon: (
    //     <span className="btn-wrapper--icon">
    //       <FontAwesomeIcon icon={["far", "eye"]} className="font-size-lg" />
    //     </span>
    //   ),
    // },
  },
  {
    product: {
      name: "Paystack",
      // src: `${paystack}`,
      src: (
        <div className="d-40 text-white d-flex align-items-center justify-content-center rounded-pill mr-3 bg-plum-plate">
          <FontAwesomeIcon icon={["far", "bell"]} className="font-size-xxl" />
        </div>
      ),
    },
    dateAdded: "14 October 2015",
    paymentGateways: 2,
    // Actions: {
    //   firstIcon: (
    //     <span className="btn-wrapper--icon">
    //       <FontAwesomeIcon icon={["far", "eye"]} className="font-size-lg" />
    //     </span>
    //   ),
    //   secondIcon: (
    //     <span className="btn-wrapper--icon">
    //       <FontAwesomeIcon icon={["far", "eye"]} className="font-size-lg" />
    //     </span>
    //   ),
    // },
  },
];

const index = (props) => {
  return (
    <div>
      <Card className="card-box mb-spacing-6-x2">
        <div className="card-header pr-2">
          <div className="card-header--title">Employees status</div>
          <div className="card-header--actions">
            <Tooltip title="Refresh">
              <Button size="small" className="btn-neutral-primary">
                <FontAwesomeIcon icon={["fas", "cog"]} spin />
              </Button>
            </Tooltip>
          </div>
        </div>
        <CardContent>
          <div className="table-responsive-md">
            <Table className="table table-borderless table-hover text-nowrap mb-0">
              <thead>
                <tr>
                  <th>No.</th>
                  <th className="text-left">Product</th>
                  <th className="text-center">Status</th>
                  <th className="text-center">Date Added</th>
                  <th className="text-center">No. of Payment gateways</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>
              {dataArray.map((all, index) => (
                <tbody key={index}>
                  <tr>
                    <td>{index + 1}</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="avatar-icon-wrapper mr-3">
                          {all.product.src}
                        </div>
                        <div>
                          <a
                            href="#/"
                            onClick={(e) => e.preventDefault()}
                            className="font-weight-bold text-black"
                            title="..."
                          >
                            {all.product.name}
                          </a>
                        </div>
                      </div>
                    </td>
                    <td className="text-center">
                      <div className="badge badge-neutral-warning text-warning px-4">
                        Pending
                      </div>
                    </td>
                    <td className="text-center">
                      <div>{all.dateAdded}</div>
                    </td>
                    <td className="text-center">
                      <div>{all.paymentGateways}</div>
                    </td>
                    <td className="table-text text-center">
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
                </tbody>
              ))}
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default index;
