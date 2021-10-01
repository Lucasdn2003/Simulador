$(document).on('ready', function() {
    $('#radio1').prop('checked', true)
})

$('#btn').click (function () {

    //$('.inicio').remove()
    $('.inicio').hide(1000) 
    $('body').append(`   
        <div id="form">
            <input type="number" class="controls" id="monto" autocomplete="off" placeholder="Ingrese un monto">
            <p>En cuantas cuotas desea pagar la donacion?</p>
            3 cuotas <input type="radio" name="opciones" class="controls, check" id="cuota1" value="3">
            6 cuotas <input type="radio" name="opciones" class="controls, check" id="cuota2" value="6">
            12 cuotas <input type="radio" name="opciones" class="controls, check" value="12">
            <input type="submit" class="boton" id="btn2" value="Enviar">
        </div>`)


$('#btn2').click( () => {
    $('div').fadeOut(1000)
    $('#form2').slideUp(2000)
let monto = $('#monto').val()
localStorage.setItem('monto', monto);
console.log('el monto ingresado es ' + monto);



let seleccion = $("input[name='opciones']:checked").val()
    const calculo = (localStorage.getItem('monto')/ seleccion).toFixed(2) 
    $('body').append(`
                    <div id="form2">
                    <p>Usted realizara la donacion en ${seleccion} cuotas de $${calculo}</p>
                    <p>Su donacion se llevara ha cabo en un plazo de 30 dias</p>
                    <p hidden class="pEspecial">Muchas gracias</p>
                    <button class="boton" id="btn3">Confirmar</button>
                    </div>`)
    console.log("El calculo que se realiza es " + monto + " / " + seleccion + " = " + calculo)

 /* $('#form').remove()  */


const URL_JSON = '../data.json'
$('body').append('')


$('#btn3').click( () =>{
    $('#btn3').fadeOut(3000)
    $('.pEspecial').fadeIn(5000)
    $.getJSON(URL_JSON, (response, status) => {
        let json = response

        if(status === 'success'){
            swal(`${json.alerta}`)
            $('#btn3').remove()
            /* $('body').append(`${json.texto}`) */
        }
    })
    
    
})


})
/* $('#btn').remove() */

})


