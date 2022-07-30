import { useEffect, useState } from "react"
import { getComments as getCommentsApi, createComment as createCommentApi, deleteComment as deleteCommentApi } from "../../api"
import Comment from "./comment"
import CommentForm from "./commentform"
const Comments = ({currentUserId}) => {
    const [backendComments, setbackendComments] = useState([])
    const [activeComment, setActiveComment] = useState(null)
    const rootComments = backendComments.filter((backendComment) => backendComment.parentId === null);
const getReplies = commentId => {
    return backendComments.filter(backendComment => backendComment.parentId === commentId).sort((a,
        b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
};
const addComment = (text, parentId) => {
    console.log('addComment', text, parentId)
    createCommentApi(text, parentId).then(comment => {
        setbackendComments([comment, ...backendComments])
    })
};
const deleteComment = (commentId) => {
   if (window.confirm('Warning: This action can not be undone')) {
    deleteCommentApi(commentId).then(() => {
        const updatedBackendComments = backendComments.filter(backendComment => backendComment.id !== commentId)
        setbackendComments(updatedBackendComments)
    })
   }
}
    useEffect(() => {
    getCommentsApi().then((data) =>{
    setbackendComments(data)
    });
    }, []);
    return(
        <div className="comments">
            <h3 className="comments-title">Comments</h3>
            <div className="comment-form-title">Write Comment</div>
            <CommentForm submitLabel="write" handleSubmit={addComment} />
            <div className="comments-container">
                {rootComments.map(rootComment =>(
                    <Comment key={rootComment.id}
                     comment={rootComment} 
                     replies={getReplies(rootComment.id)}
                     currentUserId={currentUserId}
                     deleteComment={deleteComment}
                     activeComment={activeComment}
                     setActiveComment={setActiveComment}
                     />
                ))}
            </div>
        </div>
    )
}

export default Comments