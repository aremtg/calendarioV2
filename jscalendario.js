//getDay de 1 a 6
//getDate trae el dia de 1 a 31 
$(document).ready(function () {
  let meses = ["Enero","Febrero","Marzo","Abril",
              "Mayo","Junio","Julio","Agosto","Septiembre",
              "Octubre","Noviembre","Diciembre"]
  let date = new Date();
  let nomDia = date.getDay();
  
  let diaMes = date.getDate();
  let mes = meses[date.getMonth()];
  let año = date.getFullYear();

  
  
  let active = document.querySelector("#semana li:nth-child("+nomDia+")");
    
    active.classList.add("actual-en-semana");//me refiero de LUNES A DOMINGO
  
  let h1 = document.createElement("h1");
        h1.innerHTML = diaMes;
    active.appendChild(h1);


  cat= $("#semana li").hover(function () {
      // over
      this.classList.toggle("actual-en-semana");  
      
  }
  );

  let tituloMes = document.querySelector("#tituloMes");
  tituloMes.innerHTML = "<h1>"+ mes + "</h1>";
  
  let actualEnMes = document.querySelector("#mesTabla  #nombreDeLosDias th:nth-child("+nomDia+")");
  actualEnMes.classList.add("actual-en-mes");//me refiero de LUNES A DOMINGO
  
 
  });
  
  
