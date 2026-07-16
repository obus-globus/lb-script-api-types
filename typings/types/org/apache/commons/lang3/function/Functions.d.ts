import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Functions extends Object {
    static apply<T extends unknown, R extends unknown>(paramarg0: (param0: T) => R, paramarg1: T): R;
    static applyNonNull<T extends unknown, R extends unknown>(paramarg0: T, paramarg1: (param0: Object) => R): R;
    static applyNonNull<T extends unknown, U extends unknown, R extends unknown>(paramarg0: T, paramarg1: (param0: Object) => U, paramarg2: (param0: Object) => R): R;
    static applyNonNull<T extends unknown, U extends unknown, V extends unknown, R extends unknown>(paramarg0: T, paramarg1: (param0: Object) => U, paramarg2: (param0: Object) => V, paramarg3: (param0: Object) => R): R;
    static function<T extends unknown, R extends unknown>(paramarg0: (param0: T) => R): (param0: T) => R;
    private constructor()
}