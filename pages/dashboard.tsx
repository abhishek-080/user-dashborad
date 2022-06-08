import styles from '../styles/Home.module.css'
import Head from 'next/head'
// import 'dashboard.css'

const Dashboard = () => {
  return (
    <div>
        <Head>
            <title>Home</title>
        </Head>

	
        <div className="card mb-5 mb-lg-8">
		<div className="card-body pt-9 pb-0">
			{/* <!--begin::Details--> */}
			<div className="d-flex flex-wrap flex-sm-nowrap">
				{/* <!--begin: Pic--> */}
				<div className="me-7 mb-4">
					<div className="symbol symbol-100px symbol-lg-160px symbol-fixed position-relative">
						<img src="/assets/media/avatars/300-1.jpg" alt="image" />
					</div>
				</div>
				{/* <!--end::Pic-->
				<!--begin::Info--> */}
				<div className="flex-grow-1">
					{/* <!--begin::Title--> */}
					<div className="d-flex justify-content-between align-items-start flex-wrap mb-2">
						{/* <!--begin::User--> */}
						<div className="d-flex flex-column">
							{/* <!--begin::Name--> */}
							<div className="d-flex align-items-center mb-2">
								<a href="#" className="text-gray-900 text-hover-primary fs-2 fw-bolder me-1">Rajesh Hamal</a>
								<a href="#">
									{/* <!--begin::Svg Icon | path: icons/duotune/general/gen026.svg--> */}
									<span className="svg-icon svg-icon-1 svg-icon-primary">
									</span>
									{/* <!--end::Svg Icon--> */}
								</a>
							</div>
							{/* <!--end::Name-->
							<!--begin::Info--> */}
							<div className="d-flex flex-wrap fw-bold fs-6 mb-4 pe-2">
								<a href="#" className="d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2">
								{/* <!--begin::Svg Icon | path: icons/duotune/communication/com006.svg--> */}
								<span className="svg-icon svg-icon-4 me-1">
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
										<path opacity="0.3" d="M22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12ZM12 7C10.3 7 9 8.3 9 10C9 11.7 10.3 13 12 13C13.7 13 15 11.7 15 10C15 8.3 13.7 7 12 7Z" fill="currentColor"></path>
										<path d="M12 22C14.6 22 17 21 18.7 19.4C17.9 16.9 15.2 15 12 15C8.8 15 6.09999 16.9 5.29999 19.4C6.99999 21 9.4 22 12 22Z" fill="currentColor"></path>
									</svg>
								</span>
          						 </a>
								{/* <!--end::Svg Icon-->Developer</a> */}
							</div>
								{/* <!--end::Info--> */}
							</div>
							{/* <!--end::User-->
							<!--begin::Actions--> */}
							<div className="d-flex my-4">
								 
							{/* <a href="#" className="btn btn-sm btn-primary me-2" data-bs-toggle="modal" data-bs-target="#kt_modal_offer_a_deal">Hire Me</a> */}
							{/* <!--begin::Menu--> */}
							<div className="me-0">
								<button className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
									<i className="bi bi-three-dots fs-3"></i>
								</button>
								{/* <!--begin::Menu 3--> */}
								<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-bold w-200px py-3" data-kt-menu="true">
									{/* <!--begin::Heading--> */}
									{/* <div className="menu-item px-3">
										<div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">Payments</div>
									</div> */}
									{/* <!--end::Heading-->
									<!--begin::Menu item--> */}
									<div className="menu-item px-3">
										<a href="#" className="menu-link px-3">Proile</a>
									</div>
									{/* <!--end::Menu item-->
									<!--begin::Menu item--> */}
									<div className="menu-item px-3 my-1">
										<a href="#" className="menu-link px-3">Settings</a>
									</div>
									{/* <!--end::Menu item--> */}
								</div>
								{/* <!--end::Menu 3--> */}
							</div>
							{/* <!--end::Menu--> */}
							</div>
							{/* <!--end::Actions--> */}
							</div>
							{/* <!--end::Title-->
							<!--begin::Stats--> */}
							<div className="d-flex flex-wrap flex-stack">
								{/* <!--begin::Wrapper--> */}
								<div className="d-flex flex-column flex-grow-1 pe-8">
									{/* <!--begin::Stats--> */}
									<div className="d-flex flex-wrap">
										{/* <!--begin::Stat--> */}
										<div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
											{/* <!--begin::Number--> */}
											<div className="d-flex align-items-center">
												{/* <!--begin::Svg Icon | path: icons/duotune/arrows/arr066.svg--> */}
												
												{/* <!--end::Svg Icon--> */}
												<div className="fs-2 fw-bolder counted" data-kt-countup="true" data-kt-countup-value="4500" data-kt-countup-prefix="$">100</div>
											</div>
											{/* <!--end::Number-->
											<!--begin::Label--> */}
											<div className="fw-bold fs-6 text-gray-400">Total followers</div>
											{/* <!--end::Label--> */}
										</div>
										{/* <!--end::Stat-->
										<!--begin::Stat--> */}
										<div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
											{/* <!--begin::Number--> */}
											<div className="d-flex align-items-center">
												{/* <!--begin::Svg Icon | path: icons/duotune/arrows/arr065.svg--> */}
												{/* <span className="svg-icon svg-icon-3 svg-icon-danger me-2">
													<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
														<rect opacity="0.5" x="11" y="18" width="13" height="2" rx="1" transform="rotate(-90 11 18)" fill="currentColor"></rect>
														<path d="M11.4343 15.4343L7.25 11.25C6.83579 10.8358 6.16421 10.8358 5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75L11.2929 18.2929C11.6834 18.6834 12.3166 18.6834 12.7071 18.2929L18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25C17.8358 10.8358 17.1642 10.8358 16.75 11.25L12.5657 15.4343C12.2533 15.7467 11.7467 15.7467 11.4343 15.4343Z" fill="currentColor"></path>
														</svg>
													</span> */}
													{/* <!--end::Svg Icon--> */}
													<div className="fs-2 fw-bolder counted" data-kt-countup="true" data-kt-countup-value="80">80</div>
												</div>
												{/* <!--end::Number-->
												<!--begin::Label--> */}
												<div className="fw-bold fs-6 text-gray-400">Following</div>
												{/* <!--end::Label--> */}
											</div>
											{/* <!--end::Stat-->
											<!--begin::Stat--> */}
											{/* <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
												{/* <!--begin::Number--> 
												<div className="d-flex align-items-center">
													{/* <!--begin::Svg Icon | path: icons/duotune/arrows/arr066.svg--> 
													<span className="svg-icon svg-icon-3 svg-icon-success me-2">
														<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
															<rect opacity="0.5" x="13" y="6" width="13" height="2" rx="1" transform="rotate(90 13 6)" fill="currentColor"></rect>
															<path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="currentColor"></path>
														</svg>
													</span>
													{/* <!--end::Svg Icon--> 
													<div className="fs-2 fw-bolder counted" data-kt-countup="true" data-kt-countup-value="60" data-kt-countup-prefix="%">%60</div>
												</div>
												{/* <!--end::Number-->
												<!--begin::Label--> 
												<div className="fw-bold fs-6 text-gray-400">Success Rate</div>
												{/* <!--end::Label--> 
											</div> */}
											{/* <!--end::Stat--> */}
										</div>
										{/* <!--end::Stats--> */}
									</div>
									{/* <!--end::Wrapper-->
									<!--begin::Progress--> */}
									<div className="d-flex align-items-center w-200px w-sm-300px flex-column mt-3">
										<div className="d-flex justify-content-between w-100 mt-auto mb-2">
											<span className="fw-bold fs-6 text-gray-400">Profile Compleation</span>
											<span className="fw-bolder fs-6">50%</span>
										</div>
										<div className="h-5px mx-3 w-100 bg-light mb-3">
											<div className="bg-success rounded h-5px" role="progressbar" style={{width:" 50%;"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
										</div>
									</div>
										{/* <!--end::Progress--> */}
							</div>
							{/* <!--end::Stats--> */}
									</div>
									{/* <!--end::Info--> */}
								</div>
								{/* <!--end::Details--> */}
							</div>
			</div>
    </div>
 
    
  )
}

export default Dashboard