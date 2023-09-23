import React from "react";
import {
	MDBCarousel,
	MDBCarouselItem,
	MDBCard,
	MDBCardBody,
	MDBCardTitle,
	MDBCardImage,
	MDBRipple,
	MDBContainer,
	MDBRow,
	MDBCol,
} from "mdb-react-ui-kit";

import { NavLink } from "react-router-dom";

function MainPage() {
	return (
		<>

			<div>
				<MDBCarousel showControls fade>
					<MDBCarouselItem
						height="mx-auto"
						widht="mx-auto"
						className="w-100 d-block"
						itemId={1}
						src="https://cdn.motor1.com/images/mgl/ojbbOl/s3/eleanor-mustang-1.webp"
						alt="Ford Mustang"
					/>
					<MDBCarouselItem
						height="mx-auto"
						widht="mx-auto"
						className="w-100 d-block"
						itemId={2}
						src="https://media.ford.com/content/fordmedia/fna/us/en/news/2022/07/18/700-horsepower-new-ford-f-150-raptor-r/jcr:content/image.img.881.495.jpg/1658170539143.jpg"
						alt="Ford Raptor"
					/>
					<MDBCarouselItem
						height="mx-auto"
						widht="mx-auto"
						className="w-100 d-block"
						itemId={3}
						src="https://i.kinja-img.com/gawker-media/image/upload/c_fit,f_auto,g_center,q_60,w_1315/trsahpgwbwyalhvsinpg.jpg"
						alt="BMW"
					/>
				</MDBCarousel>
			</div>
			<div className="px-4 py-5 my-5 text-center">
        <h1 className="display-5 fw-bold">AutoHub</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4 ">
					Unlock Your Drive to Success - Drive with AutoHub!
          </p>
        </div>
      </div>

			<div className="pt-5" />
			<MDBContainer className="pt-5">
				<MDBRow>
					<MDBCol size="md">
						<MDBCard className="h-100">
							<MDBRipple
								rippleColor="light"
								rippleTag="div"
								className="bg-image hover-overlay"
							>
								<div className="image-container" style={{ height: "300px", overflow: "hidden" }}>
									<MDBCardImage
										src="https://media.ford.com/content/fordmedia/fna/us/en/news/2021/10/04/new-products-improved-inventory-propels-ford/jcr:content/image.img.881.495.jpg/1633360038621.jpg"
										fluid
										alt="..."
										style={{ height: "100%", width: "auto"}}
									/>
								</div>
								<a>
									<div
										className="mask"
										style={{
											backgroundColor:
												"rgba(251, 251, 251, 0.15)",
										}}
									></div>
								</a>
							</MDBRipple>
							<MDBCardBody>
								<MDBCardTitle>Inventory</MDBCardTitle>

								<div
									className="offcanvas offcanvas-end"
									id="demo"
								>
									<div className="offcanvas-header">
										<h1 className="offcanvas-title">
											Inventory
										</h1>
										<button
											type="button"
											className="btn-close text-reset"
											data-bs-dismiss="offcanvas"
										></button>
									</div>
									<div class="offcanvas-body">
										<p>
											Click one of the navigation links
											below:
										</p>
										<NavLink
											className="nav-link"
											to="/manufacturers/new/"
										>
											<button className="btn btn-dark">
												Create a Manufacturer
											</button>
										</NavLink>
										<NavLink
											className="nav-link"
											to="/manufacturers/"
										>
											<button className="btn btn-dark">
												Manufacturer List
											</button>
										</NavLink>
										<NavLink
											className="nav-link"
											to="/models/new"
										>
											<button className="btn btn-dark">
												Add a Vehicle Model
											</button>
										</NavLink>
										<NavLink
											className="nav-link"
											to="/models/"
										>
											<button className="btn btn-dark">
												Vehicle Models List
											</button>
										</NavLink>
										<NavLink
											className="nav-link"
											to="/automobiles/new"
										>
											<button className="btn btn-dark">
												Add an Automobile
											</button>
										</NavLink>
										<NavLink
											className="nav-link"
											to="/automobiles/"
										>
											<button className="btn btn-dark">
												Automobiles List
											</button>
										</NavLink>
									</div>
								</div>
								<button
									class="btn btn-primary"
									type="button"
									data-bs-toggle="offcanvas"
									data-bs-target="#demo"
								>
									Inventory Navigation
								</button>
							</MDBCardBody>
						</MDBCard>
					</MDBCol>

					<MDBCol size="md">
						<MDBCard className="h-100">
							<MDBRipple
								rippleColor="light"
								rippleTag="div"
								className="bg-image hover-overlay"
							>
								<div className="image-container" style={{ height: "300px", overflow: "hidden" }}>
									<MDBCardImage
										src="https://pictures.dealer.com/f/folsomlakefordfd/1534/404dfb18328d1c0574a6a18239dd57e0x.jpg"
										fluid
										alt="..."
										style={{ height: "100%", width: "auto" }}
									/>
								</div>
								<a>
									<div
										className="mask"
										style={{
											backgroundColor:
												"rgba(251, 251, 251, 0.15)",
										}}
									></div>
								</a>
							</MDBRipple>
							<MDBCardBody>
								<MDBCardTitle>Sales</MDBCardTitle>

								<div
									className="offcanvas offcanvas-start"
									id="demo2"
								>
									<div className="offcanvas-header">
										<h1 className="offcanvas-title">
											Sales
										</h1>
										<button
											type="button"
											class="btn-close text-reset"
											data-bs-dismiss="offcanvas"
										></button>
									</div>
									<div class="offcanvas-body">
										<p>
											Click one of the navigation links
											below:
										</p>
										<NavLink
											className="nav-link"
											to="/customer/new/"
										>
											<button className="btn btn-dark">
												Add a Customer
											</button>
										</NavLink>
										<NavLink
											className="nav-link"
											to="/salespeople/new/"
										>
											<button className="btn btn-dark">
												Add a Sales Person
											</button>
										</NavLink>
										<NavLink
											className="nav-link"
											to="/salespeople/new/"
										>
											<button className="btn btn-dark">
												Add a Sales Record
											</button>
										</NavLink>
										<NavLink
											className="nav-link"
											to="/salespeople/"
										>
											<button className="btn btn-dark">
												Sales People List
											</button>
										</NavLink>
										<NavLink
											className="nav-link"
											to="/sales/history/"
										>
											<button className="btn btn-dark">
												Sales Record List
											</button>
										</NavLink>
									</div>
								</div>
								<button
									class="btn btn-primary"
									type="button"
									data-bs-toggle="offcanvas"
									data-bs-target="#demo2"
								>
									Sales Navigation
								</button>
							</MDBCardBody>
						</MDBCard>
					</MDBCol>

					<MDBCol size="md">
						<MDBCard className="h-100">
							<MDBRipple
								rippleColor="light"
								rippleTag="div"
								className="bg-image hover-overlay"
							>
								<div className="image-container" style={{ height: "300px", overflow: "hidden" }}>
									<MDBCardImage
										src="https://www.jackpowellford.com/assets/shared/CustomHTMLFiles/Compliance/Ford/OilChangeAdvice/images/GeneralServiceAdviceHero.jpg"
										fluid
										alt="..."
										style={{ height: "100%", width: "auto" }}
									/>
								</div>
								<a>
									<div
										className="mask"
										style={{
											backgroundColor:
												"rgba(251, 251, 251, 0.15)",
										}}
									></div>
								</a>
							</MDBRipple>
							<MDBCardBody>
								<MDBCardTitle>Services</MDBCardTitle>

								<div
									class="offcanvas offcanvas-end"
									id="demo3"
								>
									<div class="offcanvas-header">
										<h1 class="offcanvas-title">
											Services
										</h1>
										<button
											type="button"
											className="btn-close text-reset"
											data-bs-dismiss="offcanvas"
										></button>
									</div>
									<div class="offcanvas-body">
										<p>
											Click one of the navigation links
											below:
										</p>
										<NavLink
											className="nav-link"
											to="/appointments/new"
										>
											<button className="btn btn-dark">
												Make a Service Appointment
											</button>
										</NavLink>
										<NavLink
											className="nav-link"
											to="/appointments/"
										>
											<button className="btn btn-dark">
												List of Appointments
											</button>
										</NavLink>
										<NavLink
											className="nav-link"
											to="/technicians/new"
										>
											<button className="btn btn-dark">
												Add a Technician
											</button>
										</NavLink>
										<NavLink
											className="nav-link"
											to="/technicians/"
										>
											<button className="btn btn-dark">
												Technicians
											</button>
										</NavLink>
									</div>
								</div>
								<button
									className="btn btn-primary"
									type="button"
									data-bs-toggle="offcanvas"
									data-bs-target="#demo3"
								>
									Services Navigation
								</button>
							</MDBCardBody>
						</MDBCard>
					</MDBCol>
				</MDBRow>
			</MDBContainer>
			<div className="pt-5" />
			<div className="pt-5" />
		</>
	);
}

export default MainPage;
