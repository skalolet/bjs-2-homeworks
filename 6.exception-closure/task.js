function parseCount(value) {
    const parsedValue = Number.parseFloat(value);
    if (Number.isNaN(parsedValue)) {
        throw new Error('Невалидное значение');
    }
    return parsedValue;
}

function validateCount(value) {
    try {
        return parseCount(value);
    } catch (error) {
        return error;
    }
}

class Triangle {
    constructor(side1, side2, side3) {
        if (!this.isValidTriangle(side1, side2, side3)) {
            throw new Error('Треугольник с такими сторонами не существует');
        }

        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }

    isValidTriangle(side1, side2, side3) {
        return side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1;
    }

    get perimeter() {
        return this.side1 + this.side2 + this.side3;
    }

    get area() {
        const s = this.perimeter / 2;
        const area = Math.sqrt(s * (s - this.side1) * (s - this.side2) * (s - this.side3));
        return Number(area.toFixed(3));
    }
}

function getTriangle(side1, side2, side3) {
    try {
        return new Triangle(side1, side2, side3);
    } catch (error) {
        error = {
            get area() { return 'Ошибка! Треугольник не существует' },
            get perimeter() { return 'Ошибка! Треугольник не существует' }
        };
        return error;
    }
}