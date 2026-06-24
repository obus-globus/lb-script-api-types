import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PriorityProvider$SelectorCondition } from '../../../../../net/minecraft/world/entity/variant/PriorityProvider$SelectorCondition.d.ts'
export class PriorityProvider$UnpackedEntry<C extends unknown, T extends unknown> extends Record {
    static HIGHEST_PRIORITY_FIRST: (param0: Object) => boolean;
    constructor(entry: T, priority: number, condition: (param0: Object | null) => boolean)
    // private condition: (param0: Object | null) => boolean;
    // private entry: T;
    // private priority: number;
    condition(): (param0: Object | null) => boolean;
    entry(): T;
    equals(o: Object | null): boolean;
    hashCode(): number;
    priority(): number;
    toString(): string;
}