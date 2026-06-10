import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { SoundEvent } from '../../../../../net/minecraft/sounds/SoundEvent.d.ts'
import type { InteractionResult } from '../../../../../net/minecraft/world/InteractionResult.d.ts'
import type { EntityType } from '../../../../../net/minecraft/world/entity/EntityType.d.ts'
import type { EquipmentSlot } from '../../../../../net/minecraft/world/entity/EquipmentSlot.d.ts'
import type { LivingEntity } from '../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Player } from '../../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { DyeColor } from '../../../../../net/minecraft/world/item/DyeColor.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { EquipmentAsset } from '../../../../../net/minecraft/world/item/equipment/EquipmentAsset.d.ts'
import type { Equippable$Builder } from '../../../../../net/minecraft/world/item/equipment/Equippable$Builder.d.ts'
export class Equippable extends Record {
    static CODEC: Codec<Equippable>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, Equippable>;
    static builder(paramslot: EquipmentSlot): Equippable$Builder;
    static harness(paramcolor: DyeColor): Equippable;
    static llamaSwag(paramcolor: DyeColor): Equippable;
    static saddle(): Equippable;
    // private allowedEntities: Optional<Holder<EntityType<Object>>[]>;
    // private assetId: Optional<ResourceKey<EquipmentAsset>>;
    // private cameraOverlay: Optional<Identifier>;
    // private canBeSheared: boolean;
    // private damageOnHurt: boolean;
    // private dispensable: boolean;
    // private equipOnInteract: boolean;
    // private equipSound: Holder<SoundEvent>;
    // private shearingSound: Holder<SoundEvent>;
    // private slot: EquipmentSlot;
    // private swappable: boolean;
    allowedEntities(): Optional<Holder<EntityType<Object>>[]>;
    assetId(): Optional<ResourceKey<EquipmentAsset>>;
    cameraOverlay(): Optional<Identifier>;
    canBeEquippedBy(type: Holder<EntityType<Object>>): boolean;
    canBeSheared(): boolean;
    damageOnHurt(): boolean;
    dispensable(): boolean;
    equals(o: Object | null): boolean;
    equipOnInteract(): boolean;
    equipOnTarget(player: Player, target: LivingEntity, itemStack: ItemStack): InteractionResult;
    equipSound(): Holder<SoundEvent>;
    hashCode(): number;
    shearingSound(): Holder<SoundEvent>;
    slot(): EquipmentSlot;
    swapWithEquipmentSlot(inHand: ItemStack, player: Player): InteractionResult;
    swappable(): boolean;
    toString(): string;
}