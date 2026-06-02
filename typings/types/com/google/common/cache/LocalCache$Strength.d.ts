import type { Equivalence } from '../../../../com/google/common/base/Equivalence.d.ts'
import type { LocalCache$Segment } from '../../../../com/google/common/cache/LocalCache$Segment.d.ts'
import type { LocalCache$ValueReference } from '../../../../com/google/common/cache/LocalCache$ValueReference.d.ts'
import type { ReferenceEntry } from '../../../../com/google/common/cache/ReferenceEntry.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class LocalCache$Strength extends Enum<LocalCache$Strength> {
    static SOFT: LocalCache$Strength;
    static STRONG: LocalCache$Strength;
    static WEAK: LocalCache$Strength;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): LocalCache$Strength;
    static values(): (Object | null)[];
    private constructor()
    defaultEquivalence(): Equivalence<Object>;
    referenceValue<V extends Object | number | string | boolean>(segment: LocalCache$Segment<K, V>, entry: ReferenceEntry<K, V>, value: V, weight: number): LocalCache$ValueReference<K, V>;
    name(): "STRONG" | "SOFT" | "WEAK";
}