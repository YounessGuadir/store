import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { AddMarcher } from "./Slice/MarcherCardSlice";

export default function MarcherParams() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const user = useSelector((state) =>state.Marcher.find((u) => u.id === parseInt(id))
  );

  return (
    <div className="container py-5">
      <div className="row py-5">
        {user && (
          <>
            <div className="col-md-6">
              <img
                src={user.image}
                alt={user.title}
                height={"400px"}
                width={"400px"}
              />
            </div>
            <div className="col-md-6">
              <h4 className="text-uppercase text-black-50">{user.category}</h4>
              <h1 className="display-5">{user.title.substring(0,30)}</h1>
              <i className="fa fa-star"></i>
              <h3 className="display-6 fw-bold my-4">$ {user.price}</h3>
              <p className="lead">{user.description}</p>

              <button className=" btn btn-outline-dark"
                onClick={() => dispatch(AddMarcher(user))}
                
              >
                Add to Card
              </button>
              <Link to={"/marcher"}>
                <button className="m-3 btn btn-dark">Go to card </button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
