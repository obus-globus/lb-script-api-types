import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Consumer } from '../../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { TagKey } from '../../../../../../../net/minecraft/tags/TagKey.d.ts'
import type { Item } from '../../../../../../../net/minecraft/world/item/Item.d.ts'
import type { ItemStack } from '../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { LootContext } from '../../../../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { ComposableEntryContainer } from '../../../../../../../net/minecraft/world/level/storage/loot/entries/ComposableEntryContainer.d.ts'
import type { LootPoolEntry } from '../../../../../../../net/minecraft/world/level/storage/loot/entries/LootPoolEntry.d.ts'
import type { LootPoolSingletonContainer } from '../../../../../../../net/minecraft/world/level/storage/loot/entries/LootPoolSingletonContainer.d.ts'
import type { LootPoolSingletonContainer$Builder } from '../../../../../../../net/minecraft/world/level/storage/loot/entries/LootPoolSingletonContainer$Builder.d.ts'
import type { LootPoolSingletonContainer$EntryConstructor } from '../../../../../../../net/minecraft/world/level/storage/loot/entries/LootPoolSingletonContainer$EntryConstructor.d.ts'
import type { LootItemFunction } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/LootItemFunction.d.ts'
import type { LootItemCondition } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition.d.ts'
export class TagEntry extends LootPoolSingletonContainer {
    static ALWAYS_FALSE: (param0: LootContext, param1: (param0: LootPoolEntry) => void) => kotlin.Boolean;
    static ALWAYS_TRUE: (param0: LootContext, param1: (param0: LootPoolEntry) => void) => kotlin.Boolean;
    static DEFAULT_QUALITY: number;
    static DEFAULT_WEIGHT: number;
    static MAP_CODEC: MapCodec<TagEntry>;
    static expandTag(paramtag: TagKey<Item>): LootPoolSingletonContainer$Builder<Object>;
    static simpleBuilder(paramconstructor: (param0: number, param1: number, param2: LootItemCondition[], param3: LootItemFunction[]) => net.minecraft.world.level.storage.loot.entries.LootPoolSingletonContainer): LootPoolSingletonContainer$Builder<Object>;
    static tagContents(paramtag: TagKey<Item>): LootPoolSingletonContainer$Builder<Object>;
    private constructor(tag: TagKey<Item>, expand: boolean, weight: number, quality: number, conditions: LootItemCondition[], functions: LootItemFunction[])
    // private expand: boolean;
    // private tag: TagKey<Item>;
    codec(): MapCodec<TagEntry>;
    createItemStack(output: (param0: ItemStack) => void, context: LootContext): void;
    expand(context: LootContext, output: (param0: LootPoolEntry) => void): boolean;
    // private expandTag(context: LootContext, output: (param0: LootPoolEntry) => void): boolean;
}