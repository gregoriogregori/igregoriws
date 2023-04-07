import Image from "next/image";
import { useSelector } from "react-redux";
import Layout from "../components/Layout";

export default function Home() {
  const selectedLanguage = useSelector(
    (state) => state.language.selectedLanguage
  );
  return (
    <Layout
      title="Collezioni"
      metaDescription="Le collezioni"
      page={"collezioni"}
    >
      {selectedLanguage === "en" ? "collection" : "collezioni"}
    </Layout>
  );
}
