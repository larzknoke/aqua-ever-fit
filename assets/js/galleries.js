
$( document ).ready(function() {

  // Schwimmbad-Gallery
  $("#BadGallery").on('click', function() {

    $.fancybox.open([
      {
        src  : 'assets/img/galleries/schwimmbad/1.jpg',
        opts : {
          caption : 'Schwimmbad #1'
        }
      },
      {
        src  : 'assets/img/galleries/schwimmbad/2.jpg',
        opts : {
          caption : 'Schwimmbad #2'
        }
      },
      {
        src  : 'assets/img/galleries/schwimmbad/3.jpg',
        opts : {
          caption : 'Schwimmbad #2'
        }
      },
      {
        src  : 'assets/img/galleries/schwimmbad/4.jpg',
        opts : {
          caption : 'Schwimmbad #2'
        }
      }
    ], {
      loop : false,
      hash : "Schwimmbad-Gallery"
    });

  });



  // Sauna-Gallery
  $("#SaunaGallery").on('click', function() {

    $.fancybox.open([
      {
        src  : 'assets/img/galleries/sauna/1.jpg',
        opts : {
          caption : 'Schwimmbad #1'
        }
      },
      {
        src  : 'assets/img/galleries/sauna/2.jpg',
        opts : {
          caption : 'Schwimmbad #2'
        }
      },
      {
        src  : 'assets/img/galleries/sauna/3.jpg',
        opts : {
          caption : 'Schwimmbad #2'
        }
      }
    ], {
      loop : false,
      hash : "Schwimmbad-Gallery"
    });

  });

});
