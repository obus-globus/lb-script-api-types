import type { TokenTyped } from '../../../../../../io/github/douira/glsl_transformer/ast/data/TokenTyped.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Token } from '../../../../../../org/antlr/v4/runtime/Token.d.ts'
export class TypeUtil extends Object {
    static enumFromToken<E extends TokenTyped>(paramarg0: E[], paramarg1: Token): E;
    static enumFromToken<E extends unknown>(paramarg0: E[], paramarg1: number[], paramarg2: Token): E;
    constructor()
}