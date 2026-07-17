import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { StringRepresentable } from '../../../../../../net/minecraft/util/StringRepresentable.d.ts'
export class CowVariant$ModelType extends Enum<CowVariant$ModelType> implements StringRepresentable {
    static CODEC: Codec<CowVariant$ModelType>;
    static COLD: CowVariant$ModelType;
    static NORMAL: CowVariant$ModelType;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static WARM: CowVariant$ModelType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): CowVariant$ModelType;
    static values(): CowVariant$ModelType[];
    private constructor(name: string)
    // private name: string;
    getSerializedName(): string;
    name(): "NORMAL" | "COLD" | "WARM";
}