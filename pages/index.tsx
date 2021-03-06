import Link from "next/link";
import CustomHead from "../components/CustomHead";
import BlogName from "../constants";
import moment from "moment";

const NOTION_BLOG_ID =
  process.env.NOTION_BLOG_ID || "1099525da7e5405c961706de56622ccd";

export type Post = { id: string; description: string; slug: string; title: string; date: string, time: string, place: number, published: boolean };

export const getAllPosts = async (): Promise<Post[]> => {
  return await fetch(
    `https://notion-api.splitbee.io/v1/table/${NOTION_BLOG_ID}`
  ).then((res) => res.json());
};

export async function getServerSideProps() {
  const posts = await getAllPosts();
  let filtered = posts.filter((post) => post.published == true)
  let sorted = filtered.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
  return {
    props: {
      posts: sorted.reverse(),
    },
  };
}

function HomePage({ posts }: { posts: Post[] }) {


  return (
    <>
      <CustomHead />
      <div className="content">
        <h1> <Link href="https://github.com/hokkqi/axiom">
          <a>{BlogName}</a>
        </Link>{' '} by{' '}
          <Link href="https://himbo.cat">
            <a>Lio</a>
          </Link>
        </h1>
        <h2>Posts</h2>
        <div>
          {posts.map((post) => (
            <Link key={post.slug + '_' + post.date} href="/[slug]" as={`/${post.slug}`}>
              <a>
                <b> {post.place} {post.title}</b>
                <div className="sub">posted {moment(`${post.date} ${post.time}`).startOf('hour').fromNow()}</div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default HomePage;
