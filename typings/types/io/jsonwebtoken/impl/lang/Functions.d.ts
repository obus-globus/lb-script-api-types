import type { CheckedFunction } from '../../../../io/jsonwebtoken/impl/lang/CheckedFunction.d.ts'
import type { Function } from '../../../../io/jsonwebtoken/impl/lang/Function.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { RuntimeException } from '../../../../java/lang/RuntimeException.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Functions extends Object {
    static andThen(paramarg0: Function<Object, Object>, paramarg1: Function<Object, Object>): Function<Object, Object>;
    static firstResult(...paramarg0: Object | null): Function<Object, Object>;
    static identity(): Function<Object, Object>;
    static wrap(paramarg0: Function<Object, Object>, paramarg1: Class<RuntimeException>, paramarg2: string, ...paramarg3: (Object | null)[]): Function<Object, Object>;
    static wrapFmt(paramarg0: CheckedFunction<Object, Object>, paramarg1: Class<RuntimeException>, paramarg2: string): Function<Object, Object>;
    private constructor()
}