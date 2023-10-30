"use client"

import Link from "next/link";

const Layout = ({children}) => {
    return (
        <div>
                 <nav class="flex items-center justify-between p-4 bg-gray-800 text-white">

 


<div class="flex justify-center">
  <Link href="/" className="nav-link mx-2">Home</Link>
  <Link href="/dahboard/event" className="nav-link mx-2">Event</Link>
  <Link href="/dahboard/wing" className="nav-link mx-2">Wing</Link>
 
  <Link href="/dahboard/notice" className="nav-link mx-2">Notice</Link>
  <Link href="/dahboard/certificate" className="nav-link mx-2">Certificate</Link>
 
</div>

 
</nav>
            {children}
        </div>
    );
};

export default Layout;