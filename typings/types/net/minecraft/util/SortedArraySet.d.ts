import type { Comparator } from '../../../java/util/Comparator.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../java/lang/Comparable.d.ts'
export class SortedArraySet<T extends unknown> {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static create<T extends Comparable<T>>(): T[];
    static create<T extends Comparable<T>>(paraminitialCapacity: number): T[];
    static create<T extends unknown>(paramcomparator: (param0: T, param1: T) => number): T[];
    static create<T extends unknown>(paramcomparator: (param0: T, param1: T) => number, paraminitialCapacity: number): T[];
}