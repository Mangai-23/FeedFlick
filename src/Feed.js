import PostItem from './PostItem';

const Feed = ({ posts }) => {
    console.log(posts.length);
    return (
        <>
        {/* <p>{posts.length}</p> */}
            {posts.map(post => 
                <PostItem key={post.id} post={post} />
            )}
        </>
    )
}

export default Feed