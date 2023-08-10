import { React, useEffect, useState  } from "react";
import {useNavigate} from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {

    let [movie, setMovie] = useState([]);
    let navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:3002/movies", {
            method: "get",
            headers: { "Content-type": "application/json" },
        }).then(async (res) => {
            let record = await res.json();
            if (record) {
                toast("getting records..")
                setMovie(record);
            }
            else {
                toast("not getting..")
            }
        }).catch((err) => {
            console.log(err);
        })
    }, [setMovie]);

    const viewAllMovies = () => {
        navigate('/view_all');
    }

    
    return (
        <>
            {/* <!-- banner --> */}

            <div>
                <section className="banner wow animate__animated animate__backInDown">
                    <div className="b-content">
                        <h1 style={{ fontSize: 70 }}>GREEN BOOK</h1>
                        <p className="py-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab doloremque commodi et
                            quibusdam, asperiores voluptates ipsam quisquam! Similique corrupti excepturi velit provident vel
                            tenetur suscipit consequuntur. In explicabo assumenda dolor labore dolorum consequatur corporis mollitia
                            aliquid facilis, reiciendis, ipsa laudantium rem amet sapiente animi distinctio repellendus aspernatur
                            laborum eligendi praesentium voluptatem? Ullam esse culpa sunt, distinctio voluptatem quod quisquam
                            earum aliquid, similique alias nulla nostrum ut dolor debitis, corrupti ab vitae nam maiores modi
                            praesentium dolorum explicabo excepturi iste aliquam. Aliquam architecto quam repellat sint alias
                            beatae, eligendi magni in facilis hic mollitia, doloremque maiores asperiores id numquam odio eos.</p>
                        <button className="b-btn rounded-2 fw-semibold">Get Tickets  &gt;&gt;</button>
                    </div>
                </section>

                {/* movie list  */}

                <section className="container py">
                    <h4 className="text-center fw-bold py-5">Now showing</h4>
                    <div className="d-flex justify-content-center align-items-center">
                        {/* img-1 path : https://demo.gloriathemes.com/noxe/demo/wp-content/uploads/2020/02/title-poster-12-600x885.jpg */}
                        {/* img-2 path : https://demo.gloriathemes.com/noxe/demo/wp-content/uploads/2020/02/title-poster-11-600x885.jpg */}
                        {/* img-3 path : https://demo.gloriathemes.com/noxe/demo/wp-content/uploads/2020/02/title-poster-10-600x885.jpg */}
                        {/* img - 4 path : https://demo.gloriathemes.com/noxe/demo/wp-content/uploads/2020/02/title-poster-9-600x885.jpg */}
                        {/* img -5 path : https://demo.gloriathemes.com/noxe/demo/wp-content/uploads/2020/02/title-poster-8-600x885.jpg */}
                        {/* img - 6 path : https://demo.gloriathemes.com/noxe/demo/wp-content/uploads/2020/02/title-poster-2-600x885.jpg */}
                        {/* img - 7 path : https://demo.gloriathemes.com/noxe/demo/wp-content/uploads/2020/03/title-poster-17-600x885.jpg */}
                        {/* img - 8 path : https://demo.gloriathemes.com/noxe/demo/wp-content/uploads/2020/03/title-poster-16-600x885.jpg */}
                        {/* img - 9 path : https://demo.gloriathemes.com/noxe/demo/wp-content/uploads/2020/03/title-poster-15-600x885.jpg */}
                        {/* img - 10 path : https://demo.gloriathemes.com/noxe/demo/wp-content/uploads/2020/03/title-poster-14-600x885.jpg */}
                        {movie && movie.map((value, index) => {
                            return(index < 4) ? (
                                <div className="movie-list col-lg-3">
                                    <img src={value.image} width="250px" height="350px" />
                                    <div className="py-3">
                                        <h5 className="fw-semibold">{value.title}</h5>
                                        <small style={{ color: '#717171' }}>{value.type}</small>
                                    </div>
                                </div>
                            ):null}
                        )}
                    </div>
                    <div className="text-center py-4">
                        <button className="btn btn-dark rounded-2 fw-semibold" onClick={()=>viewAllMovies()}>View All Movies &gt;&gt;</button>
                    </div>
                </section>
            </div>
            <ToastContainer />
        </>
    )
}

export default Home;