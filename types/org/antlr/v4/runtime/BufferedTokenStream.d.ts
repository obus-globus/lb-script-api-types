import type { Object } from '../../../../java/lang/Object.d.ts'
import type { RuleContext } from '../../../../org/antlr/v4/runtime/RuleContext.d.ts'
import type { Token } from '../../../../org/antlr/v4/runtime/Token.d.ts'
import type { TokenSource } from '../../../../org/antlr/v4/runtime/TokenSource.d.ts'
import type { TokenStream } from '../../../../org/antlr/v4/runtime/TokenStream.d.ts'
import type { Interval } from '../../../../org/antlr/v4/runtime/misc/Interval.d.ts'
export class BufferedTokenStream extends Object implements TokenStream {
    static EOF: number;
    static UNKNOWN_SOURCE_NAME: string;
    constructor(arg0: TokenSource)
    // private fetchedEOF: boolean;
    // private p: number;
    tokenSource: TokenSource;
    tokens: Token[];
    LA(arg0: number): number;
    LB(arg0: number): Token;
    LT(arg0: number): Token;
    adjustSeekIndex(arg0: number): number;
    consume(): void;
    fetch(arg0: number): number;
    fill(): void;
    filterForChannel(arg0: number, arg1: number, arg2: number): Token[];
    get(arg0: number): Token;
    get(arg0: number, arg1: number): Token[];
    getHiddenTokensToLeft(arg0: number): Token[];
    getHiddenTokensToLeft(arg0: number, arg1: number): Token[];
    getHiddenTokensToRight(arg0: number): Token[];
    getHiddenTokensToRight(arg0: number, arg1: number): Token[];
    getSourceName(): string;
    getText(): string;
    getText(arg0: RuleContext): string;
    getText(arg0: Token, arg1: Token): string;
    getText(arg0: Interval): string;
    getTokenSource(): TokenSource;
    getTokens(): Token[];
    getTokens(arg0: number, arg1: number): Token[];
    getTokens(arg0: number, arg1: number, arg2: number): Token[];
    getTokens(arg0: number, arg1: number, arg2: number[]): Token[];
    index(): number;
    lazyInit(): void;
    mark(): number;
    nextTokenOnChannel(arg0: number, arg1: number): number;
    previousTokenOnChannel(arg0: number, arg1: number): number;
    release(arg0: number): void;
    reset(): void;
    seek(arg0: number): void;
    setTokenSource(arg0: TokenSource): void;
    setup(): void;
    size(): number;
    sync(arg0: number): boolean;
}