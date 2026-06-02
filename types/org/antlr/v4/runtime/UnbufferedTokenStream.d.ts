import type { Object } from '../../../../java/lang/Object.d.ts'
import type { RuleContext } from '../../../../org/antlr/v4/runtime/RuleContext.d.ts'
import type { Token } from '../../../../org/antlr/v4/runtime/Token.d.ts'
import type { TokenSource } from '../../../../org/antlr/v4/runtime/TokenSource.d.ts'
import type { TokenStream } from '../../../../org/antlr/v4/runtime/TokenStream.d.ts'
import type { Interval } from '../../../../org/antlr/v4/runtime/misc/Interval.d.ts'
export class UnbufferedTokenStream<T extends Token> extends Object implements TokenStream {
    static EOF: number;
    static UNKNOWN_SOURCE_NAME: string;
    constructor(arg0: TokenSource)
    constructor(arg0: TokenSource, arg1: number)
    // private currentTokenIndex: number;
    // private lastToken: Token;
    // private lastTokenBufferStart: Token;
    // private n: number;
    // private numMarkers: number;
    // private p: number;
    tokenSource: TokenSource;
    // private tokens: Token[];
    LA(arg0: number): number;
    LT(arg0: number): Token;
    add(arg0: Token): void;
    consume(): void;
    fill(arg0: number): number;
    get(arg0: number): Token;
    getBufferStartIndex(): number;
    getSourceName(): string;
    getText(): string;
    getText(arg0: RuleContext): string;
    getText(arg0: Token, arg1: Token): string;
    getText(arg0: Interval): string;
    getTokenSource(): TokenSource;
    index(): number;
    mark(): number;
    release(arg0: number): void;
    seek(arg0: number): void;
    size(): number;
    sync(arg0: number): void;
}