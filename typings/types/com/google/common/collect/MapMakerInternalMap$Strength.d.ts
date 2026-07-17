import type { Equivalence } from '../../../../com/google/common/base/Equivalence.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class MapMakerInternalMap$Strength extends Enum<MapMakerInternalMap$Strength> {
    static STRONG: MapMakerInternalMap$Strength;
    static WEAK: MapMakerInternalMap$Strength;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): MapMakerInternalMap$Strength;
    static values(): MapMakerInternalMap$Strength[];
    private constructor()
    defaultEquivalence(): Equivalence<Object>;
    name(): "STRONG" | "WEAK";
}