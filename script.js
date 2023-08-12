const library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

const numberOfBooksRead = () => {
  // write your code here
	let   numberOfBooks=0;
	for(const book of library){
		if(book.readingStatus === true);
		numberOfBooks++;
	}
	return  numberOfBooks;
};

// Do not change the code below

alert(numberOfBooksRead());
