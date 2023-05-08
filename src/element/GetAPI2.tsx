
type Props = { stars: number };
const App = ({ stars }: Props) => {
    return <div>{stars}</div>;
};

const url = "https://api.github.com/repos/zeit/next.js";
export async function getServerSideProps() {
    const json = await fetch(url).then((r) => r.json());
    const stars = json.stargazers_count;
    return {
        props: {
            stars,
        },
    };
}

export default App;