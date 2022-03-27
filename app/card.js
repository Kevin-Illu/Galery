export const Card = (likes, links, urls, user) => {

    const { download } = links;
    const { small } = urls;
    const { username, bio, instagram_username } = user;

    const card = document.createElement('div')
    card.classList.add('card', 'animate__animated', 'animate__fadeInDown')
    card.innerHTML = `
    <img class="card-img" src="${small}" alt="image by ${username}" />
    <footer>
        <div class="description">
            <div class="name">
                <p class="username">${username}</p>
                <span class="instagram_username">@${!instagram_username ? 'anonymous':instagram_username}</span>

            </div>
            <div class="likes">
                <span>
                    <img src="./assets/favorite_black_24dp.svg" alt="like_icon">
                    ${likes}
                </span>
            </div>
        </div>

        <div class="options">
            <a class="btn" href="${download}" target="_blank">Download</a>
            <div class="has-tooltip">
                <button class="btn-tooltip">bio</button>
                <p class="tooltip">${!!bio ? bio : 'no hay nada que leer xd'}</p>
            </div>
        </div>
    </footer>

    `    
    return card;
};
