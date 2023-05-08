import NextLink from "next/link";
import Contaienr from "../../../element/dnd/Container";

export default function Index () {
    const pwd:string = "http://localhost:4100/test"
    return(
        <div className={"bg-white text-black h-auto p-2"}>
            <div>
                <h1 className={"text-lg text-center p-2"}>DND element</h1>
            </div>
            <div>
                <div className={"bg-white text-black h-auto flex justify-center p-2"}>
                    <Contaienr/>
                </div>
                <h1 className={"text-lg text-center p-9"}>
                    <NextLink href={`${pwd}/`}>
                        Back
                    </NextLink>
                </h1>
            </div>
        </div>
    )
}