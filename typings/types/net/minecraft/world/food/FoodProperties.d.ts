import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { LivingEntity } from '../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Consumable } from '../../../../net/minecraft/world/item/component/Consumable.d.ts'
import type { ConsumableListener } from '../../../../net/minecraft/world/item/component/ConsumableListener.d.ts'
import type { Level } from '../../../../net/minecraft/world/level/Level.d.ts'
export class FoodProperties extends Record implements ConsumableListener {
    static DIRECT_CODEC: Codec<FoodProperties>;
    static DIRECT_STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, FoodProperties>;
    constructor(nutrition: number, saturation: number, canAlwaysEat: boolean)
    // private canAlwaysEat: boolean;
    // private nutrition: number;
    // private saturation: number;
    canAlwaysEat(): boolean;
    equals(o: Object | null): boolean;
    hashCode(): number;
    nutrition(): number;
    onConsume(level: Level, user: LivingEntity, stack: ItemStack, consumable: Consumable): void;
    saturation(): number;
    toString(): string;
}