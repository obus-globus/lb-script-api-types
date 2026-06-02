import type { TokenFilter } from '../../../../../io/github/douira/glsl_transformer/token_filter/TokenFilter.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharStream } from '../../../../../org/antlr/v4/runtime/CharStream.d.ts'
import type { Token } from '../../../../../org/antlr/v4/runtime/Token.d.ts'
import type { TokenFactory } from '../../../../../org/antlr/v4/runtime/TokenFactory.d.ts'
import type { TokenSource } from '../../../../../org/antlr/v4/runtime/TokenSource.d.ts'
export class FilterTokenSource extends Object implements TokenSource {
    constructor(arg0: TokenSource)
    // private filter: TokenFilter<Object>;
    // private source: TokenSource;
    getCharPositionInLine(): number;
    getInputStream(): CharStream;
    getLine(): number;
    getSourceName(): string;
    getTokenFactory(): TokenFactory<Object>;
    getTokenFilter(): TokenFilter<Object>;
    nextToken(): Token;
    resetState(): void;
    setTokenFactory(arg0: TokenFactory<Object>): void;
    setTokenFilter(arg0: TokenFilter<Object>): void;
}