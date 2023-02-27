import Link from "next/link";

const Navbar: React.FC<{}> = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href={"/transformation"}>Transform</Link>
        </li>
        <li>
          <Link href={"/build"}>Build</Link>
        </li>
        <li>
          <Link href={"/documentation"}>Documentation</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
