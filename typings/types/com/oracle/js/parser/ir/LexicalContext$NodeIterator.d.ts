import type { LexicalContext } from '../../../../../com/oracle/js/parser/ir/LexicalContext.d.ts'
import type { LexicalContextNode } from '../../../../../com/oracle/js/parser/ir/LexicalContextNode.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../java/util/Iterator.d.ts'
export class LexicalContext$NodeIterator<T extends LexicalContextNode> extends Object implements Iterator<T> {
    constructor(null_: LexicalContext, clazz: Class<T>)
    constructor(null_: LexicalContext, clazz: Class<T>, until: LexicalContextNode)
    // private clazz: Class<T>;
    // private index: number;
    // private next: T;
    // private until: LexicalContextNode;
    // private findNext(): T;
    forEachRemaining(arg0: (param0: T) => void): void;
    hasNext(): boolean;
    next(): T;
}