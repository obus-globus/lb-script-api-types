import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class CollectCollectors$EnumSetAccumulator<E extends Enum<E>> extends Object {
    constructor(arg0: any)
    // private set: E[];
    add(e: E): void;
    combine(other: CollectCollectors$EnumSetAccumulator<E>): CollectCollectors$EnumSetAccumulator<E>;
    toImmutableSet(): E[];
}