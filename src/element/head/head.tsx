import StyledNextLink from "../../components/styledNextLink";
import HeadMenuLinksLoop from "./headLinkList";
import {motion} from "framer-motion";
import DynamicElement from "./dynamic";

export default function HeadElement() {
    let headtextsize:number = 20;
    let hp:string = "4em";
    const date = new Date();
    const second = date.getSeconds();
    const minute = date.getMinutes();
    const hour = date.getHours();
    console.log(`${hour}:${minute}.${second}`);
        return(
        <motion.div className={"bg-black flex p-5"}>
            <div className={"flex w-1/3"}>
                <StyledNextLink page={"/"} text={"Home"} size={40} color={"#fff"} newtabs={"false"}/>
            </div >
            <div className={"flex w-2/3 justify-end pr-14"}>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    padding: `0 ${hp} 0 0`,
                }}>
                    <HeadMenuLinksLoop/>
                </div>
                <StyledNextLink page={"/"} text={"Sigh in"} size={40} color={"#fff"} newtabs={"false"}/>
            </div>
        </motion.div>
    )
}


