import type { CharStream } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/CharStream.d.ts'
import type { Token } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/Token.d.ts'
import type { TokenFactory } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/TokenFactory.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface TokenSource extends Object{
    getCharPositionInLine(): number;
    getInputStream(): CharStream;
    getLine(): number;
    getTokenFactory(): TokenFactory<any>;
    nextToken(): Token;
}