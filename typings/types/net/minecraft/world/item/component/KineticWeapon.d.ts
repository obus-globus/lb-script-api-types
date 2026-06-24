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
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { KineticWeapon$Condition } from '../../../../../net/minecraft/world/item/component/KineticWeapon$Condition.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class KineticWeapon extends Record {
    static CODEC: Codec<KineticWeapon>;
    static HIT_FEEDBACK_TICKS: number;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, KineticWeapon>;
    static getMotion(paramlivingEntity: Entity): Vec3;
    constructor(contactCooldownTicks: number, delayTicks: number, dismountConditions: Optional<KineticWeapon$Condition>, knockbackConditions: Optional<KineticWeapon$Condition>, damageConditions: Optional<KineticWeapon$Condition>, forwardMovement: number, damageMultiplier: number, sound: Optional<Holder<SoundEvent>>, hitSound: Optional<Holder<SoundEvent>>)
    // private contactCooldownTicks: number;
    // private damageConditions: Optional<KineticWeapon$Condition>;
    // private damageMultiplier: number;
    // private delayTicks: number;
    // private dismountConditions: Optional<KineticWeapon$Condition>;
    // private forwardMovement: number;
    // private hitSound: Optional<Holder<SoundEvent>>;
    // private knockbackConditions: Optional<KineticWeapon$Condition>;
    // private sound: Optional<Holder<SoundEvent>>;
    computeDamageUseDuration(): number;
    contactCooldownTicks(): number;
    damageConditions(): Optional<KineticWeapon$Condition>;
    damageEntities(stack: ItemStack, ticksRemaining: number, livingEntity: LivingEntity, equipmentSlot: EquipmentSlot): void;
    damageMultiplier(): number;
    delayTicks(): number;
    dismountConditions(): Optional<KineticWeapon$Condition>;
    equals(o: Object | null): boolean;
    forwardMovement(): number;
    hashCode(): number;
    hitSound(): Optional<Holder<SoundEvent>>;
    knockbackConditions(): Optional<KineticWeapon$Condition>;
    makeLocalHitSound(causer: Entity): void;
    makeSound(causer: Entity): void;
    sound(): Optional<Holder<SoundEvent>>;
    toString(): string;
}