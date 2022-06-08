import modalFunc from './src/modules/modal.js'
class Challenge {
    constructor(data) {
        this.title = data.title;
        this.rating = data.rating;
        this.image = data.image;
        this.description = data.description;
        this.minParticipants = data.minParticipants;
        this.maxParticipants = data.maxParticipants;
    }

    render() {
        // Create elements for challenge card
        let challengesItem = document.createElement('li');
        challengesItem.classList.add('challenges-item');

        let challengesPicture = document.createElement('img')
        challengesPicture.classList.add('challenge-picture');
        challengesPicture.src=this.image;

        let challengeTitle = document.createElement('h3');
        challengeTitle.classList.add('challenge-title');
        challengeTitle.innerHTML = this.title;

        let challengeMeta = document.createElement('div');
        challengeMeta.classList.add('challenge-meta');

        let challengeRating = document.createElement('ul');
        challengeRating.classList.add('challenge-rating');

        // Create elements for rating stars
        for(let i = 0; i < Math.floor(this.rating); i++) {
            let challengeRatingStar = document.createElement('li');
            challengeRatingStar.classList.add('challenge-rating-star');
            challengeRatingStar.classList.add('on');
            challengeRating.appendChild(challengeRatingStar);
        };

        for(let i = Math.floor(this.rating); i < 5; i++) {
            let challengeRatingStar = document.createElement('li');
            challengeRatingStar.classList.add('challenge-rating-star');
            challengeRatingStar.classList.add('off');
            challengeRating.appendChild(challengeRatingStar);
        };

        let challengeSize = document.createElement('small');
        challengeSize.classList.add('challenge-size');
        challengeSize.innerHTML = `${this.minParticipants}-${this.maxParticipants} participants`;

        let challengeDescription = document.createElement('p');
        challengeDescription.classList.add('challenge-description');
        const maxTextLength=50; //specify the max lenth of displayed text
        if (this.description.length>maxTextLength) {
            challengeDescription.innerHTML = this.description.substring(0,maxTextLength)+"...";
        } else {
            challengeDescription.innerHTML = this.description;
        }

        let challengeCta = document.createElement('a');
        challengeCta.classList.add('challenge-cta');
        challengeCta.innerHTML = "Book the room";

        challengeCta.addEventListener('click', () => {
            modalFunc(this.title, this.minParticipants, this.maxParticipants);
        });

        // Render/append on site
        challengesItem.appendChild(challengesPicture);
        challengesItem.appendChild(challengeTitle);
        challengesItem.appendChild(challengeMeta)
        challengeMeta.appendChild(challengeRating);
        challengeMeta.appendChild(challengeSize);
        challengesItem.appendChild(challengeDescription);
        challengesItem.appendChild(challengeCta);

        return challengesItem;
    }
}

//document.querySelector('.index').href = "index.html";
document.querySelector('.play-online').href = "challenges.html";
document.querySelector('.play-onsite').href = "challenges.html";
document.querySelector('.hero-cta-online').href = "challenges.html";
document.querySelector('.hero-cta-onsite').href = "challenges.html";
document.querySelector('.challenges-cta-online').href = "challenges.html";
document.querySelector('.challenges-cta-onsite').href = "challenges.html";

const load = async () => {
    const url = 'https://lernia-sjj-assignments.vercel.app/api/challenges';

        try {
            const response = await fetch(url);
            const data = await response.json();
            const challenges = data.challenges;
            return challenges;
        } catch (error) {
            console.log(error);
        }
};

const render = async () => {
    const data = await load();

    function compare(a, b) {
        if (a.rating < b.rating) {
            return 1;
        }
        if (a.rating > b.rating) {
            return -1;
        }
        return 0;
    }

    const ratingsArray = data.sort(compare);
    ratingsArray.splice(3)

    const container = document.querySelector('.challenges-list-index');
    ratingsArray.forEach(challengeData => {
        const challengeInstance = new Challenge(challengeData);
        const challengeItem = challengeInstance.render()
        container.appendChild(challengeItem);
    });
};

document.querySelector('.main-nav-toggle').addEventListener('click', () => {
    document.querySelector('.main-nav').classList.toggle('open');
  });

render();