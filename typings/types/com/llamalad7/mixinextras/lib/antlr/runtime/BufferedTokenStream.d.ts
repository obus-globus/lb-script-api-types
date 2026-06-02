import type { Token } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/Token.d.ts'
import type { TokenSource } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/TokenSource.d.ts'
import type { TokenStream } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/TokenStream.d.ts'
import type { Interval } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/misc/Interval.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class BufferedTokenStream extends Object implements TokenStream {
    constructor(arg0: TokenSource)
    // private fetchedEOF: boolean;
    // private p: number;
    tokenSource: TokenSource;
    // private tokens: Token[];
    LA(arg0: number): number;
    LB(arg0: number): Token;
    LT(arg0: number): Token;
    adjustSeekIndex(arg0: number): number;
    consume(): void;
    fetch(arg0: number): number;
    get(arg0: number): Token;
    getText(arg0: Token, arg1: Token): string;
    getText(arg0: Interval): string;
    getTokenSource(): TokenSource;
    index(): number;
    lazyInit(): void;
    mark(): number;
    nextTokenOnChannel(arg0: number, arg1: number): number;
    previousTokenOnChannel(arg0: number, arg1: number): number;
    release(arg0: number): void;
    seek(arg0: number): void;
    setup(): void;
    size(): number;
    sync(arg0: number): boolean;
}