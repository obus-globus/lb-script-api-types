import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ConfigUtil extends Object {
    static withDefault<R extends unknown>(paramarg0: R, paramarg1: R): R;
    static withDefault<R extends unknown>(paramarg0: R, paramarg1: () => R): R;
    static withDefault<R extends unknown>(paramarg0: () => R, paramarg1: R): R;
    constructor()
}