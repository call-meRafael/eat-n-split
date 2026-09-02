import { FriendList } from "./components/friendList"
import { friends } from "/src/data";

export const App = () => {
  return (
    <main className="container">
      <section className="grid">
        <FriendList friends={friends} />
      </section>

    </main>
  )
}