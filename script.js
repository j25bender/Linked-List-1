/*Listeners*/
$('.enter-button').on('click', function(){
  var websiteTitle = $('#website-title').val();
  var websiteUrl = $('#website-url').val(); 
  newCard(websiteTitle, websiteUrl); 
  disableEnter();
  countRead();
});

$('section').on('click', function(){
  countRead();
})

$('input').on('keyup', disableEnter)

/*Functions*/
function addReadClass() {
  readButton();
  readSavedWebsite();
  readUrl();
};

function countRead(){
  var clickedRead = $('.read-website').length;
  var totalCount = $('.bookmark-buttons#read-button').length;
  var unclickedRead = totalCount - clickedRead;
  $('.toRead').text(unclickedRead);
  $('.doneReading').text(clickedRead);
  $('.myTotal').text(totalCount);
}

function disableEnter() {
  if ($('#website-title').val()!=="" && $('#website-url').val()!=="") {
    $('#enter-button').prop('disabled', false);
  } else {
    $('#enter-button').prop('disabled', true);
  }
}

function newCard(title, url) {
  $( ".bookmark-container" ).prepend( `
    <div class="saved-website" id="saved-website" >
      <h2>${title}</h2>
      <div class="url-section">
        <a class="saved-url-link" id="saved-url-link" href=${url} alt="Website Description" >${url}</a>
      </div>
      <div>
        <input type="submit" name="read" value="Read" class="bookmark-buttons" id="read-button" />
        <input type="submit" name="delete" value="Delete" class="bookmark-buttons delete-button" />
      </div>
    </div>
  `
 );
  addReadClass();
  removeCard();
};

function readButton() {
  var readButton = $('#read-button').on('click', function(event) {
    readButton.hasClass('read-button')?
    ($(event.target).closest(readButton.removeClass('read-button'))):
    ($(event.target).closest(readButton.addClass('read-button')));
  })
}

function readSavedWebsite() {
  var savedWebsite = $('#saved-website');
  $('#read-button').on('click', function(event) {
    savedWebsite.hasClass('read-website')?
    ($(event.target).closest(savedWebsite.removeClass('read-website'))):
    ($(event.target).closest(savedWebsite.addClass('read-website')));
  })
}

function readUrl() {
  var readUrl = $('#saved-url-link');
  $('#read-button').on('click', function(event) {
    readUrl.hasClass('read-url-link')?
    ($(event.target).closest(readUrl.removeClass('read-url-link'))):
    ($(event.target).closest(readUrl.addClass('read-url-link')));
  })
}

function removeCard(){
  $('.delete-button').on('click', function(event) {
  $(event.target).closest('.saved-website').remove();
 });
}
