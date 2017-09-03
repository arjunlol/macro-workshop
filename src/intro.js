// Let's get familiar with macros and sweet.js!

// Our macros
syntax let = function (ctx) {
  var ident = ctx.next().value; 
  ctx.next(); 
  var init = ctx.expand('expr').value;
  return #`
    (function (${ident}) {
      ${ctx} // <2>
    }(${init}))
  `
};

// a new operator! 
operator ** right 1 = function (left, right) {
  return #`Math.pow(${left}, ${right})`;
}

let x = 10
