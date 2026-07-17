import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { StringRepresentable } from '../../../../../net/minecraft/util/StringRepresentable.d.ts'
export class PlainSignBlock$Attachment extends Enum<PlainSignBlock$Attachment> implements StringRepresentable {
    static CODEC: Codec<PlainSignBlock$Attachment>;
    static GROUND: PlainSignBlock$Attachment;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static WALL: PlainSignBlock$Attachment;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): PlainSignBlock$Attachment;
    static values(): PlainSignBlock$Attachment[];
    private constructor(name: string)
    // private name: string;
    getSerializedName(): string;
    name(): "WALL" | "GROUND";
}