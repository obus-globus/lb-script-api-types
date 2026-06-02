import type { IntStream } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/IntStream.d.ts'
import type { Token } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/Token.d.ts'
import type { TokenSource } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/TokenSource.d.ts'
import type { Interval } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/misc/Interval.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface TokenStream extends IntStream, Object{
    LT(arg0: number): Token;
    get(arg0: number): Token;
    getText(arg0: Token, arg1: Token): string;
    getText(arg0: Interval): string;
    getTokenSource(): TokenSource;
}