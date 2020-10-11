const imageCol1 = [
  'Boat.jpg',
  'Rise.jpg',
  'Santorini.jpg',
  'Mountain Base.jpg',
  'Sea.jpg',
  'Spring Mountain.jpg',
  'Ice and Fire.jpg',
  'Hidden Fall.jpg',
  'the drop.jpg',
];
const imageCol2 = [
  'The Pale Flowers.jpg',
  'Breakfast.jpg',
  'Purple.jpg',
  'The Lady.jpg',
  'Sandy Beach.jpg',
  'The Ocean Calls.jpg',
  'Cherries.jpg',
  'Tranquility.jpg',
  'Yellow.jpg',
];
const imageCol3 = [
  'Violet.jpg',
  'Snowy Mountain.jpg',
  'Waves.jpg',
  'Tree.jpg',
  'Set.jpg',
  'Blush Out.jpg',
  'Umbrella.JPG',
  'Voyage.JPG',
  'Gold.jpg',
];
gallery = [imageCol1, imageCol2, imageCol3];
function galleryContainer(column) {
  let container = `<div class="art-column">`;
  let imageContainerHTML = `<div class="overlay-container">
        <img src="../assets/art/{{imageFull}}" style="width:100%">
        <div class="overlay">
          <div class="overlay-text">{{imageName}}</div>
        </div>
      </div>`;
  column.forEach((element) => {
    let img = imageContainerHTML
      .replace('{{imageFull}}', element)
      .replace('{{imageName}}', element.replace(/\.[^/.]+$/, ''));
    container += img;
  });
  container += `</div>`;
  return container;
}

function galleryCreate() {
  let container = gallery.map((element) => galleryContainer(element)).join('');
  $('#imageGrid').html(container);
}

$(document).ready(function () {
  galleryCreate();
});
