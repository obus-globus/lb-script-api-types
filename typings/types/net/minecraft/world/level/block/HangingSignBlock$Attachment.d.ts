import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { StringRepresentable } from '../../../../../net/minecraft/util/StringRepresentable.d.ts'
export class HangingSignBlock$Attachment extends Enum<HangingSignBlock$Attachment> implements StringRepresentable {
    static CEILING: HangingSignBlock$Attachment;
    static CEILING_MIDDLE: HangingSignBlock$Attachment;
    static CODEC: Codec<HangingSignBlock$Attachment>;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static WALL: HangingSignBlock$Attachment;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): HangingSignBlock$Attachment;
    static values(): HangingSignBlock$Attachment[];
    private constructor(name: string)
    // private name: string;
    getSerializedName(): string;
    name(): "WALL" | "CEILING" | "CEILING_MIDDLE";
}