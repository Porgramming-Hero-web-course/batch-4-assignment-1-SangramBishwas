interface Circle {
    shape: string,
    radius: number
}

interface Rectangle {
    shape: string,
    height: number,
    width: number
}

const getResult = (shape: Circle | Rectangle) => {
    if ("radius" in shape) {
        const radius = shape.radius;
        const areaOfCircle = Math.PI * radius * radius;
        console.log(areaOfCircle);
    } else {
        const height = shape.height;
        const width = shape.width;
        const areaOfRectangle = height * width;
        console.log(areaOfRectangle);
    }
};

const circle: Circle = {
    shape: "Circle",
    radius: 5
};

const rectangle: Rectangle = {
    shape: "Rectangle",
    height: 3,
    width: 5
};

getResult(rectangle);