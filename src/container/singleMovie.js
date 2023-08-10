import { React } from "react";
import { useParams , useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react";


const SingleMovie = () => {

    let params = useParams();
    let navigate = useNavigate();
    let [single, setSingle] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3002/movies", {
            method: "get",
            headers: { "Content-type": "application/json" },
        }).then(async (res) => {
            let record = await res.json();
            if (record) {
                toast("viewing all records..")
                setSingle(record);
            }
            else {
                toast("not getting..")
            }
        }).catch((err) => {
            console.log(err);
        })
    }, [setSingle])

    const backToviewList = () => {
        navigate("/view_all");
    }


    return (
        <>
            <h2>Single Movie Details</h2>
            <div className="container py">
                {single && single.map((value, index) => {
                    if (index == params.index) {
                        return (
                            <div className="movie-list col-lg-12">
                                <div className="d-flex justify-content-center align-items-center text-start">
                                    <div className="col-lg-4 mx-5">
                                        <img src={value.image} width="400px" height="600px" />
                                    </div>
                                    <div className="py-3 col-lg-8" width="500px">
                                        <h1 className="fw-bolder" style={{"fontSize" : "50px"}}>{value.title}</h1>
                                        <p className="fs-6" style={{"lineHeight" : "30px"}}>{value.desc}</p>
                                        <div className="d-flex">
                                            <p>{value.type}</p>
                                            <p className="mx-3 fw-semibold">{value.date}</p>
                                        </div>
                                        <p><b>Actors : </b>{value.actor}</p>
                                        <p><b>Director :</b> {value.director}</p>
                                        <h5><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star me-3"></i><b>{value.rating}/10</b></h5>
                                        <p className="my-3"><b>{value.budget}</b></p>
                                        <p><b>Status : </b>Released</p>
                                <button onClick={backToviewList} className="btn btn my-3">Back to View List<i class="fa-solid fa-right-long mx-2"></i></button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                })}
            </div>
            <ToastContainer />
        </>
    )
}

export default SingleMovie;