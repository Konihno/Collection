const collection = [
	{
		picture: "Assets/imgg-roni-collection.jpeg",
		name: "Name: Ronaldinho",
		age: "Age: 43",
		club: "Club: Retirement",
		position: "Position: Midfielder",
		nationality: "Nationality: Brasilian",
	},
	{
		picture: "Assets/n-golo-kante.jpeg",
		name: "Name: N'Golo Kanté",
		age: "Age: 32",
		club: "Club: Al-Ittihad",
		position: "Position: Midfielder",
		nationality: "Nationality: French",
	},
	{
		picture: "Assets/robinho-collection.webp",
		name: "Name: Robinho",
		age: "Age: 39",
		club: "Club: Retirement",
		position: "Position: Attacker",
		nationality: "Nationality: Brasilian",
	},
	{
		picture: "Assets/modric-collection.jpeg",
		name: "Name: Luka Modric",
		age: "Age: 38",
		club: "Club: Real Madrid",
		position: "Position: Midfielder",
		nationality: "Nationality: Croatian",
	},
	{
		picture: "Assets/hakim-zyiech.jpeg",
		name: "Name: Hakim Ziyech",
		age: "Age: 30",
		club: "Club: Galatasaray SK",
		position: "Position: Midfielder",
		nationality: "Nationality: Moroccan",
	},
	{
		picture: "Assets/portrait-kylian-mbappe.jpg",
		name: "Name: Kylian Mbappé",
		age: "Age: 24",
		club: "Club: Paris Saint-Germain",
		position: "Position: Attacker",
		nationality: "Nationality: French",
	},
	{
		picture: "Assets/pogba-collection.jpeg",
		name: "Name: Paul Pogba",
		age: "Age: 30",
		club: "Club: Juventus",
		position: "Poistion: Midfielder",
		nationality: "Nationality: French",
	},
	{
		picture: "Assets/robben - collection.jpeg",
		name: "Name: Arjen Robben",
		age: "Age: 39",
		club: "Club: Retirement",
		position: "Position: Attacker",
		nationality: "Nationality: Dutch",
	},
	{
		picture: "Assets/marcelo-collection.jpeg",
		name: "Name: Marcelo",
		age: "Age: 35",
		club: "Club: Fluminense FC",
		position: "Position: Defender",
		nationality: "Nationality: Brasilian",
	},
	{
		picture: "Assets/juninho-collection.webp",
		name: "Name: Juninho",
		age: "Age: 48",
		club: "Club: Retirement",
		position: "Position: Midfielder",
		nationality: "Nationality: Brasilian",
	},

];

let section1 = document.querySelector('.section1');

let section2 = document.querySelector('.section2');

function createCard(parent, elementType, ClassName, textContent, src, alt) {

	let element = document.createElement(elementType);

	if (ClassName) {
		element.classList.add(ClassName);
	}
	if (textContent) {
		element.textContent = textContent;
	}
	if (src) {
		element.setAttribute('src', src);
	}
	if (alt) {
		element.setAttribute('alt', alt);
	}

	parent.appendChild(element);

}

collection.forEach(function (objet, index) {

	let section = document.createElement('section');

	section.classList.add('card');

	createCard(section, 'img', 'card__img', null, objet.picture, 'picture of the player');

	createCard(section, 'div', 'card__name', objet.name);

	createCard(section, 'div', 'card__age', objet.age);

	createCard(section, 'div', 'card__club', objet.club);

	createCard(section, 'div', 'card__position', objet.position);

	createCard(section, 'div', 'card__nationality', objet.nationality);


	if (index % 2 === 0) {
		section1.appendChild(section);
	}
	else {
		section2.appendChild(section);
	}
});
 