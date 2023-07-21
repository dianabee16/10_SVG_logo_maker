const {Circle, Triangle, Square} = require("./shapes")

describe("Circle",() => {
    test("renders a circle with the color blue",() => {
        const shape = new Circle()
        const expected = `<circle cx="150" cy="100" r="80" fill="blue"/>`
        shape.setColor("blue")
        expect(shape.render()).toEqual(expected)

    })
})
describe ('Square',()=>{
    test ('renders square with a red fill color', ()=>{
        const shape = new Square ();
        const expected = `<rect height="50" width="50" fill="red"/>`
        shape.setColor ("red");
        expect(shape.render()).toEqual(expected);
    });
});
describe ('Triangle',()=>{
    test ('renders triangle with a yellow fill color', ()=>{
        const shape = new Triangle ();
        const expected = `<polygon points="150, 18 244, 182 56, 182" fill="yellow"/>`
        shape.setColor ("yellow");
        expect(shape.render()).toEqual(expected);
    });
});