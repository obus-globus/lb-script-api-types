import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { DataComponentType } from '../../../../../../../net/minecraft/core/component/DataComponentType.d.ts'
import type { Component } from '../../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { StringRepresentable } from '../../../../../../../net/minecraft/util/StringRepresentable.d.ts'
export class SetNameFunction$Target extends Enum<SetNameFunction$Target> implements StringRepresentable {
    static CODEC: Codec<SetNameFunction$Target>;
    static CUSTOM_NAME: SetNameFunction$Target;
    static ITEM_NAME: SetNameFunction$Target;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): SetNameFunction$Target;
    static values(): SetNameFunction$Target[];
    private constructor(name: string)
    // private name: string;
    component(): DataComponentType<Component>;
    getSerializedName(): string;
    name(): "CUSTOM_NAME" | "ITEM_NAME";
}