import React from 'react';
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import styles from './comments.module.css';

const BASE_URL = 'http://localhost:5000';

const Comments = () => {
  const [filteredEmail, setFilteredEmail] = React.useState('');
  const [comments, setComments] = React.useState([]);
  const [filteredComments, setFilteredComments] = React.useState([]);

  React.useEffect(() => {
    async function fetchComments() {
      try {
        const res = await axios.get(`${BASE_URL}/comments/fetch`);
        setComments(res.data);
      } catch (e) {
        console.log('error while trying to fetch comments', e.response.data);
      }
    }
    fetchComments();
  }, []);

  const handleFilterChange = (e) => {
    setFilteredEmail(e.target.value);
    setFilteredComments(comments.filter((comment) => comment.email === e.target.value));
  };

  const showComments = (commentsToReturn) => {
    return commentsToReturn.map((nameObj) => {
      return (
        <div key={nameObj.message}>
          <div className={styles.namesListContainer}>
            <img
              className={styles.gravatarImage}
              src={`https://www.gravatar.com/avatar/${nameObj.image}`}
            />

            <div className={styles.namesContainer}>
              <p className={styles.emailText}>{nameObj.email}</p>
              <p className={styles.messageText}>{nameObj.message}</p>
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.test}>
          <FontAwesomeIcon icon={faSearch} color='gray' size='1x' className={styles.icon} />

          <input
            type='text'
            placeholder='Filter'
            value={filteredEmail}
            onChange={handleFilterChange}
            className={styles.filterInput}
          />
        </div>
      </div>
      {filteredEmail.length === 0
        ? // start with showing everything
          showComments(comments)
        : // if there's something to filter by, check:
        filteredComments.length > 0
        ? // if the filter is correct, show it
          showComments(filteredComments)
        : // otherwise return empty
          ''}
    </>
  );
};

export default Comments;
