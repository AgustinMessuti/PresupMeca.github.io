function agregar(){
    let canti = document.getElementById('c').value;
    
    let P = document.getElementById("prod").value;
    let prod = document.getElementById('prod');
    var prodtext = prod.options[prod.selectedIndex].text;
    
    let pu = document.getElementById('pu').value;
    let tablita = document.getElementById('tabla');
	let moneda = document.getElementById('mon').value;
    let kdolar = document.getElementById('dolar').textContent;
    let ptar = 0;
    let ptdol = 0;
 
 if (P == ""){
	alert('Por favor seleccióne un producto');
	}
	if (canti == ""){
	alert('Por favor introduzca la cantidad del producto mayor a 0');
	}
    if (pu == ""){
	alert('Por favor ingrese el valor unitario del producto mayor a 0');
	}
    
    if (moneda == ""){
	alert('Por favor seleccione una moneda');
	}
    
 if (P != "" && canti != "" && pu != "" &&  pu != "0" && canti != "0" && moneda != ""){


      if (moneda == "usd") {
          ptdol = canti * pu;
          ptar = ptdol*kdolar;     
          }

      else {
          ptar = canti * pu;
          ptdol = ptar/kdolar;
          }



      const nuevaFila = tablita.insertRow();

      // Insertar celdas en la fila
      const celdaCantidad = nuevaFila.insertCell(0);
      const celdaProducto = nuevaFila.insertCell(1);
      const celdaPU = nuevaFila.insertCell(2);
      const celdaPTARS = nuevaFila.insertCell(3);
      const celdaPTDOL = nuevaFila.insertCell(4);


      let canti_elim = '<i class="fa fa-trash" onclick="eliml(this.parentNode.parentNode.rowIndex)" style="color:red" title="Presione para eliminar Item"></i>&nbsp;&nbsp;&nbsp;&nbsp;' + canti;
     

      // Asignar los valores a las celdas
      celdaCantidad.innerHTML = canti_elim;
      celdaProducto.innerHTML =  prodtext ;
      celdaPU.textContent = pu;
      celdaPTARS.textContent = ptar.toFixed(2);
      celdaPTDOL.textContent = ptdol.toFixed(2);
  }
  calct();    
}

//Función de eliminar fila
function eliml(i) {
	 document.getElementById("tabla").deleteRow(i);
      calct();
}

//Función de calculo
function calct() {
    let subT = 0;
    let subV = 0;
	let tablita = document.getElementById('tabla');
    let j = tablita.rows.length;
    let moneda = document.getElementById('mon').value;
    let kdolar = document.getElementById('dolar').textContent;
    
    
    // Cálculo de precios para cada producto
    for (let i = 1; i <j; i++) {
    
    	let pt = parseFloat(tablita.rows[i].cells[3].textContent);
        subT += pt;
        }
        	
  //Subtotal
  if (moneda = "ar"){
 	document.getElementById("subar").innerHTML = "$ " + subT.toFixed(2);
	subV = subT/kdolar
    document.getElementById("subdol").innerHTML = "U$D " + subV.toFixed(2);
    }
  else {
    document.getElementById("sudol").innerHTML = "U$D " + subT.toFixed(2);
	subV = subT*kdolar
    document.getElementById("subar").innerHTML = "$ " + subV.toFixed(2);
    }

  //Cálculo de IVA
  if (moneda = "ar"){
  IVA = subT*0.21
  document.getElementById("ivaAR").innerHTML = "$ " + IVA.toFixed(2);
  IVAV = IVA/kdolar;
  document.getElementById("ivaDOL").innerHTML = "U$D " + IVAV.toFixed(2);
  }
  else {
    IVA = subT*0.21
    document.getElementById("ivaDOL").innerHTML = "U$D " + IVA.toFixed(2);
    IVAV = IVA*kdolar;
    document.getElementById("ivaAR").innerHTML = "$ " + IVAV.toFixed(2);
    } 

  //Cálculo de Total
  if (moneda = "ar"){
  Total = IVA + subT
  document.getElementById("totAR").innerHTML = "$ " + Total.toFixed(2);
  TotalV = Total/kdolar
  document.getElementById("totDOL").innerHTML = "U$D " + TotalV.toFixed(2);
  }
  else {
  Total = IVA + subT
  document.getElementById("totDOL").innerHTML = "U$D " + Total.toFixed(2);
  TotalV = Total/kdolar
  document.getElementById("totAR").innerHTML = "$ " + TotalV.toFixed(2);
  }
  

  //Cálculo cuotas sin interes

  SI = Total/12
  document.getElementById("SI").innerHTML = "$ " + SI.toFixed(2);

  //Cálculo cuotas con 35% de interés
  CI = (Total*1.35)/18
  document.getElementById("CI").innerHTML = "$ " + CI.toFixed(2);

}


function imp(){ 
let Cliente = document.getElementById("cliente").value;
let P = document.getElementById("prod").value;


if (Cliente == ""){
alert('Por favor registre al cliente');
}

	else { 
	alert (Cliente + ' realizó una compra exitosa');
    calct();
	print();
    }

}
