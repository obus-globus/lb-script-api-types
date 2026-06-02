import type { Lexer$LexerToken } from '../../../../com/oracle/js/parser/Lexer$LexerToken.d.ts'
import type { TruffleString } from '../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
export class Lexer$RegexToken extends Lexer$LexerToken {
    constructor(expression: TruffleString, options: TruffleString)
    readonly options: TruffleString;
    getOptions(): string;
    getOptionsTS(): TruffleString;
    toString(): string;
}