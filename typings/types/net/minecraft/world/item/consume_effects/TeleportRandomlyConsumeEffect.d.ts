import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { LivingEntity } from '../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { ConsumeEffect } from '../../../../../net/minecraft/world/item/consume_effects/ConsumeEffect.d.ts'
import type { ConsumeEffect$Type } from '../../../../../net/minecraft/world/item/consume_effects/ConsumeEffect$Type.d.ts'
import type { Level } from '../../../../../net/minecraft/world/level/Level.d.ts'
export class TeleportRandomlyConsumeEffect extends Record implements ConsumeEffect {
    static CODEC: MapCodec<TeleportRandomlyConsumeEffect>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, TeleportRandomlyConsumeEffect>;
    constructor()
    constructor(diameter: number)
    // private diameter: number;
    apply(level: Level, stack: ItemStack, user: LivingEntity): boolean;
    diameter(): number;
    equals(o: Object | null): boolean;
    getType(): ConsumeEffect$Type<TeleportRandomlyConsumeEffect>;
    hashCode(): number;
    toString(): string;
}