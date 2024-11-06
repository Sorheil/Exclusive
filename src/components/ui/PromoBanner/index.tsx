import PromoBannerImage from "./../../../assets/image/promo-banner.png";

export const PromoBanner = () => {
    return (
        <div className="w-full h-80 max-h-80 bg-black p-8 flex justify-center ">

            {/* text */}
            <div className="w-1/2 flex flex-col justify-between mx-10">

                <div>

                    <p className="flex items-center md:text-base">
                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="69" viewBox="0 0 32 32">
                            <path fill="white" d="M24.32 10.85q-2.615 1.851-2.615 4.455q0 3.118 3.232 4.786q-.867 2.516-2.514 4.376q-1.645 1.861-3.004 1.862q-.641-.002-1.75-.423l-.353-.138q-1.086-.421-1.92-.423q-.787 0-1.725.33l-.445.16l-.56.23q-.662.264-1.337.264q-1.59 0-3.507-2.616q-2.764-3.747-2.764-8.167q-.001-3.141 1.724-5.06q1.725-1.92 4.568-1.92c.71 0 1.37.13 1.988.388l.423.172l.445.183q.594.25.96.25q.466.002 1.04-.216l.58-.23l.436-.16q1.04-.376 2.297-.376q2.987 0 4.8 2.274zm-4.705-7.563q.032.4.033.617q0 1.976-1.438 3.467c-1.438 1.491-2.075 1.49-3.347 1.49a6 6 0 0 1-.058-.638q0-1.68 1.337-3.153q1.335-1.476 3.096-1.726q.125-.022.377-.057" />
                        </svg>
                        <span className="text-white">iPhone 14 Series</span>
                    </p>

                    <p className="text-xs w-32 text-white md:text-4xl lg:text-5xl lg:leading-[1.2] md:w-56 lg:w-72">
                        Up to 10%
                        off Voucher
                    </p>

                </div>

                <a href="#" className="text-white mt-auto underline">Shop Now</a>
            </div>

            {/* image */}
            <div className=" flex  ">
                <img src={PromoBannerImage} alt="" className="w-1/2max-w-full max-h-full object-contain mx-4" />
            </div>
        </div>
    );
}
