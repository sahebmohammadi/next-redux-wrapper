import axios from "axios";
import Page from "../components/Page";
import { incrementCounter } from "../redux/counter/action";
import { wrapper } from "../redux/store";
import { addUser } from "../redux/users/action";

const Other = (props) => {
  return <Page title="Other Page" linkTo="/" />;
};

export default Other;

//

export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
  store.dispatch(incrementCounter());
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${Math.floor(Math.random() * 10 + 1)}`
  );
  store.dispatch(addUser(data.name));
});
