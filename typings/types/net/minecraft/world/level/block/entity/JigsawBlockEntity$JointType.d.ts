import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { StringRepresentable } from '../../../../../../net/minecraft/util/StringRepresentable.d.ts'
import type { StringRepresentable$EnumCodec } from '../../../../../../net/minecraft/util/StringRepresentable$EnumCodec.d.ts'
export class JigsawBlockEntity$JointType extends Enum<JigsawBlockEntity$JointType> implements StringRepresentable {
    static ALIGNED: JigsawBlockEntity$JointType;
    static CODEC: StringRepresentable$EnumCodec<JigsawBlockEntity$JointType>;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static ROLLABLE: JigsawBlockEntity$JointType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): JigsawBlockEntity$JointType;
    static values(): JigsawBlockEntity$JointType[];
    private constructor(name: string)
    // private name: string;
    getSerializedName(): string;
    getTranslatedName(): Component;
    name(): "ROLLABLE" | "ALIGNED";
}