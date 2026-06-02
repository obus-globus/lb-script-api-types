import type { TruffleString } from '../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class Lexer$LexerToken extends Object {
    constructor(expression: TruffleString)
    readonly expression: TruffleString;
    getExpression(): string;
    getExpressionTS(): TruffleString;
}