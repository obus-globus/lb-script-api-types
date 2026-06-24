import type { CollectCollectors$1 } from '../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class CollectCollectors$EnumSetAccumulator<E extends Enum<E>> extends Object {
    private constructor()
    constructor(arg0: CollectCollectors$1)
    // private set: E[];
    add(e: E): void;
    combine(other: CollectCollectors$EnumSetAccumulator<E>): CollectCollectors$EnumSetAccumulator<E>;
    toImmutableSet(): E[];
}