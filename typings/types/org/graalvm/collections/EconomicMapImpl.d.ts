import type { Object } from '../../../java/lang/Object.d.ts'
import type { Equivalence } from '../../../org/graalvm/collections/Equivalence.d.ts'
import type { UnmodifiableEconomicMap } from '../../../org/graalvm/collections/UnmodifiableEconomicMap.d.ts'
export class EconomicMapImpl<K extends unknown, V extends unknown> {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static create<K extends unknown, V extends unknown>(paramstrategy: Equivalence): (Object | null)[];
    static create<K extends unknown, V extends unknown>(paramstrategy: Equivalence, paraminitialCapacity: number): (Object | null)[];
    static create<K extends unknown, V extends unknown>(paramstrategy: Equivalence, paramother: UnmodifiableEconomicMap<K, V>): (Object | null)[];
    static create<K extends unknown, V extends unknown>(paramstrategy: Equivalence, paramother: K[]): (Object | null)[];
}