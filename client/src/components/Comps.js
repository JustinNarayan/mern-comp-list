/*eslint-disable*/
import React, { Fragment, useEffect, useState } from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import Comp from "./Comp";
import { Table, Nav } from "reactstrap";

const Comps = () => {
   // Set State Variables
   const comps = useStoreState((state) => state.comps);
   const getComps = useStoreActions((actions) => actions.getComps);

   // Implement UseEffect to get comps
   useEffect(() => {
      getComps();
   }, [getComps]);

   // Use CSS
   const navStyle = {
      position: "fixed",
      height: "25%",
      width: "10%"
   }

   // Create Component
   return (
      <Fragment>
         <h1 className="w-75 mx-auto"><i className="mr-1">FIRST</i> Robotics Competition Events</h1>
         <Nav style={navStyle}>
            <Dropdown>
               {{Justin, you're doing the year and event district selects here}}
            </Dropdown>
         </Nav>
         <Table striped className="w-75 mx-auto">
            <thead>
               <tr>
                  <th style={{width: "70%"}}>Event</th>
                  <th style={{width: "30%"}}>Dates</th>
               </tr>
            </thead>
            <tbody>
               {comps.map((comp) => (
                  <Comp comp={comp} key={comp._id} />
               ))}
            </tbody>
         </Table>
      </Fragment>
   );
};

export default Comps;
