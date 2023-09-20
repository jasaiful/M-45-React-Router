import { useLoaderData, useNavigate, useParams } from "react-router-dom";


const PostDetail = () => {
    const navigate = useNavigate();
    const {postId} =useParams();
    const post = useLoaderData();
    const { id, title, body } = post;

    console.log(postId);

    const handleGoBack = () => {
        navigate(-1);
    }

    return (
        <div>
            <h3>Post details about: {id} </h3>
            <h5>{title}</h5>
            <p><small>{body}</small></p>
            <button onClick={handleGoBack}>Go Back</button>

        </div>
    );
};

export default PostDetail;