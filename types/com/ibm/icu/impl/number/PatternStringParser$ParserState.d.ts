import type { IllegalArgumentException } from '../../../../../java/lang/IllegalArgumentException.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class PatternStringParser$ParserState extends Object {
    constructor(arg0: string)
    // private offset: number;
    // private pattern: string;
    next(): number;
    peek(): number;
    peek2(): number;
    toParseException(arg0: string): IllegalArgumentException;
}