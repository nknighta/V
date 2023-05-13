import {Text,Box} from "@chakra-ui/react";
import {motion,useAnimation} from "framer-motion";

export default function LiveUXDefault() {
    const controls = useAnimation()
    return (
        <div style={{padding:37}}>
            <Text>LiveUX</Text>
            <button onClick={() => controls.start({ scale: [ 2, 2, 1, 1],
                rotate: [ 0, 270, 270, 0],
                borderRadius: [ "20%", "50%", "50%", "20%"],})}>Start</button>
            <motion.div
                style={{ backgroundColor: "red", width: "200px", height: "200px"}}
                animate={controls}
                transition={{ duration: 1.28}}
            />
        </div>
    )
};