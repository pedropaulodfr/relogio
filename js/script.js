var cor, conta,t, hora, minutos, alarme, horarioVerao=0;

			function estadoinicial(){
				mostrador();
				document.getElementById('opcoes').style.display = 'none';
				document.getElementById('notificaAlarme').style.display = 'none';
			}

			window.onload = estadoinicial;

			function mostrador(){

				// Criando data, mês, ano, hora, minutos e segundos
				var data = new Date; 
				var semana = data.getDay(); 
				var dia = data.getDate(); 
				var mes = data.getMonth();
				var ano = data.getFullYear();
				var hora = data.getHours();
				var minutos = data.getMinutes();
				var segundos = data.getSeconds();
				var mesNome = new Array ("janeiro", "fevereiro", "marco", "abril", "maio", "junho", "julho", "agosto", "setembro","outubro", "novembro", "dezembro");
				var semanaNome = new Array("Domingo", "Segunda", "Terca", "Quarta", "Quinta", "Sexta", "Sabado");
				
				// Adicionando zero na frente do número se ele for menor que 10
				if(segundos <= 9){
					segundos = "0" + segundos;
				}
				if(minutos <= 9){
					minutos = "0" + minutos;
				}
				if(hora <= 9){
					hora = "0" + hora;
				}
				if(mes <=9){
					mes = "0" + mes;
				}
				
				// Campo onde a hora será mostrada
				document.getElementById('mostraHora').innerHTML = hora - horarioVerao + " : " + minutos + " : " + segundos;

				// Campo onde a data será mostrada
				document.getElementById('mostraData').innerHTML = dia + " de " +  mesNome[data.getMonth()] + " de " + ano;

				// Campo onde a semana será mostrada
				document.getElementById('mostraSemana').innerHTML =  semanaNome[semana];

				x=setTimeout('mostrador()',500); // Atualiza a função mostrador() a cada meio segundo
				
				// Verifica se a hora atual é a mesma hora do alarme 
				var t = hora + ":" + minutos;
				if(t == alarme){
					document.getElementById('imagemDespertador').style.display = 'block';
					document.getElementById('alarme_audio').play();
					document.getElementById('imagemDespertador').src = "https://2.bp.blogspot.com/-SjwSey42dAM/WIuavTj2huI/AAAAAAABLik/kFkz6S_d_lkhicNhzfZxB72Ko4R2ZLwRACLcB/s320/%2Brelogios%2Bem%2Bpng%2Be%2Bgifs%2B%252823%2529.gif";
					document.getElementById('notificaAlarme').style.display = 'none';
					document.getElementById('notificaAlarmetxt').innerHTML = '';
				}else{
					document.getElementById('imagemDespertador').style.display = 'none';
					document.getElementById('alarme_audio').pause();
				}
			}
			
			function menu(a){
				var a = a;
				var estadoBtn = document.getElementById('opcoes').style.display;
				
				if(estadoBtn == 'none'){
					document.getElementById('opcoes').style.display = 'block';
				}else{
					document.getElementById('opcoes').style.display = 'none';
				}
				if(a == "lcd"){
					selectCor();
					document.getElementById('mostraHora').style.color = cor;
					document.getElementById('data').style.color = cor;
					document.getElementById('notificaAlarmetxt').style.color = cor;
				}
				if(a == "fundo"){
					selectCor2();
					document.getElementById('corpo').style.background = cor;
				}
				if(a == "inverte"){
					document.getElementById('mostraHora').style.color = "white";
					document.getElementById('data').style.color = "white";
					document.getElementById('notificaAlarmetxt').style.color = "white";
					document.getElementById('corpo').style.background = "black";
					document.getElementById('notificaAlarme').src = "http://ap.imagensbrasil.org/images/2018/01/21/icon-157349_960_720.png";
				}
				if(a == "oculta-mostraData"){
					var telaData = document.getElementById('data').style.display;
					
					if(telaData == 'none'){
						document.getElementById('data').style.display = 'block';
					}else{
						document.getElementById('data').style.display = 'none';
					}
				}
				if(a == "ocultar-mostrarCursor"){
					var telaCursor = document.getElementById('mostraHora').style.cursor;

					if((telaCursor == '') || (telaCursor == 'default')){
					document.getElementById('mostraHora').style.cursor = 'none';
					document.getElementById('data').style.cursor = 'none';
					}else{
					document.getElementById('mostraHora').style.cursor = 'default';
					document.getElementById('data').style.cursor = 'default';
					}
				}
				if(a == "ocultarIcon"){
					document.getElementById('menuIcone').style.display = 'none';
				}
				if(a == "mostrarIcon"){
					document.getElementById('menuIcone').style.display = 'block';
				}
				if(a == "clock"){
					alarme = document.getElementById('selectHora').value;
					var decisao = confirm("ATIVAR ALARME?");

					if(decisao){
						alert("ALARME DEFINIDO PARA ÀS " + alarme);
						document.getElementById('notificaAlarme').style.display = 'block';
						document.getElementById('notificaAlarmetxt').innerHTML = "Alarme definido para as " + alarme;
					}else{
						alarme = document.getElementById('selectHora').value = 'none';
					}
				}
				if(a == "disableVerao"){
					if(horarioVerao == 0){
						horarioVerao = 1;
						alert("HORÁRIO DE VERÃO DESATIVADO!");
					}else{
						horarioVerao = 0;	
						alert("HORÁRIO DE VERÃO ATIVADO!");
					}
				}
			}

			function timeOcultaMenu(){
				setTimeout(function(){document.getElementById('opcoes').style.display = 'none';}, 10000);
			}

			function selectCor(){
				document.getElementById('caixaCor1').style.display = 'block';
				cor = document.getElementById('caixaCor1').value;
			}

			function selectCor2(){
				document.getElementById('caixaCor2').style.display = 'block';
				cor = document.getElementById('caixaCor2').value;
			}

			function silenciar(){
				alarme = document.getElementById('selectHora').value = 'none';
			}

			function myMove() { // Colocar efeito animado no botão 'opções'
			  var elem = document.getElementById("opcoes");   
			  var pos = 0;
			  var id = setInterval(frame, 20);
			  function frame() {
				if (pos == 18) {
				  clearInterval(id);
				} else {
				  pos++; 
				  elem.style.width = pos + '%'; 
				}
			  }
			}
			
			var deslocamento  = 0;
			
			function deslocaLCD(botao,escolha){
				var posicaoAtual = document.getElementById('mostraHora');
				var deslocamento = 0;
				
				if(escolha == "direita"){
					document.getElementById("mostraHora").style.left = posicaoAtual.offsetLeft + botao;
                }
                if(escolha == "esquerda"){
                    document.getElementById("mostraHora").style.left = posicaoAtual.offsetLeft - botao;
                }
                if(escolha == "cima"){
                    document.getElementById('mostraHora').style.top = posicaoAtual.offsetTop - 140;
                }
                if(escolha == "baixo"){
                    document.getElementById("mostraHora").style.top = posicaoAtual.offsetTop - 120;
                }
				if(botao == "redefinir"){
					document.getElementById('mostraHora').style.top = 12 + "%";
					document.getElementById('mostraHora').style.left = 23 + "%";
				}
			}