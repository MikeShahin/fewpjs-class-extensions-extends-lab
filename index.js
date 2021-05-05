// Your code here
class Polygon {
    constructor(arr) {
        this.arr = arr;
        this.count = this.arr.length;
    }

    get countSides() {
        return this.arr.length
    }

    get perimeter() {
         return this.arr.reduce((x, y) => x + y, 0);
    }
}

class Triangle extends Polygon {
    get isValid() {
        if (this.count !== 3) return;
        
        let a = this.arr[0]
        let b = this.arr[1]
        let c = this.arr[2]
        return ((a + b > c) && (a + c > b) && (b + c > a))
      }    
}

class Square extends Polygon {
    get isValid() {
        if (this.count !== 4) return;

        let a = this.arr[0]
        let b = this.arr[1]
        let c = this.arr[2]
        let d = this.arr[3]
        return ((a === b) && (a === c) && (a === d))
      }

    get area() {
        return this.arr[0] ** 2
    }
}