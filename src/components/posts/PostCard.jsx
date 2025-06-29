import { PostActions } from "./PostActions";
import { PostBody } from "./PostBody";
import { PostComments } from "./PostComments";
import { PostHeader } from "./PostHeader";

export const PostCard = ({ post }) => {
  return (
    <article className="card mt-6 lg:mt-8">
      <PostHeader post={post} />
      <PostBody />
      <PostActions />
      <PostComments />
    </article>
  );
};
