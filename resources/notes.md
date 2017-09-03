## From the Horse's mouth

Sweet.js is the outcome of Tim Disney's [phd](https://www.disnetdev.com/papers/thesis/).

## Videos + Articles

- [James Long: Unshackling JavaScript with Macros [JSConf2014]](https://www.youtube.com/watch?v=wTkcGprt5rU)

## Articles

- [Quote: what are some examples of domain specific languages](https://www.quora.com/What-are-some-examples-of-domain-specific-languages?share=1)
- [DSL's and Ruby](https://www.infoq.com/news/2007/06/dsl-or-not/) -- Although Ruby and DSL's are the base of the post, I think it covers some interesting topics / general thoughts on DSL's.
- [When is an API considereed to be an embedded DSL](https://softwareengineering.stackexchange.com/questions/251832/when-is-an-api-considered-to-be-an-embedded-dsl#251845)

## [Macros in clojure](https://www.braveclojure.com/read-and-eval/)

The fun and silly book [Clojure For the Brave and True](https://www.braveclojure.com/clojure-for-the-brave-and-true/) has a great section on Macros. The book discusses them in the context of a [Lisp](https://en.wikipedia.org/wiki/Lisp_(programming_language)) known as [Clojure](https://en.wikipedia.org/wiki/Clojure). While the chapter linked above may feel like you have been dropped into the middle of an unfamiliar context, I think it is still a good read. 

**Reading and Evaluation**

In the Lisp world, code is _evaluated_ differently from other languages:

> 1. READ some text code. Like, just read it you know? Read the actual literal text strings of code. Once the _reader_ has _read_ some code, it turns it into _data structures_

> 2. EVALUATE: A Lisp is given a data structure to gobble up and apply different actions based on the shape of the data structure. 

What happens in the evaluation of data structures in a Lisp languages vs non-Lisp is succinctly described in Brave Clojure. Rather than re-summarize any more of Daniel Higginbotham's work, I'll borrow some of his excellent diagrams to illustrate the point:

**Non-lisp code evaluation**
([image source](https://www.braveclojure.com/read-and-eval/))

![](./images/non-lisp-eval.png)

***

**Lisp code evaluation**
([image source](https://www.braveclojure.com/read-and-eval/))


![](./images/lisp-eval.png)



