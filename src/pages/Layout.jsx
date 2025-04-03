import { Outlet } from "react-router-dom";
import Navbar from "../components/ui-components/Navbar";

export default function Layout() {
  return (
    <div>
      <Navbar />
      <main className="">
        <Outlet />
      </main>
    </div>
  );
}
