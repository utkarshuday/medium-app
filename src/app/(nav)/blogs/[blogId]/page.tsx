export default function Blog({
  params: { blogId },
}: {
  params: { blogId: string };
}) {
  return <div>Blog {blogId}</div>;
}
