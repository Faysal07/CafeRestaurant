// Header Logo Link Here
import HeaderLogo from "../../public/images/Logo.png";

export default function Header() {
    return(
        // <header className="">
        //     <div className="container">
        //         <div className="grid">
        //             <h5 className="">Sign up for our Loyalty Program today and receive 15% OFF your first order.</h5>
        //             <h5 className="">Need Help?</h5>
        //             <a href="">(+302) 555-0107-122</a>
        //             <h5 className="">08:00am - 10:00pm</h5>
        //             <a href="" className="">Our Locations</a>
        //         </div>
        //         <div className="grid">
        //             <div className="navbar bg-base-100 shadow-sm">
        //                 <div className="navbar-start">
        //                     <div className="dropdown">
        //                     <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
        //                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
        //                     </div>
        //                     <ul tabindex="-1" className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        //                         <li><a>Item 1</a></li>
        //                         <li>
        //                             <a>Parent</a>
        //                             <ul className="p-2">
        //                                 <li><a>Submenu 1</a></li>
        //                                 <li><a>Submenu 2</a></li>
        //                             </ul>
        //                         </li>
        //                         <li><a>Item 3</a></li>
        //                     </ul>
        //                     </div>
        //                     <a className="btn btn-ghost text-xl">daisyUI</a>
        //                 </div>
        //                 <div className="navbar-center hidden lg:flex">
        //                     <ul className="menu menu-horizontal px-1">
        //                         <li><a>Item 1</a></li>
        //                         <li>
        //                             <details>
        //                             <summary>Parent</summary>
        //                             <ul className="p-2 bg-base-100 w-40 z-1">
        //                                 <li><a>Submenu 1</a></li>
        //                                 <li><a>Submenu 2</a></li>
        //                             </ul>
        //                             </details>
        //                         </li>
        //                         <li><a>Item 3</a></li>
        //                     </ul>
        //                 </div>
        //                 <div className="navbar-end">
        //                     <a className="btn">Button</a>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </header>


        <div>
            <header className="md:pt-[10px] md:pb-[10px] bg-[#403c34] text-[#ffffff] font-[Open_Sans]">
                <div className="container md:max-w-[1370px] md:m-auto">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="offerText">
                            <h5>Sign up for our Loyalty Program today and receive 15% OFF your first order.</h5>
                        </div>
                        <div className="shortInfo">
                            <h5 className="inline-flex md:pr-[20px] md:pl-[20px]">Need Help?</h5>
                            <a href="" className="inline-flex md:pr-[20px] md:pl-[20px]">(+302) 555-0107-122</a>
                            <h5 className="inline-flex md:pr-[20px] md:pl-[20px]">08:00am - 10:00pm</h5>
                            <a href="" className="inline-flex md:pr-[20px] md:pl-[20px]">Our Locations</a>
                        </div>
                    </div>
                </div>
            </header>
            <div className="NavBar md:pt-[10px] md:pb-[10px]">
                <div className="container md:max-w-[1370px] md:m-auto">
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="headerLogo">
                            <a href="#" className=""><img src={HeaderLogo} alt="Header Logo" /></a>
                        </div>
                        <div className="navMenu col-span-2">
                            <ul className="">
                                <li className="inline-flex md:pt-[20px] md:pb-[20px] md:pl-[25px] md:pr-[25px]"><a href="">Home</a></li>
                                <li className="inline-flex md:pt-[20px] md:pb-[20px] md:pl-[25px] md:pr-[25px]"><a href="">About us</a></li>
                                <li className="inline-flex md:pt-[20px] md:pb-[20px] md:pl-[25px] md:pr-[25px]"><a href="">Cafe & Drinks</a></li>
                                <li className="inline-flex md:pt-[20px] md:pb-[20px] md:pl-[25px] md:pr-[25px]"><a href="">Food Menu</a></li>
                                <li className="inline-flex md:pt-[20px] md:pb-[20px] md:pl-[25px] md:pr-[25px]"><a href="">Reservation</a></li>
                                <li className="inline-flex md:pt-[20px] md:pb-[20px] md:pl-[25px] md:pr-[25px]"><a href="">Contact us</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}