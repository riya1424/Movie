import { React } from "react";
import { useEffect, useState } from "react";
// import {useParams} from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, Link } from "react-router-dom";

const ViewAll = () => {

    let [view, setView] = useState([]);

    let [search, setSearch] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:3002/movies", {
            method: "get",
            headers: { "Content-type": "application/json" },
        }).then(async (res) => {
            let record = await res.json();
            if (record) {
                toast("viewing all records..")
                setView(record);
            }
            else {
                toast("not getting..")
            }
        }).catch((err) => {
            console.log(err);
        })
    }, [setView])

    const singleMovie = () => {
        navigate("/single_movie/");
    }

    const mystyle = {
        "border" : "none",
        "padding": "10px 15px",
        "borderRadius": "30px",
        "width": "500px",
        "margin" : "20px 0",
    };

    return (
        <>

            {/* view all movies.. */}
            <section className="container py">
                <form>
                    <input className="bg-light text-dark shadow p-3" type="search" placeholder="search here" onChange={(e) => setSearch(e.target.value)} style={mystyle} />
                </form>
                <div className="row justify-content-center align-items-center">
                    {view && view.filter((value,index)=>{
                        if(search == ""){
                            return value;
                        }
                        else if(value.title.includes(search)){
                            return value;
                        }
                    }).map((value, index) => {
                        return (
                            <div className="movie-list col-lg-3 py-5">
                                <img src={value.image} width="250px" height="350px" />
                                <div className="py-3">
                                    <h5 className="fw-semibold">{value.title}</h5>
                                    <small style={{ color: '#717171' }}>{value.type}</small>
                                </div>
                                    <Link to={"/single_movie/" + index}>
                                            <button onClick={singleMovie} className="btn">See More..</button>
                                    </Link>

                            </div>
                        )
                    }
                    )}

                </div>
            </section>
            <ToastContainer />
        </>
    )
}

export default ViewAll;