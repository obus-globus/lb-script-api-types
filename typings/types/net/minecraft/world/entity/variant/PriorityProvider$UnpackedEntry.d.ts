import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PriorityProvider$SelectorCondition } from '../../../../../net/minecraft/world/entity/variant/PriorityProvider$SelectorCondition.d.ts'
export class PriorityProvider$UnpackedEntry<C extends Object | number | string | boolean, T extends Object | number | string | boolean> extends Record {
    static HIGHEST_PRIORITY_FIRST: (param0: Object | null) => kotlin.Boolean;
    // private condition: (param0: C) => kotlin.Boolean;
    // private entry: T;
    // private priority: number;
    condition(): (param0: C) => kotlin.Boolean;
    entry(): T;
    equals(o: Object | null): boolean;
    hashCode(): number;
    priority(): number;
    toString(): string;
}