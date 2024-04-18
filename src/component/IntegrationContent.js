export default function IntegrationContent() {
    return (
        <div className="row row-cols-2">

            <div className="col-12 col-sm-6 mb-3">
                <div className="card border-0">
                    <div className="card-body d-flex justify-content-between">

                        <div className="d-flex gap-3">

                            <img className="integ-img rounded-1" src="https://typetype.org/wp-content/uploads/Doordash_1.png" alt="door dash" />

                            <div className="d-flex flex-column align-self-center">
                                <h6 className="fs-6 fw-bold m-0">Door Dash</h6>
                                <small>
                                    <a href="#">Learn more</a>
                                </small>
                            </div>

                        </div>

                        <div className="align-self-center">
                            <button type="button" class="btn btn-light border border-secondary-subtle fw-bold ps-3 pe-4 rounded-5" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                <i class="bi bi-plus-lg me-1"></i>
                                <span>Add</span>
                            </button>
                        </div>

                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-lg modal-dialog-centered">
                                <div class="modal-content">
                                    <div class="modal-body p-5">
                                        <button type="button" class="btn-close float-end" data-bs-dismiss="modal" aria-label="Close"></button>
                                        <div className="clearfix mb-2"></div>

                                        <h1 className="fs-3 fw-bold text-center">Adding Integration Platform</h1>

                                        <p className="fs-6 text-center text-secondary">
                                            You will need a DoorDash account to continue this process.
                                            Don't have a DoorDash account yet? <a href="#">Click here</a> to sign up for a
                                            DoorDash account.
                                        </p>

                                        <p className="fs-6 text-center text-secondary">
                                            You will also need to create a location in DoorDash to continue
                                            this process.
                                        </p>

                                        <div className="d-flex justify-content-center gap-3 mt-5">
                                            <button className="btn btn-transparent fw-bold border-0 px-5 py-3" data-bs-dismiss="modal">
                                                Cancel
                                            </button>
                                            <button className="btn btn-primary fw-bold border-0 px-5 py-3">
                                                Continue
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="col-12 col-sm-6 mb-3">
                <div className="card border-0">
                    <div className="card-body d-flex justify-content-between">

                        <div className="d-flex gap-3">

                            <img className="integ-img rounded-1" src="https://assets-global.website-files.com/60414b21f1ffcdbb0d5ad688/63cecf750aa7463091b17adf_5310366-uber-eats-logo-png-and-vector-logo-download-uber-eats-png-3500_3500_preview.png" alt="uber eats" />

                            <div className="d-flex flex-column align-self-center">
                                <h6 className="fs-6 fw-bold m-0">Uber Eats</h6>
                                <small className="text-secondary">
                                    Active
                                </small>
                            </div>

                        </div>

                        <div className="align-self-center">
                            <span class="badge bg-success-subtle px-3 pt-0 pb-2 rounded-5">
                                <i className="fs-5 align-text-bottom text-success"> &#x2022; </i>
                                <span className="text-success">Connected</span>
                            </span>
                        </div>

                    </div>
                </div>
            </div>

            <div className="col-12 col-sm-6 mb-3">
                <div className="card border-0">
                    <div className="card-body d-flex justify-content-between">

                        <div className="d-flex gap-3">

                            <img className="integ-img rounded-1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt9ToQpuBovz3_hN0Hmo0e9c86n9lOT7cQhOfbda9ELg&s" alt="Menulog" />

                            <div className="d-flex flex-column align-self-center">
                                <h6 className="fs-6 fw-bold m-0">Menulog</h6>
                                <small className="text-secondary">
                                    Active
                                </small>
                            </div>

                        </div>

                        <div className="align-self-center">
                            <span class="badge bg-success-subtle px-3 pt-0 pb-2 rounded-5">
                                <i className="fs-5 align-text-bottom text-success"> &#x2022; </i>
                                <span className="text-success">Connected</span>
                            </span>
                        </div>

                    </div>
                </div>
            </div>

            <div className="col-12 col-sm-6 mb-3">
                <div className="card border-0">
                    <div className="card-body d-flex justify-content-between">

                        <div className="d-flex gap-3">

                            <img className="integ-img rounded-1" src="https://media.licdn.com/dms/image/D4D22AQFxMCYFiC3FWg/feedshare-shrink_2048_1536/0/1694020072324?e=2147483647&v=beta&t=uEMwDJ-OCunC1a4Zn7LNxleIKqMypDv5If0H55cH4h0" alt="uber direct" />

                            <div className="d-flex flex-column align-self-center">
                                <h6 className="fs-6 fw-bold m-0">Uber Direct</h6>
                                <small className="text-secondary">
                                    Active
                                </small>
                            </div>

                        </div>

                        <div className="align-self-center">
                            <span class="badge bg-danger-subtle px-3 pt-0 pb-2 rounded-5">
                                <i className="fs-5 align-text-bottom text-danger"> &#x2022; </i>
                                <span className="text-danger">Disconnected</span>
                            </span>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    );
}