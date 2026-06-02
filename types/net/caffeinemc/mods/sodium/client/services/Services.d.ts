import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Supplier } from '../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class Services extends Object {
    static load(paramarg0: Class<Object>): Object | null;
    static loadOr(paramarg0: Class<Object>, paramarg1: () => Object | null): Object | null;
    constructor()
}