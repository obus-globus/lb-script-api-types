import type { Codec } from '../../../com/mojang/serialization/Codec.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
import type { Component } from '../../../net/minecraft/network/chat/Component.d.ts'
import type { StringRepresentable } from '../../../net/minecraft/util/StringRepresentable.d.ts'
export class PresenceSharing extends Enum<PresenceSharing> implements StringRepresentable {
    static ALL: PresenceSharing;
    static CODEC: Codec<PresenceSharing>;
    static LIMITED: PresenceSharing;
    static NONE: PresenceSharing;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static TRANSLATION_KEY_BASE: string;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): PresenceSharing;
    static values(): PresenceSharing[];
    private constructor(name: string)
    // private name: string;
    readonly tooltip: Component;
    // private translatable: Component;
    getSerializedName(): string;
    getTooltip(): Component;
    getTranslation(): Component;
    name(): "NONE" | "LIMITED" | "ALL";
}