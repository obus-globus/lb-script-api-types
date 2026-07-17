import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { StringRepresentable } from '../../../../../../net/minecraft/util/StringRepresentable.d.ts'
export class PigVariant$ModelType extends Enum<PigVariant$ModelType> implements StringRepresentable {
    static CODEC: Codec<PigVariant$ModelType>;
    static COLD: PigVariant$ModelType;
    static NORMAL: PigVariant$ModelType;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): PigVariant$ModelType;
    static values(): PigVariant$ModelType[];
    private constructor(name: string)
    // private name: string;
    getSerializedName(): string;
    name(): "NORMAL" | "COLD";
}