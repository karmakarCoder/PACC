import CheckCertificate from "../components/HomeComponent/CheckCertificate";
import Hero from "../components/HomeComponent/Hero";
import Proggram from "../components/HomeComponent/Proggram";
import TestCenter from "../components/HomeComponent/TestCenter";

export default function Home() {
  return (
    <div>
      <Hero />
      <TestCenter />
      <CheckCertificate />
      <Proggram />
    </div>
  );
}
