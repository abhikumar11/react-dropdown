import React, { useState } from "react";
import styles from "./dropdown.module.css";
const Dropdown = ({ data }) => {
     const [displayDropdown, setDisplayDropdown] = useState(false);
     const [dropdownValue, setDropdownValue] = useState("");
     const handleSelect = (e) => {
          const item = e.target.innerHTML;
          if (item !== "...") {
               setDropdownValue(item);
          } else {
               setDropdownValue("");
          }
          setDisplayDropdown(false);
     };
     return (
          <div className={styles.dropdownContainer}>
               <p className={styles.title}>Select a book from list</p>
               <div
                    className={styles.dropdownSwitch}
                    onMouseEnter={() => setDisplayDropdown(true)}
               >
                    <p>{dropdownValue !== "" ? dropdownValue : "Select"}</p>
                    <img
                         src="../arrow.png"
                         alt="arrow"
                         height="50px"
                         width="50px"
                    />
               </div>
               {displayDropdown && (
                    <div className={styles.dropdownList}>
                         <ul>
                              {data.map((item, index) => (
                                   <li
                                        onClick={handleSelect}
                                        value={item}
                                        key={index}
                                   >
                                        {item}
                                   </li>
                              ))}
                         </ul>
                    </div>
               )}
          </div>
     );
};

export default Dropdown;
