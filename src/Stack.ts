export default class Stack<T> {
  private array: Array<T>;

  constructor() {
    this.array = [];
  }

  public pop(): T {
    return this.array.pop() as T;
  }

  public push(e: T): void {
    this.array.push(e);
  }

  public isEmpty(): boolean {
    return this.array.length === 0;
  }

  public peek(): T {
    return this.array[this.array.length - 1];
  }

  public getSize(): number {
    return this.array.length;
  }
}

export function isValid(s: string): boolean {
  const chatArr: Array<string> = s.split("");
  const arrayStack = new Stack();
  for (let i = 0; i < chatArr.length; i++) {
    const char: string = s.charAt(i);
    debugger
    if (char === "{" || char === "[" || char === "(") {
      arrayStack.push(char);
    } else {
      if (arrayStack.isEmpty()) return false;
      const topChat = arrayStack.pop();
      if (topChat === "{" && char !== "}") return false;
      if (topChat === "[" && char !== "]") return false;
      if (topChat === "(" && char !== ")") return false;
    }
  }
  return arrayStack.isEmpty();
}
