import Link from "next/link"

function Navbar() {
    return (
        <div>
        <Link href="/">Homepage</Link>&nbsp;&nbsp;|&nbsp;&nbsp;
        <Link href="/about">About Us</Link>&nbsp;&nbsp;|&nbsp;&nbsp;
        <Link href="/feedback">Feedback</Link>&nbsp;&nbsp;|&nbsp;&nbsp;
        <Link href="/contact">Contact</Link>
        </div>
    )
}
export default Navbar

