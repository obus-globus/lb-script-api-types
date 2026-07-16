import type { CheckedFunction } from '../../../../io/jsonwebtoken/impl/lang/CheckedFunction.d.ts'
import type { Function } from '../../../../io/jsonwebtoken/impl/lang/Function.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { RuntimeException } from '../../../../java/lang/RuntimeException.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Functions extends Object {
    static andThen<T extends unknown, V extends unknown, R extends unknown>(paramarg0: Function<T, V>, paramarg1: Function<V, R>): Function<T, R>;
    static firstResult<T extends unknown, R extends unknown>(...paramarg0: Function<T, R>[]): Function<T, R>;
    static identity<T extends unknown>(): Function<T, T>;
    static wrap<T extends unknown, R extends unknown, E extends RuntimeException>(paramarg0: Function<T, R>, paramarg1: Class<E>, paramarg2: string, ...paramarg3: Object[]): Function<T, R>;
    static wrapFmt<T extends unknown, R extends unknown, E extends RuntimeException>(paramarg0: CheckedFunction<T, R>, paramarg1: Class<E>, paramarg2: string): Function<T, R>;
    private constructor()
}