// import React from 'react';
// import { Link } from 'react-router-dom';
// import './DrawerMenu.css';

// interface DrawerMenuProps {
//     isOpen: boolean;
//     onClose: () => void;
// }

// const CustomDrawerMenu: React.FC<DrawerMenuProps> = ({ isOpen, onClose }) => {
//     const menuClass = isOpen ? 'drawer-menu open' : 'drawer-menu';

//     return (
//         <div className={menuClass}>
//             <ul>
//                 <li>
//                     <Link to="/" onClick={onClose}>
//                         Home
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="/about" onClick={onClose}>
//                         About
//                     </Link>
//                 </li>

//             </ul>
//             <button onClick={onClose}>Fechar Menu</button>
//         </div>
//     );
// };

// export default CustomDrawerMenu;
