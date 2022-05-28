
import React from 'react';
import { Link } from 'react-router-dom';

const PurchaseRow = ({item}) => {
    const{Name,email,qurantity,phone,price,paid,_id}=item
    return (
            <tr>
        <th></th>
        <td>{Name}</td>
        <td>{email}</td>
        <td>{qurantity}</td>
        <td>{phone}</td>
        <td>{(price && !paid) && <Link to={`/dashboard/payment/${_id}`}><button className="btn btn-primary">Pay</button></Link>}</td>
        <td>{(price && paid) && <button className="btn btn-warning">Paid</button>}</td>
        
      </tr>
       
    );
};

export default PurchaseRow;