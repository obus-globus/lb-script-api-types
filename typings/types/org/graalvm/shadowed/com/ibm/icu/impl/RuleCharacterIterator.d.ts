import type { ParsePosition } from '../../../../../../../java/text/ParsePosition.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { RuleCharacterIterator$Position } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/RuleCharacterIterator$Position.d.ts'
import type { SymbolTable } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/SymbolTable.d.ts'
export class RuleCharacterIterator extends Object {
    static DONE: number;
    static PARSE_ESCAPES: number;
    static PARSE_VARIABLES: number;
    static SKIP_WHITESPACE: number;
    constructor(text: string, sym: SymbolTable, pos: ParsePosition)
    // private buf: string;
    // private bufPos: number;
    // private isEscaped: boolean;
    readonly pos: ParsePosition;
    // private sym: SymbolTable;
    // private text: string;
    // private _advance(count: number): void;
    // private _current(): number;
    atEnd(): boolean;
    getCurrentBuffer(): string;
    getCurrentBufferPos(): number;
    getPos(p: RuleCharacterIterator$Position): RuleCharacterIterator$Position;
    inVariable(): boolean;
    isEscaped(): boolean;
    jumpahead(count: number): void;
    next(options: number): number;
    setPos(p: RuleCharacterIterator$Position): void;
    skipIgnored(options: number): void;
    toString(): string;
}