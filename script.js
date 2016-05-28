function requestPermission(){
  Notification.requestPermission();
}

function checkPermission(){
  if (Notification.permission){
    // Firefox
    console.log(Notification.permission);
  } else {
    // Chrome
    console.log((new Notification("check")).permission);
  }
}

function showAlert(){
  var notification = new Notification('Sit up straight!', {
        tag: 'sit-up-straight',
        body: 'Hey bro, sit up straight!!',
        iconUrl: 'http://raphaelgmelo.github.io/sit-up-straight/approves.jpg', // Firefox
        icon: 'http://raphaelgmelo.github.io/sit-up-straight/approves.jpg', // Chrome
      });

  notification.onclick(function(){
    notification.close();
    // chrome only
    // If the window is minimized, restore the size of the window
    window.open().close();
    window.focus();
  });

}


$(function() {

  if (window.Notification){

    requestPermission();

    var interval = 60 * 3000;

    setInterval(function() {
      checkPermission();
      showAlert();
    }, interval);

  }

});
