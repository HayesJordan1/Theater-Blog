import CommentForm from "./commentform";

const Comment = ({comment, replies, currentUserId, deleteComment, setActiveComment, activeComment, parentId = null, addComment }) => {
    const canReply = Boolean(currentUserId);
    const canEdit =   currentUserId === comment.userId;
    const canDelete = currentUserId === comment.userId;
    const createdAt = new Date(comment.createdAt).toLocaleDateString();
    const isReplying = activeComment && activeComment.type === 'replying' && activeComment.id === comment.id;
    const isEditing = activeComment && activeComment.type === 'editing' && activeComment.id === comment.id;
    const replyId = parentId ? parentId : comment.id;
    return(
        <div className="comment">
            <div className="comment-image-container">
            <i class="fa-solid fa-circle-user"></i>
            </div>
            <div className="comment-right-part">
                <div className="comment-content">
                    <div className="comment-author">{comment.username} </div>
                    <div>{createdAt}</div>
                </div>
                <div className="comment-text">{comment.body}</div>
                <div className="comment-actions">
                 {canReply && <div className="comment-action" onClick={() => setActiveComment({
                    id:comment.id, type: 'replying'
                 })}>Reply</div> }
                    { canEdit &&<div className="comment-action" onClick={() => setActiveComment({
                    id:comment.id, type: 'editing'
                 })}>Edit</div> }
                   { canDelete && <div className="comment-action" onClick={() => deleteComment(comment.id)}>Delete</div> }
                </div>
                {isReplying && (
                    <CommentForm submitLabel={"Reply"} handleSubmit={() => addComment(text, replyId)} />
                )}
                {replies.length > 0 && (
                    <div className="replies">
                        {replies.map(reply => (
                            <Comment comment={reply} key={reply.id} replies={[]} currentUserId={currentUserId} parentId={comment.id}                      deleteComment={deleteComment}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Comment