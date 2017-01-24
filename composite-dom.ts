// Chris Leatham
// Lab 4

interface IDomElement {
  print();
}

class DomElement implements IDomElement {
  element:string;
  text:string;
  allElements:IDomElement[];
  
  constructor(element:string, text?:string) {
    this.element = element;
    this.allElements = [];
    this.text = text;
  }

  print() {
    console.log('<${this.element}>');
    if (this.text) {
      console.log(this.text);
    }

    for (let element of this.allElements) {
      element.print();
    
    }
    console.log('</${this.elementName}>');
  }

  add(element:IDomElement) {
    this.allElements.push(element);
  }

}

class TextNode {
  private text:string;
  constructor(text:string) {
    this.text = text;
  }
  print() {
    console.log(this.text);
  }
}

let p1 = new DomElement("p");
let div = new DomElement("div");
let html = new DomElement("html");
p1.add(new TextNode("Does this work?"));
html.add(div);
html.print();