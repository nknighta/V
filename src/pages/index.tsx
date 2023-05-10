import DynamicElement from "../element/head/dynamic";
import HMeta from "../components/headerMeta";

export default function Index () {
    return(
        <div>
            <HMeta pageTitle={""} imgUrl={"/favicon.ico"}/>
            <DynamicElement />
        </div>
    )
}