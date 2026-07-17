import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Cursor } from '../../../../team/unnamed/mocha/lexer/Cursor.d.ts'
import type { MolangLexer } from '../../../../team/unnamed/mocha/lexer/MolangLexer.d.ts'
import type { MolangParser } from '../../../../team/unnamed/mocha/parser/MolangParser.d.ts'
import type { Expression } from '../../../../team/unnamed/mocha/parser/ast/Expression.d.ts'
export class MolangParserImpl extends Object implements MolangParser {
    constructor(arg0: MolangLexer)
    // private current: Object;
    // private lexer: MolangLexer;
    close(): void;
    current(): Expression;
    cursor(): Cursor;
    lexer(): MolangLexer;
    next(): Expression;
    // private next0(): Expression;
    parseAll(): Expression[];
}