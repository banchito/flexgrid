const dataArray = [
  {
    id: 1,
    title: 'LOTR',
    text: 'One Ring to rule them all, One Ring to find them, One Ring to bring them all and in the darkness bind them',
  },
  {
    id: 2,
    title: 'STAR WARS',
    text: 'May the Force be with you',
  },
  {
    id: 3,
    title: 'THE WIZARD OF OZ',
    text: `There's no place like home`,
  },
  {
    id: 4,
    title: 'Another Movie',
    text: `Hello World`,
  },
];

const buttonsRef = document.getElementsByClassName('btn');

const createCard = (item) => {
  const card = document.createElement('div');
  card.className = 'card';

  const cardHeader = createCardHeader(item.title, 'card-header');
  const cardBody = createCardBody(item.text, 'card-body');
  const cardFooter = createCardFooter(['card-footer', 'btn'], item.id);

  card.appendChild(cardHeader);
  card.appendChild(cardBody);
  card.appendChild(cardFooter);
  card.setAttribute('id', item.id);

  document.querySelector('.grid').appendChild(card);
};

const createCardHeader = (title, cssClass) => {
  const header = document.createElement('div');
  const headerTitle = document.createTextNode(title);
  header.className = cssClass;

  header.appendChild(headerTitle);
  return header;
};

const createCardBody = (text, cssClass) => {
  const body = document.createElement('div');
  const bodyText = document.createTextNode(text);
  body.className = cssClass;
  body.appendChild(bodyText);

  return body;
};

const createCardFooter = (classes) => {
  const footer = document.createElement('div');
  const button = document.createElement('button');
  const buttontext = document.createTextNode('Watched');

  footer.className = classes[0];
  button.className = classes[1];

  button.appendChild(buttontext);
  footer.appendChild(button);

  return footer;
};

dataArray.forEach((item) => createCard(item));

const buttonArray = Array.from(buttonsRef);

buttonArray.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    const selectedCard = event.target.closest('.card');
    selectedCard.remove();
  });
});
