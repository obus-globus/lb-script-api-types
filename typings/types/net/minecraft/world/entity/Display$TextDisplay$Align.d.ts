import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { StringRepresentable } from '../../../../net/minecraft/util/StringRepresentable.d.ts'
export class Display$TextDisplay$Align extends Enum<Display$TextDisplay$Align> implements StringRepresentable {
    static CENTER: Display$TextDisplay$Align;
    static CODEC: Codec<Display$TextDisplay$Align>;
    static LEFT: Display$TextDisplay$Align;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static RIGHT: Display$TextDisplay$Align;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): Display$TextDisplay$Align;
    static values(): Display$TextDisplay$Align[];
    private constructor(name: string)
    // private name: string;
    getSerializedName(): string;
    name(): "CENTER" | "LEFT" | "RIGHT";
}