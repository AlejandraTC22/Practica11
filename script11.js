class MatrixCalculator {
    constructor(rows, cols) 
    {
        this.matrix = this.generateMatrix(rows, cols);
        this.results = this.calculateResults(this.matrix);
    }

    generateMatrix(rows, cols) 
    {
        let matrix = [];
        for (let i = 0; i < rows; i++) 
        {
            matrix[i] = [];
            for (let j = 0; j < cols; j++) 
            {
                matrix[i][j] = Math.floor(Math.random() * 100);
            }
        }
        return matrix;
    }

    calculateResults(matrix) 
    {
        const numRows = matrix.length;
        const numCols = matrix[0].length;
        const rowSums = [];
        const rowAverages = [];
        const colSums = [];
        const colAverages = [];
    
        for (let i = 0; i < numRows; i++) 
        {
            let rowSum = 0;

            for (let j = 0; j < numCols; j++) 
            {
                rowSum += matrix[i][j];
            }
            rowSums.push(rowSum);
            rowAverages.push(rowSum / numCols);
        }
    
        for (let j = 0; j < numCols; j++) 
        {
            let colSum = 0;
            
            for (let i = 0; i < numRows; i++) 
            {
                colSum += matrix[i][j];
            }
            colSums.push(colSum);
            colAverages.push(colSum / numRows);
        }
    
        return 
        {
            rowSums,
            rowAverages,
            colSums,
            colAverages
        };
    }
    

    createMatrixTable(id, data) 
    {
        const table = document.getElementById(id);

        for (let i = 0; i < data.length; i++) 
        {
            const row = table.insertRow();
            for (let j = 0; j < data[i].length; j++) 
            {
                const cell = row.insertCell();
                cell.innerHTML = data[i][j];
            }
        }
    }

    createRowResultsTable(id, data) 
    {
        const table = document.getElementById(id);

        for (let i = 0; i < data[0].length; i++) 
        {
            const row = table.insertRow();
            const cell1 = row.insertCell();
            cell1.innerHTML = data[0][i]; // Suma
            const cell2 = row.insertCell();
            cell2.innerHTML = data[1][i]; // Promedio
        }
    }

    createColumnResultsTable(id, data) 
    {
        const table = document.getElementById(id);
    
        // Inserta una fila para las sumas
        const sumRow = table.insertRow();
        for (let j = 0; j < data[0].length; j++) 
        {
            const cell = sumRow.insertCell();
            cell.innerHTML = data[0][j];
        }
    
        // Inserta una fila para los promedios
        const avgRow = table.insertRow();

        for (let j = 0; j < data[1].length; j++) 
        {
            const cell = avgRow.insertCell();
            cell.innerHTML = data[1][j].toFixed(1); // Limita el promedio a un decimal
        }
    }

}

const calculator = new MatrixCalculator(5, 10);

calculator.createMatrixTable("matrixTable", calculator.matrix);
calculator.createRowResultsTable("rowResults", [calculator.results.rowSums, calculator.results.rowAverages]);
calculator.createColumnResultsTable("columnResults", [calculator.results.colSums, calculator.results.colAverages]);
