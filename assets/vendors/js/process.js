$(document).ready(function(){

  $("#bode").hide();
  $("#esconde").show();
  
  $('#mostra').click(function(){
  $("#bode").slideToggle();
  });
  
  $('#mostra3').click(function(){
  $("#bode3").slideToggle();
  });
  
   $('#mostra2').click(function(){
  $("#bode2").slideToggle();
  });

});


    function enviar() {
        var linha = $("#lista").val();
        var sk = document.getElementById("sk").value;
        var linhaenviar = linha.split("\n");
        var total = linhaenviar.length;
        var lv = 0;
        var cn = 0;
        var dd = 0;
        linhaenviar.forEach(function(value, index) {
            setTimeout(
                function() {
                    $.ajax({
                        url: 'api.php?lista=' + value + '&sk=' + sk,
                        type: 'GET',
                        async: true,
                        success: function(resultado) {
                            if (resultado.match("#CVV")) {
                                removelinha();
                                lv++;
                                live(resultado + "");
                            }else if(resultado.match("#CCN")){
                            	removelinha();
                            cn++;
                                live2(resultado + "");
                             }else {
                                removelinha();
                                dd++;
                                dead(resultado + "");
                            }
                            $('#carregadas').html(total);
                            var fila = parseInt(lv) + parseInt(cn) + parseInt(dd);
                            $('#cLive').html(lv);
                            $('#cWarn').html(cn);
                            $('#cDie').html(dd);
                            $('#total').html(fila);
                            $('#cLive2').html(lv);
                            $('#cWarn2').html(cn);
                            $('#cDie2').html(dd);
                        }
                    });
                }, 2500 * index);
        });
    }
    function live(str) {
        $(".live").append(str + "<br>");
    }
    function dead(str) {
        $(".dead").append(str + "<br>");
    }
    function live2(str) {
        $(".live2").append(str + "<br>");
    }
    function removelinha() {
        var lines = $("#lista").val().split('\n');
        lines.splice(0, 1);
        $("#lista").val(lines.join("\n"));
    }
