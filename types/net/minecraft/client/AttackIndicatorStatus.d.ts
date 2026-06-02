import type { Codec } from '../../../com/mojang/serialization/Codec.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
import type { Component } from '../../../net/minecraft/network/chat/Component.d.ts'
export class AttackIndicatorStatus extends Enum<AttackIndicatorStatus> {
    static CROSSHAIR: AttackIndicatorStatus;
    static HOTBAR: AttackIndicatorStatus;
    static LEGACY_CODEC: Codec<AttackIndicatorStatus>;
    static OFF: AttackIndicatorStatus;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): AttackIndicatorStatus;
    static values(): (Object | null)[];
    private constructor(id: number, key: string)
    // private caption: Component;
    // private id: number;
    caption(): Component;
    name(): "OFF" | "CROSSHAIR" | "HOTBAR";
}