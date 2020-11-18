let book1, book2, book3, book4, book5;
let dany, jon
let b1, b2, b3, b4, b5
let bgColor;
let selectBook, houseStr
let rand
let randNew

function preload() { //api used: https://anapioficeandfire.com
  book1 = loadJSON("https://anapioficeandfire.com/api/books/1");
  book2 = loadJSON("https://anapioficeandfire.com/api/books/2");
  book3 = loadJSON("https://anapioficeandfire.com/api/books/3");
  book4 = loadJSON("https://anapioficeandfire.com/api/books/4");
  book5 = loadJSON("https://anapioficeandfire.com/api/books/5");
  book6 = loadJSON("https://anapioficeandfire.com/api/books/6");
  book7 = loadJSON("https://anapioficeandfire.com/api/books/7");
  book8 = loadJSON("https://anapioficeandfire.com/api/books/8");
  book9 = loadJSON("https://anapioficeandfire.com/api/books/9");
  book10 = loadJSON("https://anapioficeandfire.com/api/books/10");
  book11 = loadJSON("https://anapioficeandfire.com/api/books/11");
  book12 = loadJSON("https://anapioficeandfire.com/api/books/12");

  dany = loadJSON("https://www.anapioficeandfire.com/api/characters/1303")
  jon = loadJSON("https://www.anapioficeandfire.com/api/characters/583")
  houseT = loadJSON("https://anapioficeandfire.com/api/houses/378")

  rand = floor(random(1, 444)).toString() //makes float to str
  houseStr = "https://anapioficeandfire.com/api/houses/"
  house1 = loadJSON(houseStr + rand);

  b1 = loadImage('covers/b1.jpg')
  b2 = loadImage('covers/b2.jpg')
  b3 = loadImage('covers/b3.jpg')
  b4 = loadImage('covers/b4.jpg')
  b5 = loadImage('covers/b5.jpg')
  d = loadImage('char/Dany.png')
  j = loadImage('char/Jon.png')
  tar = loadImage('House/tar.png')
  no = loadImage('House/no.png')
  //w = loadImage('char/ww.png')


}

function setup() {
  createCanvas(windowWidth, 2000);

  selectBook = createSelect();
  selectBook.position(270, 135)
  selectBook.option('Book 1');
  selectBook.option('Book 2');
  selectBook.option('Book 3');
  selectBook.option('Book 4');
  selectBook.option('Book 5');
  selectBook.option('Unreleased');

  selectChar = createSelect();
  selectChar.position(930, 135)
  selectChar.option('Daenerys Targaryen');
  selectChar.option('Jon Snow');
  //selectChar.option('White Walker');

  selectHouses = createSelect()
  selectHouses.position(1380, 135)
  selectHouses.option('House Targaryen');
  selectHouses.option('Random');


}
function draw() {
  background('#fcfcfc');
  fill('black');
  textFont('Georgia')

  push()
  textAlign(CENTER)
  textSize(32)

  text("Your Most Incomplete Guide to Game of Thrones", windowWidth / 2, 50)
  textSize(18)
  text("API by https://anapioficeandfire.com", windowWidth / 2, 80)
  pop()
  textSize(22);
  text("Select book here:", 90, 150)
  selectBooks()
  textSize(22);
  text("Main Characters here:", 700, 150)
  text("Houses:", 1290, 150)
  selectChars()
  selectHouse()

}

function selectHouse() {
  let h = selectHouses.value()

  push()
  translate(-30, 0)
  if (h == "House Targaryen") {
    text("Name: " + getHouse(houseT), 1320, 190)
    text("Region: " + getRegion(houseT), 1320, 220)
    text("Words: " + getWords(houseT), 1320, 250)
    image(tar, 1320, 300, 250, 280)
  }

  if (h == "Random") {
    text("Name: " + getHouse(house1), 1320, 190)
    text("Region: " + getRegion(house1), 1320, 220)
    text("Words: " + getWords(house1), 1320, 250)
    image(no, 1300, 300, 350, 280)
textSize(16)
    text("Refresh page to get a new House", 1320, 290)


  }

  pop()
}

function selectChars() {
  push()
  translate(-70, 0)
  let c = selectChar.value()
  if (c == "Daenerys Targaryen") {
    text("Name: " + getName(dany), 770, 190)
    text("Played by: " + getActor(dany), 770, 220)
    image(d, 770, 270) //https://galcon.fandom.com/wiki/Daenerys_Valor

    // let arr = getTitles(dany)
    // let str = arr.toString()
    // let splitTitles = split(str,',')
    // var len = splitTitles.length
    //   for (var i=0; i<len; i++){splitTitles[i] = splitTitles[i]}
    // return splitTitles.join('\r\n'); 
    //was trying to do a return format for a long line of JSON info
  }


  if (c == "Jon Snow") {
    text("Name: " + getName(jon), 770, 190)
    text("Played by: " + getActor(jon), 770, 220)
    image(j, 770, 270) //https://www.linternaute.com/television/serie-tv/1789299-qui-va-mourir-qui-va-gagner-nos-pronostics-sur-game-of-thrones-saison-8/1789317-jon-snow
  }

  // if(c == "White Walker"){
  //     text("Name: " + getName(jon),770,190)
  //   text("Played by: " + getActor(jon), 770,220) 
  //   image (j, 770,270) //https://www.linternaute.com/television/serie-tv/1789299-qui-va-mourir-qui-va-gagner-nos-pronostics-sur-game-of-thrones-saison-8/1789317-jon-snow
  // } //didnt find the white walker in the database
  pop()

}



function selectBooks() {
  push()   //images from Amazon.com
  translate(30, 90);
  let b = selectBook.value()
  textFont('Georgia')
  if (b == 'Book 1') {
    text("The first book of GoT is called: " + getBook(book1), 60, 100);
    image(b1, 100, 150, 230, 350)
  }
  if (b == 'Book 2') {
    text("The second book of GoT is called: " + getBook(book2), 60, 100);
    image(b2, 100, 150, 230, 350)
  }
  if (b == 'Book 3') {
    text("The third book of GoT is called: " + getBook(book3), 60, 100);
    image(b3, 100, 150, 230, 350)
  }
  if (b == 'Book 4') {
    text("The fourth book of GoT is called: " + getBook(book4), 60, 100);
    image(b4, 100, 150, 230, 350)
  }
  if (b == 'Book 5') {
    text("The fifth book of GoT is called: " + getBook(book5), 60, 100);
    image(b5, 100, 150, 230, 350)
  }
  if (b == 'Unreleased') {
    text("The yet-to-release books of GoT are called: ", 60, 100);
    text(getBook(book6) + ",", 60, 150);
    text(getBook(book7) + ", ", 60, 180);
    text(getBook(book8) + ",", 60, 210);
    text(getBook(book9) + ", ", 60, 240);
    text(getBook(book10) + ",", 60, 270);
    text(getBook(book11) + ",", 60, 300);
    text("and, " + getBook(book12) + ". ", 60, 330);
  }
  pop()
}


function getBook(data) {
  let book = data.name;
  return book;
}

function getName(data) {
  let name = data.name
  return name
}

function getActor(data) {
  let actor = data.playedBy
  return actor
}

function getTitles(data) {
  let titles = data.titles
  return titles
}

function getHouse(data) {
  let house = data.name
  return house
}

function getWords(data) {
  let words = data.words
  return words
}

function getRegion(data) {
  let region = data.region
  return region
}


