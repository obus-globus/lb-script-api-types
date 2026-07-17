import type { Object } from '../../../java/lang/Object.d.ts'
import type { Equivalence } from '../../../org/graalvm/collections/Equivalence.d.ts'
export class EconomicSet<E extends unknown> {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static create<E extends unknown>(): E[];
    static create<E extends unknown>(paraminitialCapacity: number): E[];
    static create<E extends unknown>(paramc: E[]): E[];
    static create<E extends unknown>(paramstrategy: Equivalence): E[];
    static create<E extends unknown>(paramstrategy: Equivalence, paraminitialCapacity: number): E[];
    static create<E extends unknown>(paramstrategy: Equivalence, paramc: E[]): E[];
    static emptySet<E extends unknown>(): E[];
    static of<E extends unknown>(paramelem: E): E[];
}