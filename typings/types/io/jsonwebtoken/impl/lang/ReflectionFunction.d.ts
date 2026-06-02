import type { Function } from '../../../../io/jsonwebtoken/impl/lang/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class ReflectionFunction<T extends Object | number | string | boolean, R extends Object | number | string | boolean> extends Object implements Function<T, R> {
    static ERR_MSG: string;
    constructor()
    apply(arg0: T): R;
    invoke(arg0: T): R;
    supports(arg0: T): boolean;
}