import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { SoundEvent } from '../../../../net/minecraft/sounds/SoundEvent.d.ts'
import type { StringRepresentable } from '../../../../net/minecraft/util/StringRepresentable.d.ts'
export class DamageEffects extends Enum<DamageEffects> implements StringRepresentable {
    static BURNING: DamageEffects;
    static CODEC: Codec<DamageEffects>;
    static DROWNING: DamageEffects;
    static FREEZING: DamageEffects;
    static HURT: DamageEffects;
    static POKING: DamageEffects;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static THORNS: DamageEffects;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): DamageEffects;
    static values(): DamageEffects[];
    private constructor(id: string, sound: SoundEvent)
    // private id: string;
    // private sound: SoundEvent;
    getSerializedName(): string;
    sound(): SoundEvent;
    name(): "HURT" | "THORNS" | "DROWNING" | "BURNING" | "POKING" | "FREEZING";
}