const Svg = require ('./svg')
const {Circle} = require ('./shapes')

test ('renders a 300 x 200 svg element', ()=>{
    const svg = new Svg ();
    const expected = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"></svg>`
    
    expect (svg.render()).toEqual(expected);
});

test ('setText and color and append to svg',()=>{
    const svg = new Svg ();
    const expected = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">2</text></svg>`
    svg.setText ("2","blue")
    expect (svg.render()).toEqual(expected);
});
test ('should throw error if text is greater than 3 characters',()=>{
    const svg = new Svg ();
    
    expect (()=>svg.setText ("dertff","blue")).toThrow(new Error("Text can't be greater than 3 characters"));
});