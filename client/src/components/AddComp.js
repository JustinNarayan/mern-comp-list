import React, { useState } from "react";
import { useStoreActions } from "easy-peasy";
import {
   Button,
   Modal,
   ModalHeader,
   ModalBody,
   Form,
   FormGroup,
   Label,
   Input,
   InputGroup,
   InputGroupButtonDropdown,
   DropdownToggle,
   DropdownMenu,
   DropdownItem,
   Container,
} from "reactstrap";
import style from "../assets/scss/_custom.scss";

const AddComp = () => {
   // Set state variables
   const [modal, setModal] = useState(false);
   const [name, setName] = useState("");
   const [district, setDistrict] = useState("N/A");
   const [districtDropdown, setDistrictDropdown] = useState(false);
   const [dateStart, setDateStart] = useState(
      new Date().toISOString().slice(0, 10)
   ); //Gets YYYY-MM-DD of today
   const [dateEnd, setDateEnd] = useState(
      new Date().toISOString().slice(0, 10)
   ); //Gets YYYY-MM-DD of today
   const [venue, setVenue] = useState("");
   const [city, setCity] = useState("");
   const [region, setRegion] = useState("");
   const [country, setCountry] = useState("");

   // Bring in addComp command
   const addComp = useStoreActions((actions) => actions.addComp);

   // Define methods
   const toggleModal = () => setModal(!modal);
   const toggleDistrictDropdown = () => setDistrictDropdown(!districtDropdown);
   const resetForm = () => {
      setName('');
      setDistrict('N/A');
      setDateStart(new Date().toISOString().slice(0, 10));
      setDateEnd(new Date().toISOString().slice(0, 10));
      setVenue('');
      setCity('');
      setRegion('');
      setCountry('');
   }

   const onSubmit = (e) => {
      toggleModal();
      e.preventDefault();
      addComp({
         name,
         district,
         dateStart,
         dateEnd,
         venue,
         city,
         region,
         country
      });
      resetForm();
   };

   // Set CSS
   const modalHeaderStyle = {
      color: style.menuText,
      backgroundColor: style.menuPrimary,
      "> h5": {
         color: "green",
         fontSpacing: "20px",
      },
   };
   const formFlexStyle = {
      display: "flex",
      justifyContent: "space-between",
      padding: 0,
   };

   return (
      <div>
         <Button color='menu-primary' onClick={toggleModal}>
            Add A Competition
         </Button>
         <Modal isOpen={modal} toggle={toggleModal} size='md'>
            <ModalHeader style={modalHeaderStyle}>
               Add A Competition
            </ModalHeader>
            <ModalBody>
               <Form onSubmit={onSubmit}>
                  <FormGroup style={formFlexStyle}>
                     <Container className='p-0'>
                        <Label for='inputName' className='mb-1'>
                           Competition Name
                        </Label>
                        <InputGroup>
                           <Input
                              type='text'
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              id='inputName'
                           />
                           <InputGroupButtonDropdown
                              addonType='append'
                              isOpen={districtDropdown}
                              toggle={toggleDistrictDropdown}>
                              <DropdownToggle caret color='menu-primary'>
                                 {district}
                              </DropdownToggle>
                              <DropdownMenu>
                                 <DropdownItem
                                    onClick={() => setDistrict("N/A")}>
                                    No District
                                 </DropdownItem>
                                 <DropdownItem divider />
                                 <DropdownItem
                                    onClick={() => setDistrict("CHS")}>
                                    FIRST Chesapeake
                                 </DropdownItem>
                                 <DropdownItem
                                    onClick={() => setDistrict("FIM")}>
                                    FIRST In Michigan
                                 </DropdownItem>
                                 <DropdownItem
                                    onClick={() => setDistrict("FIT")}>
                                    FIRST In Texas
                                 </DropdownItem>
                                 <DropdownItem
                                    onClick={() => setDistrict("IN")}>
                                    FIRST Indiana Robotics
                                 </DropdownItem>
                                 <DropdownItem
                                    onClick={() => setDistrict("ISR")}>
                                    FIRST Israel
                                 </DropdownItem>
                                 <DropdownItem
                                    onClick={() => setDistrict("FMA")}>
                                    FIRST Mid-Atlantic
                                 </DropdownItem>
                                 <DropdownItem
                                    onClick={() => setDistrict("FNC")}>
                                    FIRST North Carolina
                                 </DropdownItem>
                                 <DropdownItem
                                    onClick={() => setDistrict("NE")}>
                                    New England
                                 </DropdownItem>
                                 <DropdownItem
                                    onClick={() => setDistrict("ONT")}>
                                    Ontario
                                 </DropdownItem>
                                 <DropdownItem
                                    onClick={() => setDistrict("PNW")}>
                                    Pacific Northwest
                                 </DropdownItem>
                                 <DropdownItem
                                    onClick={() => setDistrict("PCH")}>
                                    Peachtree
                                 </DropdownItem>
                              </DropdownMenu>
                           </InputGroupButtonDropdown>
                        </InputGroup>
                     </Container>
                  </FormGroup>
                  <FormGroup style={formFlexStyle}>
                     <Container className='pr-2 pl-0'>
                        <Label for='inputDateStart' className='mb-1'>
                           Start Date
                        </Label>
                        <Input
                           type='date'
                           value={dateStart}
                           onChange={(e) => setDateStart(e.target.value)}
                           id='inputDateStart'
                        />
                     </Container>
                     <Container className='pl-2 pr-0'>
                        <Label for='inputDateEnd' className='mb-1'>
                           End Date
                        </Label>
                        <Input
                           type='date'
                           value={dateEnd}
                           onChange={(e) => setDateEnd(e.target.value)}
                           id='inputDateEnd'
                        />
                     </Container>
                  </FormGroup>
                  <FormGroup style={formFlexStyle}>
                     <Container className='p-0'>
                        <Label for='inputVenue' className='mb-1'>
                           Venue
                        </Label>
                        <Input
                           type='text'
                           value={venue}
                           onChange={(e) => setVenue(e.target.value)}
                           id='inputVenue'
                        />
                     </Container>
                  </FormGroup>
                  <FormGroup style={formFlexStyle}>
                     <Container className='pr-2 pl-0 mb-3'>
                        <Label for='inputCity' className='mb-1'>
                           City
                        </Label>
                        <Input
                           type='text'
                           value={city}
                           onChange={(e) => setCity(e.target.value)}
                           id='inputCity'
                        />
                     </Container>
                     <Container className='pl-2 pr-2'>
                        <Label for='inputRegion' className='mb-1'>
                           Region
                        </Label>
                        <Input
                           type='text'
                           value={region}
                           onChange={(e) => setRegion(e.target.value)}
                           id='inputRegion'
                        />
                     </Container>
                     <Container className='pl-2 pr-0'>
                        <Label for='inputCountry' className='mb-1'>
                           Country
                        </Label>
                        <Input
                           type='text'
                           value={country}
                           onChange={(e) => setCountry(e.target.value)}
                           id='inputCountry'
                        />
                     </Container>
                  </FormGroup>
                  <Button block color='menu-primary' size='lg'>
                     Submit
                  </Button>
               </Form>
            </ModalBody>
         </Modal>
      </div>
   );
};

export default AddComp;
