import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Supplier } from '../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class Services extends Object {
    static load<T extends unknown>(paramarg0: Class<T>): T;
    static loadOr<T extends unknown>(paramarg0: Class<T>, paramarg1: () => T): T;
    constructor()
}