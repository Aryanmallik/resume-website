import Link from "next/link";
import Image from "next/image";
import styles from "@/src/styles/header.module.css"
export default function Header1() {
    return (
        <>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown dropdown-hover">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </div>
                        <ul tabIndex={0} className={`${styles.ulu} menu menu-sm dropdown-content  z-[20] p-2 shadow bg-base-100 rounded-box w-52`}>
                                    <li>
                                        <Link href={"./"}>Home</Link>
                                    </li>
                                    <li>
                                        <Link href={"./about"}>About Me</Link>
                                    </li>
                                    <li>
                                        <Link href={"./photos"}>Photos</Link>
                                    </li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center">
                        <Link href="/">
                            <p>
                                <Image
                                    src={"/logo.png"}
                                    width={825}
                                    height={302}
                                    alt=""
                                    style={{ height: "3.9rem", width: "6.5rem" }}
                                ></Image>
                            </p>
                        </Link>
                </div>
                <div className="navbar-end">
                </div>
            </div>
        </>
    );
}
