import { React } from "react";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddMovie = () => {

    let [state, setState] = useState({
        title: "",
        image: "",
        type: "",
        date: "",
        actor: "",
        director: "",
        rating: "",
        budget: "",
        desc: "",
    });

    const getInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setState({
            ...state, [name]: value,
        })
    }

    const submitData = (e) => {
        e.preventDefault();
        console.log(state);
        fetch("http://localhost:3002/movies", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(state)
        }).then(async (res) => {
            let record = await res.json();
            if (record) {
                toast("Record Added Successfully.." , {
                    position: toast.POSITION.TOP_RIGHT
                  });
                setState({
                    title: "",
                    image: "",
                    type: "",
                    date: "",
                    actor: "",
                    director: "",
                    rating: "",
                    budget: "",
                    desc: "",
                });
            }
        })
    }

    return (
        <>
            {/* add movie details.. */}

            <div className="container py">
                <h2 className="text-center fw-bold py-5">Add Movie Details</h2>
                <div className="d-flex justify-content-center">
                    <form className="w-50" method="post" onSubmit={(e) => submitData(e)}>
                        <div className="row">
                            <div className="col">
                                <label className="ms-3"><b>Movie Title</b></label>
                                <input type="text" name="title" value={state.title} className="form-control rounded-pill p-3 mt-2" placeholder="enter movie title" onChange={(e) => getInput(e)} />
                            </div>
                            <div className="col">
                                <label className="ms-3"><b>Movie Poster</b></label>
                                <input type="text" name="image" value={state.image} className="form-control rounded-pill p-3 mt-2" placeholder="enter movie path" onChange={(e) => getInput(e)} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <label className="ms-3 mt-4"><b>Movie Type</b></label>
                                <select className="form-select rounded-pill p-3 mt-2" name="type" value={state.type} aria-label="Default select example" onChange={(e) => getInput(e)}>
                                    <option selected>select type</option>
                                    <option value="action">Action</option>
                                    <option value="mystery">Mystery</option>
                                    <option value="thriller">Thriller</option>
                                    <option value="drama">Drama</option>
                                </select>
                            </div>
                            <div className="col">
                                <label className="ms-3 mt-4"><b>Release Date</b></label>
                                <input type="date" name="date" value={state.date} className="form-control rounded-pill p-3 mt-2" placeholder="select release date" onChange={(e) => getInput(e)} />
                            </div>
                        </div>
                        {/* <div>
          <label class="ms-3 mt-4"><b>Select Movie Type</b></label>
          <div class="d-flex">
              <div class="py-3 ms-3">
                  <input type="radio" id="html" name="html" value="Released">
                  <label class="me-4" for="release">Released</label>
              </div>
              <div class="py-3">
                  <input type="radio" id="css" name="css" value="Coming Soon">
                  <label for="coming">Coming Soon</label>
              </div>
          </div>
      </div> */}
                        <div className="row">
                            <div className="col">
                                <label className="ms-3 mt-4"><b>Movie Actors</b></label>
                                <input type="text" name="actor" value={state.actor} className="form-control rounded-pill p-3 mt-2" placeholder="enter actors" onChange={(e) => getInput(e)} />
                            </div>
                            <div className="col">
                                <label className="ms-3 mt-4"><b>Movie Director</b></label>
                                <input type="text" name="director" value={state.director} className="form-control rounded-pill p-3 mt-2" placeholder="enter director   " onChange={(e) => getInput(e)} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <label className="ms-3 mt-4"><b>Movie Rating</b></label>
                                <select className="form-select rounded-pill p-3 mt-2" name="rating" value={state.rating} aria-label="Default select example" onChange={(e) => getInput(e)}>
                                    <option selected>--select--</option>
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                    <option value={5}>5</option>
                                    <option value={6}>6</option>
                                    <option value={7}>7</option>
                                    <option value={8}>8</option>
                                    <option value={9}>9</option>
                                    <option value={10}>10</option>
                                </select>
                            </div>
                            <div className="col">
                                <label className="ms-3 mt-4"><b>Movie Budget</b></label>
                                <input type="digit" name="budget" value={state.budget} className="form-control rounded-pill p-3 mt-2" placeholder="enter movie budget" onChange={(e) => getInput(e)} />
                            </div>
                        </div>
                        <div className="col">
                            <label className="ms-3 mt-4" htmlFor="floatingTextarea"><b>Movie Plot</b></label>
                            <textarea className="form-control rounded-pill p-3 mt-2" name="desc" value={state.desc} placeholder="movie description" id="floatingTextarea" rows={3} defaultValue={""} onChange={(e) => getInput(e)} />
                        </div>
                        <div className="text-center my-4">
                            <button className="btn btn-dark w-100 rounded-pill p-3 fw-semibold">Add Record + </button>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default AddMovie;