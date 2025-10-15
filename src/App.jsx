import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import { useEffect, useState } from "react";
import Preloader from "./components/Preloader";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Preloader />;
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
