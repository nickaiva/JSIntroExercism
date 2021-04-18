//
// This is only a SKELETON file for the 'Two fer' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const twoFer = (name) => {
  //throw new Error('Remove this statement and implement this function');
  let result = 'One for you, one for me.';
  if ( name !== undefined){
      result = `One for ${name}, one for me.`
  }
  return result;
};
