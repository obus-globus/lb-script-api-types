import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../java/util/Iterator.d.ts'
import type { Token } from '../../../org/anarres/cpp/Token.d.ts'
export class SourceIterator extends Object implements Iterator<Token> {
    constructor(arg0: Token[])
    // private source: Token[];
    // private tok: Token;
    // private advance(): void;
    forEachRemaining(arg0: (param0: Token) => void): void;
    hasNext(): boolean;
    next(): Token;
    remove(): void;
}