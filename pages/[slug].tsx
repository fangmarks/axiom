import Link from "next/link";
import { NotionRenderer, BlockMapType } from "react-notion";
import { getAllPosts, Post } from ".";
import CustomHead from "../components/CustomHead";
import BlogName from "../constants";

export async function getServerSideProps({
  // @ts-ignore
  params: { slug },
}: {
  // @ts-ignore
  params: { slug: string };
}) {
  // Get all posts again
  const posts = await getAllPosts();

  // Find the current blogpost by slug
  const post = posts.find((t) => t.slug === slug);

  const blocks = await fetch(
    `https://notion-api.splitbee.io/v1/page/${post!.id}`
  ).then((res) => res.json());

  return {
    props: {
      blocks,
      post,
      BlogName
    },
  };
}

const BlogPost: React.FC<{ post: Post; blocks: BlockMapType, BlogName: string }> = ({
  post,
  blocks,
  BlogName
}) => {
  if (!post) return null;

  return (
    <div className="content">
      <CustomHead title={post.title} />
      <span style={{ marginBottom: "0" }}>
        <span>
          <Link href='/'>
            <a className='blog_name'>
              <span style={{ fontSize: "30px" }}>{BlogName}</span>
            </a>
          </Link>
        </span>
        <span> </span>
        <span style={{ fontSize: "30px" }}>/</span>
        <span> </span>
        <span style={{ fontSize: "30px" }}>{post.title}</span>
        <br />
        {post.description}
      </span>
      <br /><br />
      <NotionRenderer blockMap={blocks} />
    </div>
  );
};

// export async function getStaticPaths() {
//   const table = await getAllPosts();
//   return {
//     paths: table.map((row) => `/${row.slug}`),
//     fallback: true,
//   };
// }

export default BlogPost;
