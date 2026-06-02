import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { LivingEntity } from '../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class UseCooldown extends Record {
    static CODEC: Codec<UseCooldown>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, UseCooldown>;
    // private cooldownGroup: Optional<Identifier>;
    // private seconds: number;
    apply(stack: ItemStack, user: LivingEntity): void;
    cooldownGroup(): Optional<Identifier>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    seconds(): number;
    ticks(): number;
    toString(): string;
}