import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharStream } from '../../../../org/antlr/v4/runtime/CharStream.d.ts'
import type { CommonToken } from '../../../../org/antlr/v4/runtime/CommonToken.d.ts'
import type { TokenFactory } from '../../../../org/antlr/v4/runtime/TokenFactory.d.ts'
import type { TokenSource } from '../../../../org/antlr/v4/runtime/TokenSource.d.ts'
import type { Pair } from '../../../../org/antlr/v4/runtime/misc/Pair.d.ts'
export class CommonTokenFactory extends Object implements TokenFactory<CommonToken> {
    static DEFAULT: TokenFactory<CommonToken>;
    constructor()
    constructor(arg0: boolean)
    // private copyText: boolean;
    create(arg0: number, arg1: string): CommonToken;
    create(arg0: Pair<TokenSource, CharStream>, arg1: number, arg2: string, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): CommonToken;
}