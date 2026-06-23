import type { Path } from '../../../../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../../net/minecraft/core/Holder.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceKey } from '../../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { SoundEvent } from '../../../../../../../net/minecraft/sounds/SoundEvent.d.ts'
import type { Stat } from '../../../../../../../net/minecraft/stats/Stat.d.ts'
import type { TagKey } from '../../../../../../../net/minecraft/tags/TagKey.d.ts'
import type { MobEffect } from '../../../../../../../net/minecraft/world/effect/MobEffect.d.ts'
import type { EntityType } from '../../../../../../../net/minecraft/world/entity/EntityType.d.ts'
import type { Attribute } from '../../../../../../../net/minecraft/world/entity/ai/attributes/Attribute.d.ts'
import type { CreativeModeTab } from '../../../../../../../net/minecraft/world/item/CreativeModeTab.d.ts'
import type { Item } from '../../../../../../../net/minecraft/world/item/Item.d.ts'
import type { Enchantment } from '../../../../../../../net/minecraft/world/item/enchantment/Enchantment.d.ts'
import type { Block } from '../../../../../../../net/minecraft/world/level/block/Block.d.ts'
export interface FabricLanguageProvider$TranslationBuilder extends Object{
    add(arg0: Path[]): void;
    add(arg0: string, arg1: string): void;
    add(arg0: Holder<Attribute>, arg1: string): void;
    add(arg0: Identifier, arg1: string): void;
    add(arg0: ResourceKey<CreativeModeTab>, arg1: string): void;
    add(arg0: SoundEvent, arg1: string): void;
    add(arg0: Stat<Object>[], arg1: string): void;
    add(arg0: TagKey<Object>, arg1: string): void;
    add(arg0: MobEffect, arg1: string): void;
    add(arg0: EntityType<any>, arg1: string): void;
    add(arg0: Item, arg1: string): void;
    add(arg0: Block, arg1: string): void;
    addEnchantment(arg0: ResourceKey<Enchantment>, arg1: string): void;
}