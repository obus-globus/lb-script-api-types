import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { SoundEvent } from '../../../../../net/minecraft/sounds/SoundEvent.d.ts'
import type { EntityType } from '../../../../../net/minecraft/world/entity/EntityType.d.ts'
import type { EquipmentSlot } from '../../../../../net/minecraft/world/entity/EquipmentSlot.d.ts'
import type { EquipmentAsset } from '../../../../../net/minecraft/world/item/equipment/EquipmentAsset.d.ts'
import type { Equippable } from '../../../../../net/minecraft/world/item/equipment/Equippable.d.ts'
export class Equippable$Builder extends Object {
    private constructor(slot: EquipmentSlot)
    // private allowedEntities: Optional<Holder<EntityType<any>>[]>;
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
    build(): Equippable;
    setAllowedEntities(allowedEntities: EntityType<any>[]): Equippable$Builder;
    setAllowedEntities(allowedEntities: Holder<EntityType<any>>[]): Equippable$Builder;
    setAsset(assetId: ResourceKey<EquipmentAsset>): Equippable$Builder;
    setCameraOverlay(cameraOverlay: Identifier): Equippable$Builder;
    setCanBeSheared(canBeSheared: boolean): Equippable$Builder;
    setDamageOnHurt(damageOnHurt: boolean): Equippable$Builder;
    setDispensable(dispensable: boolean): Equippable$Builder;
    setEquipOnInteract(equipOnInteract: boolean): Equippable$Builder;
    setEquipSound(equipSound: Holder<SoundEvent>): Equippable$Builder;
    setShearingSound(shearingSound: Holder<SoundEvent>): Equippable$Builder;
    setSwappable(swappable: boolean): Equippable$Builder;
}