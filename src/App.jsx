import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "./pages/Layout";
import ScrollToTop from "./components/ui-components/ScrollToTop";

// Lazy-loaded components
const Home = lazy(() => import("./components/Home"));
const MusicVideo = lazy(() => import("./components/MusicVideo"));
const MixMedia = lazy(() => import("./components/MixMedia"));
const Experimental = lazy(() => import("./components/Experimental"));
const FilmPhotography = lazy(() => import("./components/FilmPhotography"));
const Function = lazy(() => import("./components/Function"));

export default function App() {
  return (
    <Suspense fallback={
      <div className="h-screen w-full bg-white flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-[#0a0908] border-dashed rounded-full animate-spin"></div>
      </div>
    }>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="music-video" element={<MusicVideo />} />
          <Route path="mix-media" element={<MixMedia />} />
          <Route path="experimental" element={<Experimental />} />
          <Route path="film-photography" element={<FilmPhotography />} />
          <Route path="function" element={<Function />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
