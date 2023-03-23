const commentTemplate = document.querySelector('.social__comment');
const commentsList = document.querySelector('.social__comments');
const bigPicture = document.querySelector('.big-picture');
const countLikes = bigPicture.querySelector('.likes-count');
const photoImage = bigPicture.querySelector('.big-picture__img img');
const photoTitle = bigPicture.querySelector('.social__caption');
const loaderButton = document.querySelector('.comments-loader');
const commentCount = document.querySelector('.social__comment-count');

const preparationComments = (min, max, comments) => {

  comments.slice(min, max).forEach((comment) => {
    const newComment = commentTemplate.cloneNode(true);
    const userPhoto = newComment.querySelector('img');
    const userMessage = newComment.querySelector('.social__text');

    commentCount.textContent = `${Math.min(comments.length, max)} из ${comments.length} комментариев`;
    userPhoto.src = comment.avatar;
    userPhoto.alt = comment.name;
    userMessage.textContent = comment.message;

    commentsList.appendChild(newComment);
  });
};

const renderComments = (comments) => {
  commentsList.innerHTML = '';
  let min = 0;
  let max = 5;

  loaderButton.addEventListener('click', () => {
    min = max;
    max = max + 5;

    preparationComments(min, max, comments);
  });

  preparationComments(min, max, comments);
};


const renderBigPicture = (url, description, comments, likes) => {
  photoImage.src = url;
  photoImage.alt = description;
  countLikes.textContent = likes;
  photoTitle.textContent = description;

  renderComments(comments);
};

export {renderBigPicture};
