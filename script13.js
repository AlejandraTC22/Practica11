class Calificaciones 
{
  constructor(data) 
  {
    this.calificaciones = data;
  }

  calcularPromedio(parcial1, parcial2, parcial3) 
  {
    return (parcial1 + parcial2 + parcial3) / 3;
  }

  calcularPromedios() 
  {
    return this.calificaciones.map(calificacion =>
      this.calcularPromedio(calificacion.parcial1, calificacion.parcial2, calificacion.parcial3)
    );
  }

  calcularPromedioMasAlto() 
  {
    return Math.max(...this.calcularPromedios());
  }

  calcularPromedioMasBajo() 
  {
    return Math.min(...this.calcularPromedios());
  }

  calcularParcialesReprobados() 
  {
    return this.calcularPromedios().filter(promedio => promedio < 7.0).length;
  }

  calcularDistribucionCalificaciones() 
  {
    const distribucionCalificaciones = 
    {
      '0 - 4.9': 0,
      '5.0 - 5.9': 0,
      '6.0 - 6.9': 0,
      '7.0 - 7.9': 0,
      '8.0 - 8.9': 0,
      '9.0 - 10': 0,
    };

    this.calcularPromedios().forEach(promedio => 
    {
      if (promedio >= 0 && promedio <= 4.99) 
      {
        distribucionCalificaciones['0 - 4.9']++;
      } 

      else if (promedio >= 5.0 && promedio <= 5.99) 
      {
        distribucionCalificaciones['5.0 - 5.9']++;
      } 

      else if (promedio >= 6.0 && promedio <= 6.99) 
      {
        distribucionCalificaciones['6.0 - 6.9']++;
      } 
      
      else if (promedio >= 7.0 && promedio <= 7.99) 
      {
        distribucionCalificaciones['7.0 - 7.9']++;
      } 
      
      else if (promedio >= 8.0 && promedio <= 8.99) 
      {
        distribucionCalificaciones['8.0 - 8.9']++;
      } 
      
      else if (promedio >= 9.0 && promedio <= 10) 
      {
        distribucionCalificaciones['9.0 - 10']++;
      }
    });

    return distribucionCalificaciones;
  }
}

// Datos de calificaciones
const calificacionesData = 
[
  { parcial1: 5.5, parcial2: 8.9, parcial3: 10 },
  { parcial1: 8.0, parcial2: 5.5, parcial3: 10 },
  { parcial1: 9.0, parcial2: 4.1, parcial3: 7.8 },
  { parcial1: 10, parcial2: 2.2, parcial3: 8.1 },
  { parcial1: 7.0, parcial2: 9.2, parcial3: 7.1 }
];

const calificacionesObj = new Calificaciones(calificacionesData);

calificacionesData.forEach((calificacion, index) => 
{
  const promedio = calificacionesObj.calcularPromedio(
    calificacion.parcial1,
    calificacion.parcial2,
    calificacion.parcial3
  );

  const promedioCell = document.getElementById(`promedio${index + 1}`);
  promedioCell.textContent = promedio.toFixed(2);
});

document.getElementById("maxPromedio").textContent = calificacionesObj.calcularPromedioMasAlto().toFixed(2);
document.getElementById("minPromedio").textContent = calificacionesObj.calcularPromedioMasBajo().toFixed(2);
document.getElementById("reprobados").textContent = calificacionesObj.calcularParcialesReprobados();

const distribucionCalificaciones = calificacionesObj.calcularDistribucionCalificaciones();
const distribucionList = document.getElementById("distribucion");

for (const rango in distribucionCalificaciones) 
{
  const listItem = document.createElement("li");
  listItem.textContent = `${rango}: ${distribucionCalificaciones[rango]} Alumnos`;
  distribucionList.appendChild(listItem);
}
