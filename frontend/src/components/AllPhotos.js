import React  from "react";
import axios from "axios";
import { useState,useEffect } from "react";

const AllPhotos=()=>{
const [data,setData]=useState([]);
useEffect(()=>{
    axios.get('http://localhost:5000/getPhotos').then((res)=>setData(res.data))
    .catch((err)=>console.log(err,"it has an error"));
});


const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/deletePhoto/${id}`)
      .then((res) => {
        // Remove the deleted photo from the data array
        setData(data.filter(photo => photo._id !== id));
      })
      .catch((err) => {
        console.log(err, "error deleting photo");
      });
  };

  const handleAddToFavorites = (id) => {
    axios.patch(`http://localhost:5000/updateFavorite/${id}`)
      .then((res) => {
        // Remove the deleted photo from the data array
        setData(data.filter(photo => photo._id !== id));
      })
      .catch((err) => {
        console.log(err, "error deleting photo");
      });
  };


return(
    <div>
        <h3>Your Photo Collection</h3>
        {
            data.map((singleData)=>{
                const base64String = btoa(
                    String.fromCharCode(...new Uint8Array((singleData.img.data.data)))
                );
                return (
                    <div
                      key={singleData._id}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "20px",
                      }}
                    >
                      <img
                        src={`data:image/png;base64,${base64String}`}
                        alt={`Image ${singleData._id}`}
                        style={{ width: "300px", height: "300px" }}
                      />
                      <div style={{ marginLeft: "10px" }}>
                        <h3 style={{ marginLeft: "30px" }}>Title: {singleData.title}</h3>
                        <h3 style={{ marginLeft: "30px" }}>Location: {singleData.location}</h3>
                        <div>
                          <button className="signupButton"
                            onClick={() => handleDelete(singleData._id)}
                            style={{
                              backgroundColor: "red",
                              color: "white",
                              marginRight: "10px",
                            }}>Delete</button>
                          <button className="signupButton" onClick={() => handleAddToFavorites(singleData._id)}
                          style={{
                            backgroundColor: "skyblue",
                            color: "white",
                            marginRight: "10px",
                          }}
                          >
                            Add to Favorites
                          </button>
                        </div>
                      </div>
                    </div>
                  );
            })
        }
    </div>
)
};

export default AllPhotos;