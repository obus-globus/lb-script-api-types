import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharStream } from '../../../../org/antlr/v4/runtime/CharStream.d.ts'
import type { Token } from '../../../../org/antlr/v4/runtime/Token.d.ts'
import type { TokenSource } from '../../../../org/antlr/v4/runtime/TokenSource.d.ts'
import type { Pair } from '../../../../org/antlr/v4/runtime/misc/Pair.d.ts'
export interface TokenFactory<Symbol extends Token> extends Object{
    create(arg0: number, arg1: string): Symbol;
    create(arg0: Pair<TokenSource, CharStream>, arg1: number, arg2: string, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): Symbol;
}