import { Fade } from "reactstrap";


function SuppliesContainer(props) {

    const brushProducts = props.brushes.map(brush => {
        return (
            <div>

                <div className="row row-content">
                    <div className="col-sm contentImg">
                        <img className="img-fluid suppliesImg expandable"
                            src={brush.img}
                            alt={brush.alt} />
                    </div>

                    <div className="col-sm my-auto text-center text-sm-left" >
                        <h2>{brush.name}</h2>
                        <p>{brush.price}</p>
                        <p>{brush.description}</p>
                        <button className="btn ml-auto" id="btnnn">Add to Cart</button>
                    </div>
                </div>

            </div>
        );
    });



    const paintProducts = props.paints.map(paint => {
        return (
            <div>

                <div className="row row-content">
                    <div className="col-sm contentImg">
                        <img className="img-fluid suppliesImg expandable"
                            src={paint.img}
                            alt={paint.alt} />
                    </div>

                    <div className="col-sm my-auto text-center text-sm-left" >
                        <h2>{paint.name}</h2>
                        <p>{paint.price}</p>
                        <p>{paint.description}</p>
                        <button className="btn ml-auto" id="btnnn">Add to Cart</button>
                    </div>
                </div>

            </div>
        );
    });




    const canvasProducts = props.canvas.map(canvas => {
        return (
            <div>

                <div class="row row-content">
                    <div className="col-sm contentImg">
                        <img className="img-fluid suppliesImg expandable"
                            src={canvas.img}
                            alt={canvas.alt} />
                    </div>

                    <div className="col-sm my-auto text-center text-sm-left" >
                        <h2>{canvas.name}</h2>
                        <p>{canvas.price}</p>
                        <p>{canvas.description}</p>
                        <button className="btn ml-auto" id="btnnn">Add to Cart</button>
                    </div>
                </div>

            </div>
        );
    });


    const easelProducts = props.easels.map(easel => {
        return (
            <div>

                <div className="row row-content">
                    <div className="col-sm contentImg">
                        <img className="img-fluid suppliesImg expandable"
                            src={easel.img}
                            alt={easel.alt} />
                    </div>

                    <div className="col-sm my-auto text-center text-sm-left" >
                        <h2>{easel.name}</h2>
                        <p>{easel.price}</p>
                        <p>{easel.description}</p>
                        <button className="btn ml-auto" id="btnnn">Add to Cart</button>
                    </div>
                </div>

            </div>
        );
    });


    return (
        <div>
            <div className="container">
                <Fade in>
                <nav className="navbar navbar-expand navbar-light nav-aligned nav-justified sticky-top" id="suppliesNav">
                    <div className="navbar-nav mx-auto w-100">
                        <div className="nav-item my-auto">
                            <a className="nav-link" href="#brushes">Brushes</a>
                        </div>
                        <div className="nav-item my-auto">
                            <a className="nav-link" href="#paints">Paint</a>
                        </div>
                        <div className="nav-item my-auto">
                            <a className="nav-link" href="#canvas">Canvas</a>
                        </div>
                        <div className="nav-item my-auto">
                            <a className="nav-link" href="#easels">Easels</a>
                        </div>
                    </div>
                </nav>

                <div className="row mx-auto my-auto row-content">
                    <div className="col text-center">
                        <h1>Munk Supplies</h1>
                        <p>Handcrafted with zen in Olmos Park, Texas</p>
                    </div>
                </div>
                <section id="brushes">
                    <hr className="hr" />
                    <div className="row mx-auto my-auto row-content">
                        <div className="col text-center">
                            <h2>Brushes</h2>
                        </div>
                    </div>
                    {brushProducts}
                </section>

                <section id="paints">
                    <hr className="hr" />
                    <div className="row mx-auto my-auto row-content">
                        <div className="col text-center">
                            <h2>Paint</h2>
                        </div>
                    </div>
                    {paintProducts}
                </section>

                <section id="canvas">
                    <hr className="hr" />
                    <div className="row mx-auto my-auto row-content">
                        <div className="col text-center">
                            <h2>Canvas</h2>
                        </div>
                    </div>
                    {canvasProducts}
                </section>

                <section id="easels">
                    <hr className="hr" />
                    <div className="row mx-auto my-auto row-content">
                        <div className="col text-center">
                            <h2>Easels</h2>
                        </div>
                    </div>
                    {easelProducts}
                </section>

                </Fade>
            </div>


        </div>
    );
}



export default SuppliesContainer;