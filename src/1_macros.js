// Let's get familiar with macros and sweet.js!

macro unless {
  rule infix { return $value:expr | $guard:expr } => {
    if (!($guard)) {
      return $value;
    }
  }
}

function foo(x) {
  return true unless x > 42;
  return false;
}

// Exponent Operator
operator (^^) 14 right
{ $base, $exp } => #{ Math.pow($base, $exp) }

y + x ^^ 10 ^^ 100 - z


// Pipe operator

macro (=>) {
  rule infix { $param:ident | $body:expr  } => {
    function ($param) { return $body }
  }
}
operator (|>) 1 left { $l, $r } => #{ $r($l) }

var res = 10 |> x => x * 2
                  |> y => y - 3
