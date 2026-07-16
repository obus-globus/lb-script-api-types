import type { Consumer } from '../../../../../../../java/util/function/Consumer.d.ts'
import type { Supplier } from '../../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class ImmutableCollectionUtils extends Object {
    static getAsMutableList<T extends unknown>(paramarg0: () => T[], paramarg1: (param0: T[]) => void): T[];
    static getAsMutableMap<K extends unknown, V extends unknown>(paramarg0: () => Map<K, V>, paramarg1: (param0: Map<K, V>) => void): Map<K, V>;
    static getAsMutableSet<T extends unknown>(paramarg0: () => T[], paramarg1: (param0: T[]) => void): T[];
    constructor()
}