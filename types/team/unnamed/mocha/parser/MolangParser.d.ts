import type { Closeable } from '../../../../java/io/Closeable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Cursor } from '../../../../team/unnamed/mocha/lexer/Cursor.d.ts'
import type { MolangLexer } from '../../../../team/unnamed/mocha/lexer/MolangLexer.d.ts'
import type { Expression } from '../../../../team/unnamed/mocha/parser/ast/Expression.d.ts'
export interface MolangParser extends Closeable, Object{
    close(): void;
    current(): Expression;
    cursor(): Cursor;
    lexer(): MolangLexer;
    next(): Expression;
    parseAll(): Expression[];
}