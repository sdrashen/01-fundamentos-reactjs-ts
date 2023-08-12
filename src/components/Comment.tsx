import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react';

export function Comment({ content, onDeleteComment }) {

  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
    /**A prop aqui virou a própria função */
  }

  function handleLikeComment() {
    setLikeCount((likeCountMostRecentValue) => { /**Aqui foi chamado assim mas pode ser o nome que vc quiser */
      return likeCountMostRecentValue +1
    });
  }
  /*Essa função aumenta o número de likes de dois em dois.
  *ela foi criada mais para explicar closures
  */

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/sdrashen.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Sabrina Drashen</strong>
              <time title="11 de Maio às 08:13h" dataTime="2022-05-11 08:13:30">Cerca de 1h atrás</time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24}/>
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
          {/* <button onClick={() => setLikeCount(likeCount + 1)}> */}
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}