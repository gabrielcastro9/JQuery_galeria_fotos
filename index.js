$(document).ready(function () {
   $('header button').click(function () {
      $('form').slideDown();
   });

   $('#cancelar').click(function () {
      $('form').slideUp();
   });

   $('form').on('submit', function (e) {
      e.preventDefault();
      const enderecoImageNovaJS = $('#endereco-image-nova').val();
      const novoItem = $('<li></li>').hide();
      $('<img />', {
         src: enderecoImageNovaJS
      }).appendTo(novoItem);

      $('<div class="overlay-image-link"></div>').append(
         $('<a></a>', {
            href: enderecoImageNovaJS,
            target: '_blank',
            title: 'ver imagem em tamanho real',
            text: 'ver imagem em tamanho real'
         })
      ).appendTo(novoItem);

      $(novoItem).appendTo('ul').fadeIn(1000);
      $('#endereco-image-nova').val('');
   });
});
