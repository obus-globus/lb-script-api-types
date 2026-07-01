import type { Equivalence } from '../../../../com/google/common/base/Equivalence.d.ts'
import type { MapMakerInternalMap$DummyInternalEntry } from '../../../../com/google/common/collect/MapMakerInternalMap$DummyInternalEntry.d.ts'
import type { MapMakerInternalMap$WeakValueReference } from '../../../../com/google/common/collect/MapMakerInternalMap$WeakValueReference.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class MapMakerInternalMap$Strength extends Enum<MapMakerInternalMap$Strength> {
    static STRONG: MapMakerInternalMap$Strength;
    static WEAK: MapMakerInternalMap$Strength;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): MapMakerInternalMap$Strength;
    static values(): (Object | null)[];
    constructor(arg2: MapMakerInternalMap$WeakValueReference<Object, Object, MapMakerInternalMap$DummyInternalEntry>)
    defaultEquivalence(): Equivalence<Object>;
    name(): "STRONG" | "WEAK";
}