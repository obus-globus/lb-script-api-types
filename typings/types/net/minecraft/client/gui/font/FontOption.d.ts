import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { StringRepresentable } from '../../../../../net/minecraft/util/StringRepresentable.d.ts'
export class FontOption extends Enum<FontOption> implements StringRepresentable {
    static CODEC: Codec<FontOption>;
    static JAPANESE_VARIANTS: FontOption;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static UNIFORM: FontOption;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): FontOption;
    static values(): FontOption[];
    private constructor(name: string)
    // private name: string;
    getSerializedName(): string;
    name(): "UNIFORM" | "JAPANESE_VARIANTS";
}