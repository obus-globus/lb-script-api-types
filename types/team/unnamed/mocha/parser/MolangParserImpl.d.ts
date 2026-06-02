import type { Reader } from '../../../../java/io/Reader.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Cursor } from '../../../../team/unnamed/mocha/lexer/Cursor.d.ts'
import type { MolangLexer } from '../../../../team/unnamed/mocha/lexer/MolangLexer.d.ts'
import type { MolangParser } from '../../../../team/unnamed/mocha/parser/MolangParser.d.ts'
import type { Expression } from '../../../../team/unnamed/mocha/parser/ast/Expression.d.ts'
export class MolangParserImpl extends Object implements MolangParser {
    static parseAll(paramarg0: Reader): Expression[];
    static parseAll(paramarg0: string): Expression[];
    static parser(paramarg0: Reader): MolangParser;
    static parser(paramarg0: string): MolangParser;
    static parser(paramarg0: MolangLexer): MolangParser;
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