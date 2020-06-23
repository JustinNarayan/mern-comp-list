import React from "react";
import { Container } from "reactstrap";
import style from "../assets/scss/_custom.scss";

const Comp = ({ comp }) => {
   // Define methods
   const convertDate = (date) => {
      date = new Date(date);
      let month,
         day = date.getDate();
      switch (date.getMonth() + 1) {
         case 1:
            month = "Jan";
            break;
         case 2:
            month = "Feb";
            break;
         case 3:
            month = "Mar";
            break;
         case 4:
            month = "Apr";
            break;
         case 5:
            month = "May";
            break;
         case 6:
            month = "Jun";
            break;
         case 7:
            month = "Jul";
            break;
         case 8:
            month = "Aug";
            break;
         case 9:
            month = "Sep";
            break;
         case 10:
            month = "Oct";
            break;
         case 11:
            month = "Nov";
            break;
         default:
            month = "Dec";
            break;
      }
      switch (date.getDate() % 10) {
         case 1:
            day += "st";
            break;
         case 2:
            day += "nd";
            break;
         case 3:
            day += "rd";
            break;
         default:
            day += "th";
            break;
      }

      return `${month} ${day}`;
   };

   // Set CSS
   const compHeaderStyle = {
      color: style.menuPrimary,
      fontWeight: "500",
   };
   const compTextStyle = {
      fontSize: "14px",
      display: "inline-block",
   };

   // Create Component
   return (
      <tr>
         <td className='px-0 align-middle'>
            <Container>
               <span style={compHeaderStyle}>
                  {comp.district === "N/A" ? "" : comp.district} {comp.name}
               </span>
               <br />
               <span style={compTextStyle}>
                  {comp.city}
                  {(comp.city && comp.region) || (comp.city && comp.country) ? ", " : ""}
                  {comp.region}
                  {comp.region && comp.country ? ", " : ""}
                  {comp.country}
               </span>
            </Container>
         </td>
         <td className='px-0 align-middle'>
            <Container>
               {convertDate(comp.dateStart)} to {convertDate(comp.dateEnd)},{" "}
               {new Date(comp.dateEnd).getFullYear()}
            </Container>
         </td>
      </tr>
   );
};

export default Comp;
