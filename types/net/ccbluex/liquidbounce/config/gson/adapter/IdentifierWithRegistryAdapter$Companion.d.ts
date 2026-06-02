import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { IdentifierWithRegistryAdapter } from '../../../../../../net/ccbluex/liquidbounce/config/gson/adapter/IdentifierWithRegistryAdapter.d.ts'
import type { SoundEvent } from '../../../../../../net/minecraft/sounds/SoundEvent.d.ts'
import type { MobEffect } from '../../../../../../net/minecraft/world/effect/MobEffect.d.ts'
import type { EntityType } from '../../../../../../net/minecraft/world/entity/EntityType.d.ts'
import type { MenuType } from '../../../../../../net/minecraft/world/inventory/MenuType.d.ts'
import type { Item } from '../../../../../../net/minecraft/world/item/Item.d.ts'
import type { Block } from '../../../../../../net/minecraft/world/level/block/Block.d.ts'
export class IdentifierWithRegistryAdapter$Companion extends Object {
    BLOCK: IdentifierWithRegistryAdapter<Block>;
    ENTITY_TYPE: IdentifierWithRegistryAdapter<EntityType<Object>>;
    ITEM: IdentifierWithRegistryAdapter<Item>;
    SCREEN_HANDLER: IdentifierWithRegistryAdapter<MenuType<Object>>;
    SOUND_EVENT: IdentifierWithRegistryAdapter<SoundEvent>;
    STATUS_EFFECT: IdentifierWithRegistryAdapter<MobEffect>;
}