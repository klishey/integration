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

                    <div className="nav-item user-nav-item">
                        <a className="nav-link bg-white border border-secondary-subtle rounded-circle btn-circle position-relative" href="#">
                            <i className="bi bi-bell-fill text-dark"></i>
                            <span className="position-absolute translate-middle notif rounded-circle bg-danger">
                                <span className="fs-6 text-light">1</span>
                            </span>
                        </a>
                    </div>

                    <div className="nav-item d-none d-sm-block user-nav-item">
                        <a className="nav-link bg-white border border-secondary-subtle rounded-5 btn-circle position-relative" href="#">
                            <i className="bi bi-rocket-takeoff-fill text-dark"></i>
                            <span className="position-absolute translate-middle notif rounded-circle bg-danger">
                                <span className="fs-6 text-light">1</span>
                            </span>
                        </a>
                    </div>

                    <div className="nav-item dropdown user-nav-item">

                        <a className="nav-link bg-white border border-secondary-subtle rounded-5 btn-circle dropdown-toggle dropdown-user position-relative" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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