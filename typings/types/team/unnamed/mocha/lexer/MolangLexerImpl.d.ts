import type { Reader } from '../../../../java/io/Reader.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Cursor } from '../../../../team/unnamed/mocha/lexer/Cursor.d.ts'
import type { MolangLexer } from '../../../../team/unnamed/mocha/lexer/MolangLexer.d.ts'
import type { Token } from '../../../../team/unnamed/mocha/lexer/Token.d.ts'
export class MolangLexerImpl extends Object implements MolangLexer {
    constructor(arg0: Reader)
    // private cursor: Cursor;
    // private next: number;
    // private reader: Reader;
    // private token: Token;
    close(): void;
    current(): Token;
    cursor(): Cursor;
    next(): Token;
    // private next0(): Token;
    // private read(): number;
    tokenizeAll(): Token[];
}