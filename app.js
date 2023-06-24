// tudo é um objeto
// $ == jquery
// todo objeto, seja do html, css, herda um prototype, e dentro
// desse prototype existem muitos métodos que o jquery 
// disponibiliza para manipulação da DOM

// bloco 1
$('#paragrafo0').hide();
// FIM_bloco 1

// bloco 2
// aqui estou escondendo todas as tags <a> no meu html
$('ul li a').hide();
// FIM_bloco 2

// bloco 3
// aqui eu criei no html a mesma lista, com uma classe
// class="mostrar" usando o metodo show
$('.mostrar').show();
// FIM_bloco 3

// utilizo para ver os metodos do prototype no console do navegador
console.log($('.mostrar'));

// bloco 4
// posso selecionar multiplos elementos
$('ul li, .mostrar4, .mostrar6').show();
// FIM_bloco 4

// bloco 5
// selecionar por atributo
// (^) << o chapéusinho vai selecionar todos os atributos
// que começarem com #
$('a[href^="#"]').hide();
// FIM_bloco 5

// bloco 6
// salvei a seleção em uma variável
// ** o $ << normalmente é usado para fazer refencia a variáveis 
// que estão guardando códigos jquery
let $olha_variavel = $('.paragrafo_salvo_em_variavel')
$olha_variavel.css("color", "red");
// FIM_bloco 6

// bloco 7
// podemos fazer verificações para saber se determinado
// elemento existe na pagina

// o prototype do navegador trará um length: 1
// informando que existe uma tag <span>
let $existeSpan = $('span');
if ($existeSpan) {
  //essa informação você só verá no console do navegador
  console.log('Span existe sim meu chapa!');
} 
// FIM_bloco 7