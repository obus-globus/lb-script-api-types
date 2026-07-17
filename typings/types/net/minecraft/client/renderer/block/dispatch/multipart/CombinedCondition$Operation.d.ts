import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Predicate } from '../../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { StringRepresentable } from '../../../../../../../net/minecraft/util/StringRepresentable.d.ts'
export class CombinedCondition$Operation extends Enum<CombinedCondition$Operation> implements StringRepresentable {
    static AND: CombinedCondition$Operation;
    static CODEC: Codec<CombinedCondition$Operation>;
    static OR: CombinedCondition$Operation;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): CombinedCondition$Operation;
    static values(): CombinedCondition$Operation[];
    private constructor(name: string)
    // private name: string;
    apply<V extends unknown>(terms: (param0: V) => boolean[]): (param0: V) => boolean;
    getSerializedName(): string;
    name(): "AND" | "OR";
}