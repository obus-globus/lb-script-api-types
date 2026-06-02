import type { RuleCharacterIterator$Position } from '../../../../com/ibm/icu/impl/RuleCharacterIterator$Position.d.ts'
import type { SymbolTable } from '../../../../com/ibm/icu/text/SymbolTable.d.ts'
import type { ParsePosition } from '../../../../java/text/ParsePosition.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RuleCharacterIterator extends Object {
    static DONE: number;
    static PARSE_ESCAPES: number;
    static PARSE_VARIABLES: number;
    static SKIP_WHITESPACE: number;
    constructor(arg0: string, arg1: SymbolTable, arg2: ParsePosition)
    // private buf: string;
    // private bufPos: number;
    // private isEscaped: boolean;
    readonly pos: ParsePosition;
    // private sym: SymbolTable;
    // private text: string;
    // private _advance(arg0: number): void;
    // private _current(): number;
    atEnd(): boolean;
    getCurrentBuffer(): string;
    getCurrentBufferPos(): number;
    getPos(arg0: RuleCharacterIterator$Position): RuleCharacterIterator$Position;
    inVariable(): boolean;
    isEscaped(): boolean;
    jumpahead(arg0: number): void;
    next(arg0: number): number;
    setPos(arg0: RuleCharacterIterator$Position): void;
    skipIgnored(arg0: number): void;
    toString(): string;
}