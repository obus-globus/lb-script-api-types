import type { ParserContextNode } from '../../../../com/oracle/js/parser/ParserContextNode.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class ParserContext$NodeIterator<T extends ParserContextNode> extends Object implements Iterator<T> {
    constructor(null_: ParserContext$NodeIterator<T>)
    constructor(null_: ParserContext$NodeIterator<T>, until: ParserContextNode)
    // private clazz: Class<T>;
    // private index: number;
    // private next: T;
    // private until: ParserContextNode;
    // private findNext(): T;
    forEachRemaining(arg0: (param0: T) => void): void;
    hasNext(): boolean;
    next(): T;
}