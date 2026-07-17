import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { StringRepresentable } from '../../../../../net/minecraft/util/StringRepresentable.d.ts'
export class MipmapStrategy extends Enum<MipmapStrategy> implements StringRepresentable {
    static AUTO: MipmapStrategy;
    static CODEC: Codec<MipmapStrategy>;
    static CUTOUT: MipmapStrategy;
    static DARK_CUTOUT: MipmapStrategy;
    static MEAN: MipmapStrategy;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static STRICT_CUTOUT: MipmapStrategy;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): MipmapStrategy;
    static values(): MipmapStrategy[];
    private constructor(name: string)
    // private name: string;
    getSerializedName(): string;
    name(): "AUTO" | "MEAN" | "CUTOUT" | "STRICT_CUTOUT" | "DARK_CUTOUT";
}