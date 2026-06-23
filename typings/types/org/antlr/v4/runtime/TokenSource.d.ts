import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharStream } from '../../../../org/antlr/v4/runtime/CharStream.d.ts'
import type { Token } from '../../../../org/antlr/v4/runtime/Token.d.ts'
import type { TokenFactory } from '../../../../org/antlr/v4/runtime/TokenFactory.d.ts'
export interface TokenSource extends Object{
    getCharPositionInLine(): number;
    getInputStream(): CharStream;
    getLine(): number;
    getSourceName(): string;
    getTokenFactory(): TokenFactory<any>;
    nextToken(): Token;
    setTokenFactory(arg0: TokenFactory<any>): void;
}