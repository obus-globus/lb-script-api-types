import type { BufferedTokenStream } from '../../../../org/antlr/v4/runtime/BufferedTokenStream.d.ts'
import type { Token } from '../../../../org/antlr/v4/runtime/Token.d.ts'
import type { TokenSource } from '../../../../org/antlr/v4/runtime/TokenSource.d.ts'
export class CommonTokenStream extends BufferedTokenStream {
    static EOF: number;
    static UNKNOWN_SOURCE_NAME: string;
    constructor(arg0: TokenSource)
    constructor(arg0: TokenSource, arg1: number)
    // private channel: number;
    LB(arg0: number): Token;
    LT(arg0: number): Token;
    adjustSeekIndex(arg0: number): number;
    getNumberOfOnChannelTokens(): number;
}