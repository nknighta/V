import LinkList from "./linkLoop";
import useWindowSize from "../../components/dispSIze";
import styled from "styled-components";

export default  function HeaderElement ( ):JSX.Element {
    const size = useWindowSize();
    const dynamix = size.width > 768 ? "flex":"block";
    return (
        <div>
            <LinkList></LinkList>
        </div>
    )
}

const HeaderLink = styled.div`
   display: flex;
`;

/*
* StyledComponent <"div",any,{}>
* */