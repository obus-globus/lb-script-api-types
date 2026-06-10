import type { Consumer } from '../../../../../../../java/util/function/Consumer.d.ts'
import type { Supplier } from '../../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class ImmutableCollectionUtils extends Object {
    static getAsMutableList(paramarg0: () => (Object | null)[], paramarg1: (param0: (Object | null)[]) => void): (Object | null)[];
    static getAsMutableMap(paramarg0: () => Map<Object | null, Object | null>, paramarg1: (param0: Map<Object | null, Object | null>) => void): Map<Object | null, Object | null>;
    static getAsMutableSet(paramarg0: () => (Object | null)[], paramarg1: (param0: (Object | null)[]) => void): (Object | null)[];
    constructor()
}