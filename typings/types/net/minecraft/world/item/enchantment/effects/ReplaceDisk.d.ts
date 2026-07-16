import type { MapCodec } from '../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { Vec3i } from '../../../../../../net/minecraft/core/Vec3i.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { Entity } from '../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { EnchantedItemInUse } from '../../../../../../net/minecraft/world/item/enchantment/EnchantedItemInUse.d.ts'
import type { LevelBasedValue } from '../../../../../../net/minecraft/world/item/enchantment/LevelBasedValue.d.ts'
import type { EnchantmentEntityEffect } from '../../../../../../net/minecraft/world/item/enchantment/effects/EnchantmentEntityEffect.d.ts'
import type { GameEvent } from '../../../../../../net/minecraft/world/level/gameevent/GameEvent.d.ts'
import type { BlockPredicate } from '../../../../../../net/minecraft/world/level/levelgen/blockpredicates/BlockPredicate.d.ts'
import type { BlockStateProvider } from '../../../../../../net/minecraft/world/level/levelgen/feature/stateproviders/BlockStateProvider.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class ReplaceDisk extends Record implements EnchantmentEntityEffect {
    static CODEC: MapCodec<ReplaceDisk>;
    static bootstrap(paramregistry: MapCodec<EnchantmentEntityEffect>[]): MapCodec<EnchantmentEntityEffect>;
    constructor(radius: LevelBasedValue, height: LevelBasedValue, offset: Vec3i, predicate: Optional<BlockPredicate>, blockState: BlockStateProvider, triggerGameEvent: Optional<Holder<GameEvent>>)
    // private blockState: BlockStateProvider;
    // private height: LevelBasedValue;
    // private offset: Vec3i;
    // private predicate: Optional<BlockPredicate>;
    // private radius: LevelBasedValue;
    // private triggerGameEvent: Optional<Holder<GameEvent>>;
    apply(serverLevel: ServerLevel, enchantmentLevel: number, item: EnchantedItemInUse, entity: Entity, position: Vec3): void;
    blockState(): BlockStateProvider;
    codec(): MapCodec<ReplaceDisk>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    height(): LevelBasedValue;
    offset(): Vec3i;
    onChangedBlock(serverLevel: ServerLevel, enchantmentLevel: number, item: EnchantedItemInUse, entity: Entity, position: Vec3, becameActive: boolean): void;
    predicate(): Optional<BlockPredicate>;
    radius(): LevelBasedValue;
    toString(): string;
    triggerGameEvent(): Optional<Holder<GameEvent>>;
}