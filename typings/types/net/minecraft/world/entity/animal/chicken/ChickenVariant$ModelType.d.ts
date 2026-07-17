import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { StringRepresentable } from '../../../../../../net/minecraft/util/StringRepresentable.d.ts'
export class ChickenVariant$ModelType extends Enum<ChickenVariant$ModelType> implements StringRepresentable {
    static CODEC: Codec<ChickenVariant$ModelType>;
    static COLD: ChickenVariant$ModelType;
    static NORMAL: ChickenVariant$ModelType;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): ChickenVariant$ModelType;
    static values(): ChickenVariant$ModelType[];
    private constructor(name: string)
    // private name: string;
    getSerializedName(): string;
    name(): "NORMAL" | "COLD";
}