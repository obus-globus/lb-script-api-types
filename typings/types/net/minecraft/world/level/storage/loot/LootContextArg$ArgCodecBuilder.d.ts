import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ExtraCodecs$LateBoundIdMapper } from '../../../../../../net/minecraft/util/ExtraCodecs$LateBoundIdMapper.d.ts'
import type { ContextKey } from '../../../../../../net/minecraft/util/context/ContextKey.d.ts'
import type { Entity } from '../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { ItemInstance } from '../../../../../../net/minecraft/world/item/ItemInstance.d.ts'
import type { BlockEntity } from '../../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
import type { LootContextArg } from '../../../../../../net/minecraft/world/level/storage/loot/LootContextArg.d.ts'
export class LootContextArg$ArgCodecBuilder<R extends Object | number | string | boolean> extends Object {
    private constructor()
    // private sources: ExtraCodecs$LateBoundIdMapper<string, LootContextArg<R>>;
    anyBlockEntity(function_: (param0: ContextKey<BlockEntity>) => LootContextArg<R>): LootContextArg$ArgCodecBuilder<R>;
    anyEntity(function_: (param0: ContextKey<Entity>) => LootContextArg<R>): LootContextArg$ArgCodecBuilder<R>;
    anyItemStack(function_: (param0: ContextKey<ItemInstance>) => LootContextArg<R>): LootContextArg$ArgCodecBuilder<R>;
    anyOf(targets: T[]): LootContextArg$ArgCodecBuilder<R>;
    anyOf(targets: T[], nameGetter: (param0: T) => string, argFactory: (param0: T) => LootContextArg<R>): LootContextArg$ArgCodecBuilder<R>;
    anyOf(targets: T[], argFactory: (param0: T) => LootContextArg<R>): LootContextArg$ArgCodecBuilder<R>;
    // private build(): Codec<LootContextArg<R>>;
}