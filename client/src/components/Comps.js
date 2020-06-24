/*eslint-disable*/
import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useStoreState, useStoreActions } from "easy-peasy";
import Comp from "./Comp";
import AddComp from "./AddComp";
import {
   Container,
   Table,
   Navbar,
   Nav,
   Dropdown,
   ButtonGroup,
   ButtonDropdown,
   DropdownMenu,
   DropdownItem,
   DropdownToggle,
   Button,
} from "reactstrap";
import PropTypes from "prop-types";
import style from "../assets/scss/_custom.scss";

const Comps = ({ district, year }) => {
   // Set State Variables
   const comps = useStoreState((state) => state.comps);
   const getComps = useStoreActions((actions) => actions.getComps);
   const [yearDropdown, setYearDropdown] = useState(false);
   const [districtDropdown, setDistrictDropdown] = useState(false);

   // Implement UseEffect to get comps
   useEffect(() => {
      getComps();
   }, [getComps]);

   // Define methods
   const toggleYearDropdown = () => setYearDropdown(!yearDropdown);
   const toggleDistrictDropdown = () => setDistrictDropdown(!districtDropdown);

   const checkPath = () => {
      if (!Number.isNaN(parseInt(district))) {
         console.log(district);
         year = district;
         district = "";
      }
      if (Number.isNaN(parseInt(year)) || !year) year = "";
      if (!district) district = "";
      district = district.toUpperCase();
   };
   checkPath(); // Run before component renders

   const getDistrict = (tester) => {
      switch (tester || district) {
         case "CHS":
            return "FIRST Chesapeake";
         case "FIM":
            return "FIRST In Michigan";
         case "FIT":
            return "FIRST in Texas";
         case "IN":
            return "FIRST Indiana Robotics";
         case "ISR":
            return "FIRST Israel";
         case "FMA":
            return "FIRST Mid-Atlantic";
         case "FNC":
            return "FIRST North Carolina";
         case "NE":
            return "New England";
         case "ONT":
            return "Ontario";
         case "PNW":
            return "Pacific Northwest";
         case "PCH":
            return "Peachtree";
         default:
            return "";
      }
   };

   const getYear = () => {
      switch (year) {
         case "":
            return new Date().getFullYear();
         default:
            return parseInt(year);
      }
   };

   const filter = (comps, filterDistrict, filterYear) => {
      if (getDistrict() && filterDistrict)
         comps = comps.filter((comp) => comp.district == district);
      if (filterYear)
         comps = comps.filter(
            (comp) => parseInt(comp.dateEnd.slice(0, 4)) == getYear()
         );
      return comps;
   };

   // Use CSS
   const navStyle = {
      // position: "absolute",
      // left: "0",
      // top: "-20px",
      // padding: ".5em",
      // height: "25%",
      // width: "100%",
   };

   const buttonDropdownStyle = {
      minWidth: "120px",
   };

   const dropdownToggleStyle = {
      backgroundColor: style.menuPrimary,
      color: style.menuText,
      border: "0",
   };

   // Create Component
   return (
      <Container fluid style={{ display: "flex" }} className='p-0'>
         <div className='sidebar-sticky'>
            <ButtonGroup vertical>
               <ButtonDropdown
                  className='w-100'
                  style={buttonDropdownStyle}
                  isOpen={yearDropdown}
                  toggle={toggleYearDropdown}>
                  <DropdownToggle
                     style={{
                        ...dropdownToggleStyle,
                        borderBottom: `1px solid ${style.menuText}`,
                     }}
                     caret
                     className='px-4 py-2'>
                     {year}
                  </DropdownToggle>
                  <DropdownMenu>
                     {Array.from(
                        new Set(
                           comps.map((comp) =>
                              parseInt(comp.dateEnd.slice(0, 4))
                           )
                        )
                     )
                        .sort((a, b) => a.year > b.year)
                        .map((newYear) => (
                           <Link
                              to={`/?district=${district}&year=${newYear}`}
                              key={newYear}>
                              <DropdownItem>{newYear}</DropdownItem>
                           </Link>
                        ))}
                  </DropdownMenu>
               </ButtonDropdown>
               <ButtonDropdown
                  className='w-100'
                  style={buttonDropdownStyle}
                  isOpen={districtDropdown}
                  toggle={toggleDistrictDropdown}>
                  <DropdownToggle
                     style={{
                        ...dropdownToggleStyle,
                        borderTop: `1px solid ${style.menuText}`,
                     }}
                     caret
                     className='px-4 py-2'>
                     {getDistrict() || "All Events"}
                  </DropdownToggle>
                  <DropdownMenu>
                     {Array.from(new Set(comps.map((comp) => comp.district)))
                        .filter((district) => district !== "N/A")
                        .sort((a, b) => a.district < b.district)
                        .map((newDistrict) => (
                           <Link
                              to={`/?district=${newDistrict}&year=${year}`}
                              key={newDistrict}>
                              <DropdownItem>
                                 {getDistrict(newDistrict)}
                              </DropdownItem>
                           </Link>
                        ))}
                  </DropdownMenu>
               </ButtonDropdown>
            </ButtonGroup>
            <AddComp />
         </div>
         <div className='w-100'>
            <h1>
               <i className='mr-1'>FIRST</i> Robotics Competition Events
            </h1>
            <Table striped>
               <thead>
                  <tr>
                     <th>Event</th>
                     <th>Dates</th>
                  </tr>
               </thead>
               <tbody>
                  {filter(comps, true, true).map((comp) => (
                     <Comp comp={comp} key={comp._id} />
                  ))}
               </tbody>
            </Table>
         </div>
      </Container>
   );
};

Comps.propTypes = {
   district: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number, // Value gets sent to year and this is erased
   ]),
   district: PropTypes.oneOfType([
      PropTypes.string, // Value gets erased
      PropTypes.number,
   ]),
};

export default Comps;
