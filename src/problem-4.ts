type Circle = {
    shape: string,
    radius: number
}

type Rectangle = {
    shape: string,
    height: number,
    width: number
}

const calculateShapeArea = (shape: Circle | Rectangle) => {
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

const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });

const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  });
