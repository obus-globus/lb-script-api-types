import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharStream } from '../../../../org/antlr/v4/runtime/CharStream.d.ts'
import type { Token } from '../../../../org/antlr/v4/runtime/Token.d.ts'
import type { TokenFactory } from '../../../../org/antlr/v4/runtime/TokenFactory.d.ts'
import type { TokenSource } from '../../../../org/antlr/v4/runtime/TokenSource.d.ts'
export class ListTokenSource extends Object implements TokenSource {
    constructor(arg0: Token[])
    constructor(arg0: Token[], arg1: string)
    // private _factory: TokenFactory<Object>;
    // private eofToken: Token;
    // private i: number;
    readonly sourceName: string;
    // private tokens: Token[];
    getCharPositionInLine(): number;
    getInputStream(): CharStream;
    getLine(): number;
    getSourceName(): string;
    getTokenFactory(): TokenFactory<Object>;
    nextToken(): Token;
    setTokenFactory(arg0: TokenFactory<Object>): void;
}