import type { TypeParameterMatcher } from '../../../../io/netty/util/internal/TypeParameterMatcher.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class NoOpTypeParameterMatcher extends TypeParameterMatcher {
    static find(paramarg0: Object, paramarg1: Class<Object>, paramarg2: string): TypeParameterMatcher;
    static get(paramarg0: Class<Object>): TypeParameterMatcher;
    constructor()
    match(arg0: Object): boolean;
}