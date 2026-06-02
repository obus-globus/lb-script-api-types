import type { CharStream } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/CharStream.d.ts'
import type { CommonToken } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/CommonToken.d.ts'
import type { TokenFactory } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/TokenFactory.d.ts'
import type { TokenSource } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/TokenSource.d.ts'
import type { Pair } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/misc/Pair.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class CommonTokenFactory extends Object implements TokenFactory<CommonToken> {
    static DEFAULT: TokenFactory<CommonToken>;
    constructor()
    constructor(arg0: boolean)
    // private copyText: boolean;
    create(arg0: Pair<TokenSource, CharStream>, arg1: number, arg2: string, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): CommonToken;
}