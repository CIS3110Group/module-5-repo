var images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"]; //your urls
var caption = ["$17,995", "$18,500", "$17,500", "$16,999", "$26,000", "$26,500"];
var description = [
                    "Beautiful black Cayman S available in Rancho Cucomonga.",
                    "Exelent example of a Subaru BRZ in classic BRZ Blue available for sale in Claremont.",
                    "Unbeatable deal on this used black Cayman S available in Diamond Bar.",
                    "Subaru BRZ with rear lip in perfect condition with low miles available in Riverside.",
                    "Aggressively optioned Black Cayman S with matte black hood available in West Hollywood.",
                    "Brand new blue Subaru BRZ tS available at STGAuto of Ontario."
];
console.log(images);
var url ; //assign later, make scope global to script
for(var i=0; i < images.length; i++) //establish for, 6 items, last index place is 5, if you recall
{
  var gridDiv = document.getElementById("gridDiv");
  var card = document.createElement("div");
  var cardBody = document.createElement("div");
  var imgInDiv = document.createElement("img");
  var cardTitle = document.createElement("h5");
  var cardContent = document.createTextNode(caption[i]);
  var favorite = document.createElement("input");
  var unfavorite = document.createElement("input");
  var textid = caption[i];
  var link = document.createElement("a");



  console.log("image in iteration is " + images[i]);
  console.log(caption[i]);
  console.log(description[i]);
  url = "C:\\Users\\jrivy.DESKTOP-E7SO70T\\Dropbox\\School\\CIS_3110\\Phase_4_Assignment\\" + images[i];
  urlOfDetailPage = "detailPage.html?" + "img=" + url + "&cpt=" + caption[i] + "&des=" + description[i]; //where you will navigate, once you press the image, will send the detail page the img to analyze
  
  gridDiv.setAttribute("style", "display: grid; grid-gap: 3px; grid-template-columns: 33% 33% 33%");
  card.setAttribute("class", "card");
  card.setAttribute("style", "background: grey;");
  cardBody.setAttribute("class", "card-body");
  favorite.setAttribute("id", [i]);
  cardTitle.appendChild(cardContent);
  card.appendChild(cardTitle);
  imgInDiv.setAttribute("class", "card-img-top"); //fit to div
  imgInDiv.setAttribute("src", url); //src to url, above, determined by for i
  imgInDiv.setAttribute("alt", "Car image");
  link.setAttribute("href", urlOfDetailPage); // so you'll navigate to the url

  link.appendChild(imgInDiv); //make the image the link
  card.appendChild(link);//place the link inside of each div
  console.log(textid);

  $(favorite).attr({
    "type" : "button",
    "id" : [i],
    "value" : "Make Favorite",
    "name" : caption[i],
    "onclick" : "console.log(i)"
  });

  unfavorite.setAttribute("type", "button");
  unfavorite.setAttribute("id", "unfav");

  $(unfavorite).attr({
    "type" : "button",
    "id" : "unfav" + [i],
    "value" : "Unfavorite"
  });

  $(card).append(favorite, unfavorite);
  gridDiv.appendChild(card);
  document.body.appendChild(gridDiv);//then appd to body, document.body.appendChild


}
