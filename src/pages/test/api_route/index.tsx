import { GetServerSideProps } from 'next';
import axios from 'axios';

const MyPage = ({ data }) => {
    return (
        <div>
            <h1>My Page</h1>
            <p>{data}</p>
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async () => {

    try {
        const response = await axios.get('http://localhost:4100/api/t1');
        const data = response.data;
        return { props: { data } };
    } catch (error) {
        error = "Connection Error"
        return { props: { data: error } };
    }
};

export default MyPage;
