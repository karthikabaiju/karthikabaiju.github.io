const imageCol1 = [
  'Into the Unknown.jpg',
  'Journey Begin.jpg',
  'Stroll.jpg',
  'Rise.jpg',
  'Santorini.jpg',
  'Mountain Base.jpg',
  'Sea.jpg',
  'Spring Mountain.jpg',
  'Ice and Fire.jpg',
  'Hidden Fall.jpg',
  'Drop.jpg',
];
const imageCol2 = [
  'The Pale Flowers.jpg',
  'Surprise.jpg',
  'Sensual.jpg',
  'Breakfast.jpg',
  'Purple.jpg',
  'The Lady.jpg',
  'Sandy Beach.jpg',
  'Ocean Call.jpg',
  'Cherries.jpg',
  'Tranquility.jpg',
  'Yellow.jpg',
];
const imageCol3 = [
  'Violet.jpg',
  'Safe and Sound.jpg',
  'The Colors of Sky.jpg',
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
years = ['2020', '2019'];

function galleryContainer(element) {
  let container = `<div>`;
  let imageContainerHTML = `<div class="overlay-container">
        <img src="../assets/art/{{imageFull}}.jpg" style="width:100%">
        <div class="overlay">
          <div class=overlay-text>
            <div class=overlay-text-name>"{{imageName}}"</div>
            <div class=overlay-text-date>{{date}}</div>
            <br>
            <div class=overlay-text-description>{{imageDescription}}</div>
          </div>
        </div>
      </div>`;
    let img = imageContainerHTML
      .replace('{{imageFull}}', element.Art)
      .replace('{{imageName}}', element.Art.replace(/\.[^/.]+$/, ''))
      .replace('{{date}}', element.CreatedMonth)
      .replace('{{imageDescription}}', element.Detail);
    container += img;
  
  container += `</div>`;
  return container;
}

function galleryCreate() {
  var excel_file_API = './assets/art/Inventory/Inventory.csv';
  $.ajax({
    type: 'GET',
    url: excel_file_API,
    dataType: 'text',
    error: function (e) {
        alert('An error occurred while processing API calls');
        console.log("API call Failed: ", e);
    },
    success: function (data) {
        var jsonData = $.csv.toObjects(data);
        var container = '';
        container = years.map(function(year) {
          let yearContainer= '';
          console.log(year);
          let yearArray = jsonData.filter((element) => element.CreatedMonth.split('/')[0] == year);
          console.log(yearArray);
          yearContainer = yearContainer + '<div class="year">{{year}}</div>';
          yearContainer = yearContainer + '<div class="portfolio" id={{year}}>'
          yearContainer = yearContainer.replace('{{year}}', year);
          yearContainer = yearContainer + yearArray.map((element) => galleryContainer(element)).join('') + '</div>';
          return yearContainer
        })
        $('#imageGrid').html(container);
      
    } // end: Ajax success API call

}); // end: of Ajax call
}

$(document).ready(function () {
  galleryCreate();
});
