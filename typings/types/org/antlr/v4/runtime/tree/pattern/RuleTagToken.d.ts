import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { CharStream } from '../../../../../../org/antlr/v4/runtime/CharStream.d.ts'
import type { Token } from '../../../../../../org/antlr/v4/runtime/Token.d.ts'
import type { TokenSource } from '../../../../../../org/antlr/v4/runtime/TokenSource.d.ts'
export class RuleTagToken extends Object implements Token {
    static DEFAULT_CHANNEL: number;
    static EOF: number;
    static EPSILON: number;
    static HIDDEN_CHANNEL: number;
    static INVALID_TYPE: number;
    static MIN_USER_CHANNEL_VALUE: number;
    static MIN_USER_TOKEN_TYPE: number;
    constructor(arg0: string, arg1: number)
    constructor(arg0: string, arg1: number, arg2: string)
    // private bypassTokenType: number;
    readonly label: string;
    readonly ruleName: string;
    getChannel(): number;
    getCharPositionInLine(): number;
    getInputStream(): CharStream;
    getLabel(): string;
    getLine(): number;
    getRuleName(): string;
    getStartIndex(): number;
    getStopIndex(): number;
    getText(): string;
    getTokenIndex(): number;
    getTokenSource(): TokenSource;
    getType(): number;
    toString(): string;
}