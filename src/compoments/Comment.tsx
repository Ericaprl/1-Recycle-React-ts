import { ThumbsUp, Trash } from '@phosphor-icons/react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';

// deleteComment e a funcao no Compomente Pai

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({content, onDeleteComment} : CommentProps) {

  const [likeCount, setLikeCount] = useState(0);

  function handleDeletComment(){
    onDeleteComment(content); 
  }

  function handleLikeComment(){
    setLikeCount((state) =>{
      return state + 1;
    });
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/116949403?v=4" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Erica Pereira</strong>
              <time title='4th February at 3:05pm' dateTime='2025-02-04 15:02:20'>
                About 1h ago
              </time>
            </div>
            <button onClick={handleDeletComment} title='Delete comment'>
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment} >
            <ThumbsUp className={styles.thumbsUp} />
            Like 
            <span>{likeCount}</span>
          </button>
        </footer>
      </div>


    </div>
  )
}



