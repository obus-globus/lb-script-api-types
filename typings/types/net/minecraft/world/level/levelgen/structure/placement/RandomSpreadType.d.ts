import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { RandomSource } from '../../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { StringRepresentable } from '../../../../../../../net/minecraft/util/StringRepresentable.d.ts'
export class RandomSpreadType extends Enum<RandomSpreadType> implements StringRepresentable {
    static CODEC: Codec<RandomSpreadType>;
    static LINEAR: RandomSpreadType;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static TRIANGULAR: RandomSpreadType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): RandomSpreadType;
    static values(): RandomSpreadType[];
    private constructor(id: string)
    // private id: string;
    evaluate(random: RandomSource, limit: number): number;
    getSerializedName(): string;
    name(): "LINEAR" | "TRIANGULAR";
}