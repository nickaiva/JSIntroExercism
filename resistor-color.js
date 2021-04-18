//
// This is only a SKELETON file for the 'Resistor Color' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

//import { indexOf } from "core-js/core/array";

export const colorCode = (color) => {

  let COLOURS = ['Black',  'Brown',  'Red',  'Orange',  'Yellow',  'Green',  'Blue',  'Violet',  'Grey',  'White'];

  if(color == 'Colors'){
    COLORS = COLOURS.map(colour => colour.toLowerCase());

    return COLORS;
  }
  color = color.charAt(0).toUpperCase() + color.slice(1);
  
  return COLOURS.indexOf(color);
};

export const COLORS = undefined;
