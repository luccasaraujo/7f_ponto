$(document).ready(function() {
    // Captura o evento de envio do formulário
    $('form').submit(function(event) {
      // Impede o comportamento padrão do envio do formulário
      event.preventDefault();
  
      // Obtém os dados do formulário
      var formData = $(this).serialize();
  
      // Referência aos campos de entrada
      var colaboradorInput = $('input[name="data[Colaborador]"]');
      var motivoInput = $('input[name="data[Motivo]"]');
      var conselheiroInput = $('input[name="data[Conselheiro]"]');
  
      // Envia a solicitação AJAX
      $.ajax({
        url: 'https://sheetdb.io/api/v1/an90veurhucvh', // URL do arquivo PHP que processa o formulário
        type: 'POST',
        data: formData,
        success: function(response) {
          // Exibe o SweetAlert
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Ponto registrado com sucesso!',
            showConfirmButton: false,
            timer: 1500
          });
  
          // Limpa os campos de entrada
          colaboradorInput.val('');
          motivoInput.val('');
          conselheiroInput.val('');
        },
        error: function() {
          // Exibe uma mensagem de erro
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Erro ao registrar o ponto!',
            showConfirmButton: false,
            timer: 1500
          });
        }
      });
    });
  });
  