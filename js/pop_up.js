	$(document).ready(function(){
		console.log("DOCUMENTO OK");

		$(document).ready(function(){
			confirmar_cargar("2", "Cargando...", "Espere un momento por favor.", "", "", "");
			setTimeout(function(){
				confirmar_cargar("4", "", "", "", "", "");
			}, 2000);
		});
	});

	$("#btn_save").on("click", function(){
		confirmar_cargar("1", "¿Desea guardar este registro?", "", "idesave", "Aceptar", "Cancelar");
		$("#idesave").on("click", function(){
			confirmar_cargar("3", "Datos guardados exitosamente", "", "", "Aceptar", "");
		});
	});

	function confirmar_cargar(tipo, txt1, txt2, idbtn1, txtbtn1, txtbtn2){

		switch(tipo){
			case '1': // DESEA: DESACTIVAR / ELIMINAR / ACTIVAR / GUARDAR / MODIFICAR

				$("#modal_confirmacion").modal();
				$("#modal_confirmacion .modal-dialog").removeClass("modal-sm");
				$(".contenido_modal_confirmacion #texto_1").empty();
			    $(".contenido_modal_confirmacion #texto_1").append("<span>"+txt1+"</span>");
				$(".contenido_modal_confirmacion #texto_2").empty();
			    $(".contenido_modal_confirmacion #texto_2").append("<span>"+txt2+"</span>");
			    $(".contenido_modal_confirmacion #boton_1").empty();
			    $(".contenido_modal_confirmacion #boton_1").append("<button type='button' id='"+idbtn1+"' class='btn_action' style='color: white;' data-dismiss='modal'><span>"+txtbtn1+"</span></button>");
			    $(".contenido_modal_confirmacion #boton_2").empty();
			    $(".contenido_modal_confirmacion #boton_2").append("<button type='button' class='btn_action_two' data-dismiss='modal'><span>"+txtbtn2+"</span></button>");		

			break;

			case '2': // CARGANDO...

				$("#modal_confirmacion").modal();
				$(".contenido_modal_confirmacion #texto_1").empty();
			    $(".contenido_modal_confirmacion #texto_1").append("<span>"+txt1+"</span>");
			    $(".contenido_modal_confirmacion #spinner").empty();
				$(".contenido_modal_confirmacion #texto_2").empty();
			    $(".contenido_modal_confirmacion #texto_2").append("<span>"+txt2+"</span>");
			    $(".contenido_modal_confirmacion #boton_1").empty();
			    $(".contenido_modal_confirmacion #boton_2").empty();

			break;

			case '3': // AVISO DE DATOS OK

				$("#modal_confirmacion").modal();
				$(".contenido_modal_confirmacion #texto_1").empty();
				$(".contenido_modal_confirmacion #texto_2").empty();
				$(".contenido_modal_confirmacion #texto_2").append("<h4>"+txt1+"</h4>");
			    $(".contenido_modal_confirmacion #boton_1").empty();
			    $(".contenido_modal_confirmacion #boton_1").append("<button type='button' id='"+idbtn1+"' class='btn_action' style='color: white;' data-dismiss='modal'><span>"+txtbtn1+"</span></button>");
			    $(".contenido_modal_confirmacion #boton_2").empty();

			break;

			case '4': // OCULTAR MODAL
				$("#modal_confirmacion").modal("hide");
			break;
		}
	}