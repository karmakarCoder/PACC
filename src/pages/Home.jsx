import CheckCertificate from "../components/HomeComponent/CheckCertificate";
import Hero from "../components/HomeComponent/Hero";
import Partner from "../components/HomeComponent/Partner";
import Partnership from "../components/HomeComponent/Partnership";
import Proggram from "../components/HomeComponent/Proggram";
import TestCenter from "../components/HomeComponent/TestCenter";

export default function Home() {
  return (
    <div>
      <Hero />
      <TestCenter />
      <CheckCertificate />
      <Proggram />
      <Partnership />
      <Partner />
    </div>
  );
}
