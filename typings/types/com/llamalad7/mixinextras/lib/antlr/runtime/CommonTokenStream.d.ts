import type { BufferedTokenStream } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/BufferedTokenStream.d.ts'
import type { Token } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/Token.d.ts'
import type { TokenSource } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/TokenSource.d.ts'
export class CommonTokenStream extends BufferedTokenStream {
    constructor(arg0: TokenSource)
    // private channel: number;
    LB(arg0: number): Token;
    LT(arg0: number): Token;
    adjustSeekIndex(arg0: number): number;
}