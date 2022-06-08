import modalFunc from './modal.js'

export class Challenge {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.rating = data.rating;
    this.image = data.image;
    this.type = data.type;
    this.description = data.description;
    this.minParticipants = data.minParticipants;
    this.maxParticipants = data.maxParticipants;
  }

  render() {
    // Create elements for challenge card
    let challengesItem = document.createElement('li');
    challengesItem.classList.add('challenges-item');

    let challengesPicture = document.createElement('div')
    challengesPicture.classList.add('challenge-picture');
    challengesPicture.style.backgroundImage = `url(${this.image})`;

    let challengesIconContainer = document.createElement('div');
    challengesIconContainer.classList.add('challenges-icon');

    let challengesIcon = document.createElement('i');
    challengesIcon.className = this.type == 'online' ? 'icon fa-solid fa-laptop' : 'icon fa-solid fa-house';


    let challengeTitle = document.createElement('h3');
    challengeTitle.classList.add('challenge-title');
    challengeTitle.innerHTML = this.title;

    let challengeMeta = document.createElement('div');
    challengeMeta.classList.add('challenge-meta');

    let challengeRating = document.createElement('ul');
    challengeRating.classList.add('challenge-rating');

    // Create elements for rating stars
    for (let i = 0; i < Math.floor(this.rating); i++) {
      let challengeRatingStar = document.createElement('li');
      challengeRatingStar.classList.add('challenge-rating-star');
      challengeRatingStar.classList.add('on');
      challengeRating.appendChild(challengeRatingStar);

    };

    for (let i = Math.floor(this.rating); i < 5; i++) {
      let challengeRatingStar = document.createElement('li');
      challengeRatingStar.classList.add('challenge-rating-star');
      challengeRatingStar.classList.add('off');
      challengeRating.appendChild(challengeRatingStar);
    };

    let challengeSize = document.createElement('small');
    challengeSize.classList.add('challenge-size');
    challengeSize.innerHTML = this.type === 'onsite' ? `${this.minParticipants}-${this.maxParticipants} participants` : `${this.minParticipants}-${this.maxParticipants} participants (networked)`;

    const maxTextLength = 50; //specify the max lenth of displayed text
    let challengeDescription = document.createElement('p');
    challengeDescription.classList.add('challenge-description');
    if (this.description.length > maxTextLength) {
      challengeDescription.innerHTML = this.description.substring(0, maxTextLength) + "...";
    } else {
      challengeDescription.innerHTML = this.description;
    }


    let challengeCta = document.createElement('a');
    challengeCta.classList.add('challenge-cta');
    challengeCta.innerText = this.type === 'onsite' ? "Book the room" : "Take challenge online";

    challengeCta.addEventListener('click', () => {
      modalFunc(this.id, this.title, this.minParticipants, this.maxParticipants);
    });

    // Render/append on site
    challengesItem.appendChild(challengesPicture);
    // challengesItem.appendChild(challengesIconContainer);
    challengesPicture.appendChild(challengesIcon);
    challengesItem.appendChild(challengeTitle);
    challengesItem.appendChild(challengeMeta)
    challengeMeta.appendChild(challengeRating);
    challengeMeta.appendChild(challengeSize);
    challengesItem.appendChild(challengeDescription);
    challengesItem.appendChild(challengeCta);

    return challengesItem;
  }
}