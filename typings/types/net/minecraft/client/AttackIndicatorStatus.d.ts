import type { Codec } from '../../../com/mojang/serialization/Codec.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
import type { Component } from '../../../net/minecraft/network/chat/Component.d.ts'
export class AttackIndicatorStatus extends Enum<AttackIndicatorStatus> {
    static CROSSHAIR: AttackIndicatorStatus;
    static HOTBAR: AttackIndicatorStatus;
    static LEGACY_CODEC: Codec<AttackIndicatorStatus>;
    static OFF: AttackIndicatorStatus;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): AttackIndicatorStatus;
    static values(): AttackIndicatorStatus[];
    private constructor(id: number, key: string)
    // private caption: Component;
    // private id: number;
    caption(): Component;
    name(): "OFF" | "CROSSHAIR" | "HOTBAR";
}