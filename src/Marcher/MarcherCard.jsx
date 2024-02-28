import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteMarcher, resetMarcher } from "./Slice/MarcherCardSlice";

export default function MarcherCard() {
  const dispatch = useDispatch();
  const CardMarcher = useSelector((data) => data.MarcherCard);
  const totalPrice = CardMarcher.reduce((total, Card) => {
    total += Card.price * Card.quantity;
    return total;
  }, 0);

  return (
    <div className="container my-5  w-75  shadow p-3 mb-5 bg-body rounded text-center">
    
      {CardMarcher.length > 0 ? (

        <div className="my-5" >
          <button onClick={()=>dispatch(resetMarcher())} className="btn btn-dark">reset</button>
          <h1 className="text text-secondary">
            Total: {totalPrice.toFixed(2)} $
          </h1>
          <table className="table table-striped table-hover table-responsive">
            <thead className="thead-inverse">
              <tr>
                <th>id</th>
                <th>title</th>
                <th>category</th>
                <th>Image</th>
                <th>Quantity</th>
                <th>price</th>
                <th>action </th>
              </tr>
            </thead>
            <tbody>
              {CardMarcher.map((p, key) => (
                <tr key={key}>
                  <td>{p.id}</td>
                  <td>{p.title}</td>
                  <td>{p.category}</td>
                  <td>
                    <img
                      src={p.image}
                      alt="Block Note"
                      style={{ width: "100px", height: "100px" }}
                    />
                  </td>
                  <td>{p.quantity}</td>
                  <td>{p.price} $</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => dispatch(deleteMarcher(p))}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    :
  
      <div className="text text-center my-5 bg-light p-5"><h1 className="my-5" >not items</h1></div> 
      
      }

    </div>
  );
}
