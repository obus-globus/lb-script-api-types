import type { Lexer } from '../../../../com/oracle/js/parser/Lexer.d.ts'
import type { Source } from '../../../../com/oracle/js/parser/Source.d.ts'
import type { TokenStream } from '../../../../com/oracle/js/parser/TokenStream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Parser$ParserState extends Object {
    constructor(position: number, line: number, linePosition: number)
    // private line: number;
    // private linePosition: number;
    // private position: number;
    createLexer(source: Source, lexer: Lexer, stream: TokenStream, scripting: boolean, ecmaScriptVersion: number, shebang: boolean, isModule: boolean, allowBigInt: boolean, annexB: boolean): Lexer;
}