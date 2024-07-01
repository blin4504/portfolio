import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="w-full h-20 top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <ul className="hidden md:flex gap-x-6">
              <li>
                <Link href="/">
                  <p>About Me</p>
                </Link>
              </li>
              <li>
                <Link href="/projects">
                  <p>Projects</p>
                </Link>
              </li>
              <li>
                <Link href="/resume">
                  <p>Resume</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
