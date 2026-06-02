import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { EquipmentInfo } from '../../../../net/caffeinemc/mods/lithium/common/entity/EquipmentInfo.d.ts'
import type { ChangeSubscriber$CountChangeSubscriber } from '../../../../net/caffeinemc/mods/lithium/common/util/change_tracking/ChangeSubscriber$CountChangeSubscriber.d.ts'
import type { MaybeInLevelObject } from '../../../../net/caffeinemc/mods/lithium/common/world/in_world_tracking/MaybeInLevelObject.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
import type { EquipmentSlot } from '../../../../net/minecraft/world/entity/EquipmentSlot.d.ts'
import type { LivingEntity } from '../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Level } from '../../../../net/minecraft/world/level/Level.d.ts'
export class EntityEquipment extends Object implements EquipmentInfo, ChangeSubscriber$CountChangeSubscriber<Object>, MaybeInLevelObject {
    static CODEC: Codec<EntityEquipment>;
    constructor()
    private constructor(items: { [key in EquipmentSlot]: ItemStack })
    // private hasUnsentEquipmentChanges: boolean;
    // private inLevel: boolean;
    // private items: { [key in EquipmentSlot]: ItemStack };
    // private recheckEnchantmentForStack: ItemStack;
    // private shouldTickEnchantments: boolean;
    clear(): void;
    dropAll(dropper: LivingEntity): void;
    get(slot: EquipmentSlot): ItemStack;
    // private initializeData(): void;
    // private invalidateData(): void;
    isEmpty(): boolean;
    lithium$forceUnsubscribe(arg0: ItemStack, arg1: number): void;
    lithium$handleAddedToLevel(arg0: Level): void;
    lithium$handleAddedToLevel(arg0: Level): void;
    lithium$handleRemovedFromLevel(arg0: Level): void;
    lithium$handleRemovedFromLevel(arg0: Level): void;
    lithium$hasUnsentEquipmentChanges(): boolean;
    lithium$isInLevel(): boolean;
    lithium$notify(arg0: ItemStack, arg1: number): void;
    lithium$notifyCount(arg0: ItemStack, arg1: number, arg2: number): void;
    lithium$onEquipmentChangesSent(): void;
    lithium$shouldTickEnchantments(): boolean;
    // private onEquipmentReplaced(arg0: ItemStack, arg1: ItemStack): void;
    // private processScheduledEnchantmentCheck(arg0: ItemStack): void;
    // private scheduleEnchantmentCheck(arg0: ItemStack): void;
    set(slot: EquipmentSlot, itemStack: ItemStack): ItemStack;
    // private set$mixinextras$wrapped$35(arg0: EquipmentSlot, arg1: ItemStack): ItemStack;
    setAll(equipment: EntityEquipment): void;
    tick(owner: Entity): void;
}