import { format, formatDistanceToNow } from 'date-fns';
import { enIE } from 'date-fns/locale/en-IE';
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import styles from './Post.module.css';

interface Author {
    name: string;
    role: string;
    avatarUrl: string;
}

interface Content {
    type: 'paragraph' | 'link';
    content: string;
}

export interface PostType {
    id: number,
    author: Author,
    publishedAt: Date;
    content: Content[];
}

interface PostProps {
    post: PostType;
}

export function Post({ post }: PostProps) {
    const [comments, setComments] = useState(['Super Cool']);

    const [newCommentText, setNewCommentText] = useState('');

    const isNewCommentEmpty = newCommentText.length === 0;

    const publishedDateFormatted = format(post.publishedAt, "d'th' LLLL 'at' HH:mm", {
        locale: enIE,
    });

    const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
        locale: enIE,
        addSuffix: true
    });

    function handleCreateNewComment(event:FormEvent){
        event.preventDefault();

        setComments([...comments, newCommentText]);
        setNewCommentText('');
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value);
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('Please, fill up this field');

    }

    function deleteComment(commentToDelete: string){
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete;
        })
        setComments(commentsWithoutDeletedOne);
    }


    return (
        <article className={styles.post}>

            <header>
                <div className={styles.author}>
                    <Avatar src={post.author.avatarUrl} />

                    <div className={styles.authorInfo}>
                        <strong>{post.author.name}</strong>
                        <span> {post.author.role}</span>
                    </div>
                </div>
                <time title={publishedDateRelativeToNow} dateTime={post.publishedAt.toISOString()}>
                    {publishedDateFormatted}
                </time>
            </header>

            <div className={styles.content}>
                {post.content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p key={line.content}>{line.content}</p>;
                    } else if (line.type === 'link') {
                        return <p key={line.content}><a href="#">{line.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Leave your feedback</strong>

                <textarea
                    name='comment'
                    placeholder='Leave your comment'
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />
                <footer>
                    <button 
                        type='submit' 
                        disabled={isNewCommentEmpty}>
                        Publish
                    </button>
                </footer>

            </form>
            <div className={styles.commentList}>
                {comments.map(comment => { 
                    return( <Comment 
                    key={comment}
                    content={comment}
                    onDeleteComment={deleteComment}
                    />
                    )
                })}
            </div>
        </article>
    );
}
