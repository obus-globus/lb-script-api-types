import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { LivingEntity } from '../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { ConsumeEffect } from '../../../../../net/minecraft/world/item/consume_effects/ConsumeEffect.d.ts'
export class DeathProtection extends Record {
    static CODEC: Codec<DeathProtection>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, DeathProtection>;
    static TOTEM_OF_UNDYING: DeathProtection;
    constructor(deathEffects: ConsumeEffect[])
    // private deathEffects: ConsumeEffect[];
    applyEffects(itemStack: ItemStack, entity: LivingEntity): void;
    deathEffects(): ConsumeEffect[];
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}