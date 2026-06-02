import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
export class ParticleStatus extends Enum<ParticleStatus> {
    static ALL: ParticleStatus;
    static DECREASED: ParticleStatus;
    static LEGACY_CODEC: Codec<ParticleStatus>;
    static MINIMAL: ParticleStatus;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): ParticleStatus;
    static values(): (Object | null)[];
    private constructor(id: number, key: string)
    // private caption: Component;
    // private id: number;
    caption(): Component;
    name(): "ALL" | "DECREASED" | "MINIMAL";
}