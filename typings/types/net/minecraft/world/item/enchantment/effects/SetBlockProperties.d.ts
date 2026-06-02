import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { Vec3i } from '../../../../../../net/minecraft/core/Vec3i.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { Entity } from '../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { BlockItemStateProperties } from '../../../../../../net/minecraft/world/item/component/BlockItemStateProperties.d.ts'
import type { EnchantedItemInUse } from '../../../../../../net/minecraft/world/item/enchantment/EnchantedItemInUse.d.ts'
import type { EnchantmentEntityEffect } from '../../../../../../net/minecraft/world/item/enchantment/effects/EnchantmentEntityEffect.d.ts'
import type { EnchantmentLocationBasedEffect } from '../../../../../../net/minecraft/world/item/enchantment/effects/EnchantmentLocationBasedEffect.d.ts'
import type { GameEvent } from '../../../../../../net/minecraft/world/level/gameevent/GameEvent.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class SetBlockProperties extends Record implements EnchantmentEntityEffect {
    static CODEC: Codec<EnchantmentEntityEffect>;
    static CODEC: Codec<EnchantmentLocationBasedEffect>;
    static CODEC: MapCodec<SetBlockProperties>;
    static bootstrap(paramregistry: (Object | null)[]): MapCodec<Object>;
    constructor(properties: BlockItemStateProperties)
    constructor(properties: BlockItemStateProperties, offset: Vec3i, triggerGameEvent: Optional<Holder<GameEvent>>)
    // private offset: Vec3i;
    // private properties: BlockItemStateProperties;
    // private triggerGameEvent: Optional<Holder<GameEvent>>;
    apply(serverLevel: ServerLevel, enchantmentLevel: number, item: EnchantedItemInUse, entity: Entity, position: Vec3): void;
    codec(): MapCodec<SetBlockProperties>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    offset(): Vec3i;
    onChangedBlock(serverLevel: ServerLevel, enchantmentLevel: number, item: EnchantedItemInUse, entity: Entity, position: Vec3, becameActive: boolean): void;
    properties(): BlockItemStateProperties;
    toString(): string;
    triggerGameEvent(): Optional<Holder<GameEvent>>;
}