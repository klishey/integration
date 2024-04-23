import StoreSelect from "./StoreSelect";

export default function Navbar() {
    return (

        <nav className="navbar navbar-expand-lg bg-white py-4">

            <div className="container">

                {/* <select className="form-select user w-25 border border-secondary-subtle rounded-5 ps-4" aria-label="Select Store">
                    <option value="1" selected>2 Sisters Pizzeria</option>
                    <option value="2">Sam's Pizza Numbawan</option>
                    <option value="3">Test Alpha</option>
                    <option value="4">Deliverit Portal</option>
                </select> */}

                <StoreSelect />

                <div className="d-flex user-nav">

                    <div className="nav-item dropdown user-nav-item">
                        <a className="nav-link user-nav-link bg-white border border-secondary-subtle rounded-circle btn-circle position-relative dropdown-toggle dropdown-user" href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                            <i className="bi bi-bell-fill text-dark"></i>
                            <span className="position-absolute translate-middle notif rounded-circle bg-danger">
                                <span className="fs-6 text-light">1</span>
                            </span>
                        </a>

                        <div class="dropdown-menu dropdown-menu-end px-2 py-2">
                            <h6 className="dropdown-header fw-bold">Notifications</h6>

                            <div className="d-block px-3">
                                <ul class="nav nav-underline flex-nowrap border-bottom gap-0" id="myTab" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link text-secondary active px-4" id="all-tab" data-bs-toggle="tab" data-bs-target="#all-tab-pane" type="button" role="tab" aria-controls="all-tab-pane" aria-selected="true">All</button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link text-secondary px-4" id="success-tab" data-bs-toggle="tab" data-bs-target="#success-tab-pane" type="button" role="tab" aria-controls="success-tab-pane" aria-selected="false">Success</button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link text-secondary px-4" id="failed-tab" data-bs-toggle="tab" data-bs-target="#failed-tab-pane" type="button" role="tab" aria-controls="failed-tab-pane" aria-selected="false">Failed</button>
                                    </li>
                                </ul>
                                <div class="tab-content" id="myTabContent">
                                    <div class="tab-pane fade show active" id="all-tab-pane" role="tabpanel" aria-labelledby="all-tab" tabindex="0">
                                        <div className="d-flex gap-3 p-2 mt-2">
                                            <i class="bi bi-rocket-takeoff-fill fs-4 text-success"></i>
                                            <div className="d-flex flex-column">
                                                <h6 className="text-dark mb-0">Deployment Success</h6>
                                                <small className="m-0 text-secondary">Success deployment to DPOS</small>
                                                <small className="text-secondary fw-semibold">4 months ago</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="success-tab-pane" role="tabpanel" aria-labelledby="success-tab" tabindex="0">
                                        <div className="d-flex gap-3 p-2 mt-2">
                                            <i class="bi bi-rocket-takeoff-fill fs-4 text-success"></i>
                                            <div className="d-flex flex-column">
                                                <h6 className="fw-bold mb-0">Deployment Success</h6>
                                                <small className="m-0 text-secondary">Success deployment to DPOS</small>
                                                <small className="text-secondary fw-semibold">4 months ago</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="failed-tab-pane" role="tabpanel" aria-labelledby="failed-tab" tabindex="0">
                                        <div className="d-flex gap-3 p-2 mt-2 justify-content-center">
                                            <small className="text-secondary fw-semibold p-4">No Notification</small>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>


                    </div>

                    <div className="nav-item d-none d-sm-block user-nav-item">
                        <a className="nav-link user-nav-link bg-white border border-secondary-subtle rounded-5 btn-circle position-relative" href="#">
                            <i className="bi bi-rocket-takeoff-fill text-dark"></i>
                            <span className="position-absolute translate-middle notif rounded-circle bg-danger">
                                <span className="fs-6 text-light">1</span>
                            </span>
                        </a>
                    </div>

                    <div className="nav-item dropdown user-nav-item">

                        <a className="nav-link user-nav-link bg-white border border-secondary-subtle rounded-5 btn-circle dropdown-toggle dropdown-user position-relative" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <span className="text-dark">RJ</span>
                            <span class="position-absolute translate-middle status rounded-circle bg-success"></span>
                        </a>

                        <ul className="dropdown-menu dropdown-menu-end fade">

                            <li><h6 className="dropdown-header fw-bold">Account</h6></li>

                            <li>
                                <a className="dropdown-item" href="#">
                                    <div className="d-flex gap-3">
                                        <i class="bi bi-person-circle fs-5 text-info align-self-center"></i>
                                        <div className="d-flex flex-column">
                                            <h6 className="mb-0 fw-semibold">Rob Julio</h6>
                                            <p className="mb-0 text-secondary">robbyjulio@ooliogroup.com</p>
                                        </div>
                                    </div>
                                </a>
                            </li>

                            <li><hr className="dropdown-divider" /></li>

                            <li>
                                <a className="dropdown-item d-flex gap-2 disabled" href="#">
                                    <i class="bi bi-person-circle fs-5"></i>
                                    <span className="align-self-center fw-semibold">Edit Profile</span>
                                </a>
                            </li>

                            <li>
                                <a className="dropdown-item d-flex gap-2 disabled" href="#">
                                    <i class="bi bi-gear-wide-connected fs-5"></i>
                                    <span className="align-self-center fw-semibold">Account Setting</span>
                                </a>
                            </li>

                            <li>
                                <a className="dropdown-item d-flex gap-2" href="#">
                                    <i class="bi bi-box-arrow-right fs-5 text-dark"></i>
                                    <span className="align-self-center fw-semibold">Log out</span>
                                </a>
                            </li>

                        </ul>

                    </div>

                </div>

            </div>

        </nav>



    );

}