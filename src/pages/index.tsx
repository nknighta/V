import HMeta from "../components/headerMeta";
import LiveUXDefault from "../element/LiveUX/LiveUXDefault";
import {motion} from "framer-motion";
import useWindowSize from "../components/dispSIze";
import {Box} from "@chakra-ui/react";

export default function Index ():JSX.Element{
    const size = useWindowSize();
    return(
        <div>
            <HMeta pageTitle={""} imgUrl={"/favicon.ico"}/>
            <LiveUXDefault/>
            {size.width}px
            {size.width - 1300}px
            a {size.width - size.height / 2}px
            {size.height}px<br/>
            <motion.div
                initial={{ scale: 0 }}
                animate={{ rotate: size.width - 1300, scale: 1 }}
                transition={{
                    type: "spring"
                }}
                style={{
                    backgroundColor: "red",
                    height: 200,
                    width: 200,
                    marginLeft : size.width - 800
                }}
            >a</motion.div>
        </div>
    )
}