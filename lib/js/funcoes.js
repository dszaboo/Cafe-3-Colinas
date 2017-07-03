//Função para descer a barra de rolagem com efeito//
function scrollTo(id) {
	$('html,body').animate({ scrollTop: $("#" + id).offset().top - $("#menu").height() }, 600);
}
