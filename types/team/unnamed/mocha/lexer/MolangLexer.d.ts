import type { Closeable } from '../../../../java/io/Closeable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Cursor } from '../../../../team/unnamed/mocha/lexer/Cursor.d.ts'
import type { Token } from '../../../../team/unnamed/mocha/lexer/Token.d.ts'
export interface MolangLexer extends Closeable, Object{
    close(): void;
    current(): Token;
    cursor(): Cursor;
    next(): Token;
    tokenizeAll(): Token[];
}