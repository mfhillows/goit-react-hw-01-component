import "./App.css";

import Container from "./components/Container/Container";

import Profile from "./components/Profile/Profile";
import user from "./user.json";

import Statistic from "./components/Statistics/Statistic";
import statisticalData from "./statistic-data.json";

import FriendList from "./components/FriendList/FriendList";
import friends from "./friends.json";

function App() {
  return (
    <Container>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistic title="Upload stats" stats={statisticalData} />
      <Statistic stats={statisticalData} />
      <FriendList friends={friends} />
    </Container>
  );
}

export default App;
