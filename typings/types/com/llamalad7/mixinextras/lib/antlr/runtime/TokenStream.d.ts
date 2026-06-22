import type { IntStream } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/IntStream.d.ts'
import type { Token } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/Token.d.ts'
import type { TokenSource } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/TokenSource.d.ts'
import type { Interval } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/misc/Interval.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface TokenStream extends IntStream, Object{
    LA(arg0: number): number;
    LT(arg0: number): Token;
    consume(): void;
    get(arg0: number): Token;
    getText(arg0: Token, arg1: Token): string;
    getText(arg0: Interval): string;
    getTokenSource(): TokenSource;
    index(): number;
    mark(): number;
    release(arg0: number): void;
    seek(arg0: number): void;
    size(): number;
}