import NextLink from "next/link";
import Contaienr from "../../../element/dnd/Container";

export default function Index () {
    const pwd:string = "http://localhost:4100/test"
    return(
        <div className={"bg-white text-black h-auto p-2"}>
            <div>
                <h1 className={"text-lg text-center p-2"}>User Page test</h1>
            </div>
            <div>
                <div className={"bg-white text-black h-auto flex justify-center p-2"}>
                    <div className={"bg-black text-white w-1/3 p-6 m-7"}>
                        <p className={"font-bold text-2xl"}>Profile</p>
                    </div>
                    <div className={"w-2/3 bg-yellow-400 p-6 m-7"}>
                        <p className={"font-bold text-2xl"}>Name</p>
                        <div className={"p-3"}>
                            <p className={"text-lg"}>Harutomo Maeda</p>
                        </div>
                        <p className={"font-bold text-2xl"}>barth day</p>
                        <div className={"p-3"}>
                            <p className={"text-lg"}>2003/06/27</p>
                        </div>
                        <p className={"font-bold text-2xl"}>Status</p>
                        <div className={"p-3"}>
                            <p className={"text-lg"}>Owner</p>
                        </div>
                    </div>
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