import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { SoundEvent } from '../../../../../net/minecraft/sounds/SoundEvent.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { EquipmentSlot } from '../../../../../net/minecraft/world/entity/EquipmentSlot.d.ts'
import type { LivingEntity } from '../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
export class PiercingWeapon extends Record {
    static CODEC: Codec<PiercingWeapon>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, PiercingWeapon>;
    static canHitEntity(paramjabber: Entity, paramtarget: Entity): boolean;
    constructor(dealsKnockback: boolean, dismounts: boolean, sound: Optional<Holder<SoundEvent>>, hitSound: Optional<Holder<SoundEvent>>)
    // private dealsKnockback: boolean;
    // private dismounts: boolean;
    // private hitSound: Optional<Holder<SoundEvent>>;
    // private sound: Optional<Holder<SoundEvent>>;
    attack(attacker: LivingEntity, hand: EquipmentSlot): void;
    dealsKnockback(): boolean;
    dismounts(): boolean;
    equals(o: Object | null): boolean;
    hashCode(): number;
    hitSound(): Optional<Holder<SoundEvent>>;
    makeHitSound(causer: Entity): void;
    makeSound(causer: Entity): void;
    sound(): Optional<Holder<SoundEvent>>;
    toString(): string;
}