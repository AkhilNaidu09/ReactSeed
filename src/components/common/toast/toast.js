import React from 'react';
import './toast.css'
 export const Toast = ({errorMessage}) =>
     <div className="tostify mx-auto">
         <span>{errorMessage}</span>
     </div>

export default Toast;