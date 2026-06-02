import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ConfigUtil extends Object {
    static withDefault(paramarg0: Object | null, paramarg1: Object | null): Object | null;
    static withDefault(paramarg0: Object | null, paramarg1: () => Object | null): Object | null;
    static withDefault(paramarg0: () => Object | null, paramarg1: Object | null): Object | null;
    constructor()
}