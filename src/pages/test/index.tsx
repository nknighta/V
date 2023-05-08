import NextLink from "next/link";

export default function Index () {
    const pwd:string = "http://localhost:4100/test"
    return(
        <div className={"bg-white text-black h-auto p-2"}>
            <div>
                <h1 className={"text-lg text-center p-2"}>Test Page Index</h1>
            </div>
            <div>
                <h1 className={"text-lg text-center pt-9"}>
                    <NextLink href={`${pwd}/dnd`}>
                        dnd page
                    </NextLink>
                </h1>
                <h1 className={"text-lg text-center p-4"}>
                    <NextLink href={`${pwd}/user`}>
                        User Page mockup
                    </NextLink>
                </h1>
            </div>
        </div>
    )
}