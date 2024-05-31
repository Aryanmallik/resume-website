import Link from "next/link";
import Image from "next/image";
import styles from "../styles/header.module.css";
export default function Header() {
    return (
        <>
            <div className={styles.navbar}>
                <div className="navbar">
                    <div className="flex-none">
                        <div className=" drawer">
                            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                            <div className="drawer-content">
                                <label
                                    htmlFor="my-drawer"
                                    className="btn btn-square btn-ghost drawer-button"
                                >
                                    {" "}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        className="inline-block w-5 h-5 stroke-current"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        ></path>
                                    </svg>
                                </label>
                            </div>
                            <div className="drawer-side">
                                <label
                                    htmlFor="my-drawer"
                                    aria-label="close sidebar"
                                    className="drawer-overlay"
                                ></label>
                                <ul className="menu p-4 w-80 z-[30] min-h-full text-base-content">
                                    <br />
                                    <br />
                                    <br />
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
                    </div>
                    <div className="navbar justify-center">
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
                </div>
            </div>
        </>
    );
}
