class Ventas 
{
    constructor(data) 
    {
        this.ventas = data;
    }

    encontrarMinVenta() 
    {
        let minVenta = this.ventas[0][0];
        let minMes = 0;
        let minDia = 0;

        for (let mes = 0; mes < this.ventas.length; mes++) 
        {
            for (let dia = 0; dia < this.ventas[mes].length; dia++) 
            {
                if (this.ventas[mes][dia] < minVenta) 
                {
                    minVenta = this.ventas[mes][dia];
                    minMes = mes;
                    minDia = dia;
                }
            }
        }

        return [minVenta, minMes, minDia];
    }

    encontrarMaxVenta() 
    {
        let maxVenta = this.ventas[0][0];
        let maxMes = 0;
        let maxDia = 0;

        for (let mes = 0; mes < this.ventas.length; mes++) 
        {
            for (let dia = 0; dia < this.ventas[mes].length; dia++) 
            {
                if (this.ventas[mes][dia] > maxVenta) 
                {
                    maxVenta = this.ventas[mes][dia];
                    maxMes = mes;
                    maxDia = dia;
                }
            }
        }

        return [maxVenta, maxMes, maxDia];
    }

    calcularVentaTotal() 
    {
        let total = 0;

        for (let mes = 0; mes < this.ventas.length; mes++) 
        {
            for (let dia = 0; dia < this.ventas[mes].length; dia++) 
            {
                total += this.ventas[mes][dia];
            }
        }

        return total;
    }

    calcularVentaPorDia() 
    {
        const ventaPorDia = [0, 0, 0, 0, 0]; // Inicializa un arreglo para los totales de ventas por día

        for (let mes = 0; mes < this.ventas.length; mes++) 
        {
            for (let dia = 0; dia < this.ventas[mes].length; dia++) 
            {
                ventaPorDia[dia] += this.ventas[mes][dia];
            }
        }

        return ventaPorDia;
    }
}

const ventasData = 
[
    [5, 16, 10, 12, 24],
    [40, 55, 10, 11, 18],
    [15, 41, 78, 14, 51],
    [35, 22, 81, 15, 12],
    [50, 12, 71, 10, 20],
    [70, 40, 60, 28, 22],
    [50, 50, 50, 36, 25],
    [40, 70, 40, 11, 20],
    [20, 20, 30, 12, 18],
    [10, 40, 32, 13, 16],
    [50, 3, 24, 15, 82],
    [40, 46, 15, 46, 22]
];

const ventasObj = new Ventas(ventasData);

const ventasTable = document.getElementById("ventasTable");
for (let mes = 0; mes < ventasData.length; mes++) 
{
    const row = document.createElement("tr");
    for (let dia = 0; dia < ventasData[mes].length; dia++) 
    {
        const cell = document.createElement("td");
        cell.textContent = ventasData[mes][dia];
        row.appendChild(cell);
    }
    ventasTable.appendChild(row);
}

const [minVenta, minMes, minDia] = ventasObj.encontrarMinVenta();
document.getElementById("minVenta").textContent = minVenta;
document.getElementById("minMes").textContent = minMes + 1;
document.getElementById("minDia").textContent = minDia + 1;

const [maxVenta, maxMes, maxDia] = ventasObj.encontrarMaxVenta();
document.getElementById("maxVenta").textContent = maxVenta;
document.getElementById("maxMes").textContent = maxMes + 1;
document.getElementById("maxDia").textContent = maxDia + 1;

const total = ventasObj.calcularVentaTotal();
document.getElementById("ventaTotal").textContent = total;

const ventaPorDia = ventasObj.calcularVentaPorDia();
const ventaPorDiaList = document.getElementById("ventaPorDia");
for (let dia = 0; dia < ventaPorDia.length; dia++) 
{
    const listItem = document.createElement("li");
    listItem.textContent = `Día ${dia + 1}: ${ventaPorDia[dia]}`;
    ventaPorDiaList.appendChild(listItem);
}