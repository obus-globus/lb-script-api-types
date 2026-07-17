import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Component } from '../../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { StringRepresentable } from '../../../../../../../net/minecraft/util/StringRepresentable.d.ts'
export class StructureMode extends Enum<StructureMode> implements StringRepresentable {
    static CORNER: StructureMode;
    static DATA: StructureMode;
    static LEGACY_CODEC: Codec<StructureMode>;
    static LOAD: StructureMode;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static SAVE: StructureMode;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): StructureMode;
    static values(): StructureMode[];
    private constructor(name: string)
    readonly displayName: Component;
    // private name: string;
    getDisplayName(): Component;
    getSerializedName(): string;
    name(): "SAVE" | "LOAD" | "CORNER" | "DATA";
}