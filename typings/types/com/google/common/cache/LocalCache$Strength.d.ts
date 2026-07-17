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
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): LocalCache$Strength;
    static values(): LocalCache$Strength[];
    private constructor()
    defaultEquivalence(): Equivalence<Object>;
    referenceValue<K extends unknown, V extends unknown>(segment: LocalCache$Segment<K, V>, entry: ReferenceEntry<K, V>, value: V, weight: number): LocalCache$ValueReference<K, V>;
    name(): "STRONG" | "SOFT" | "WEAK";
}