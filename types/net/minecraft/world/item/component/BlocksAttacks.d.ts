import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { ServerLevel } from '../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { SoundEvent } from '../../../../../net/minecraft/sounds/SoundEvent.d.ts'
import type { InteractionHand } from '../../../../../net/minecraft/world/InteractionHand.d.ts'
import type { DamageSource } from '../../../../../net/minecraft/world/damagesource/DamageSource.d.ts'
import type { LivingEntity } from '../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { BlocksAttacks$DamageReduction } from '../../../../../net/minecraft/world/item/component/BlocksAttacks$DamageReduction.d.ts'
import type { BlocksAttacks$ItemDamageFunction } from '../../../../../net/minecraft/world/item/component/BlocksAttacks$ItemDamageFunction.d.ts'
import type { Level } from '../../../../../net/minecraft/world/level/Level.d.ts'
export class BlocksAttacks extends Record {
    static CODEC: Codec<BlocksAttacks>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, BlocksAttacks>;
    // private blockDelaySeconds: number;
    // private blockSound: Optional<Holder<SoundEvent>>;
    // private bypassedBy: Optional<Holder<T>[]>;
    // private damageReductions: BlocksAttacks$DamageReduction[];
    // private disableCooldownScale: number;
    // private disableSound: Optional<Holder<SoundEvent>>;
    // private itemDamage: BlocksAttacks$ItemDamageFunction;
    blockDelaySeconds(): number;
    blockDelayTicks(): number;
    blockSound(): Optional<Holder<SoundEvent>>;
    bypassedBy(): Optional<Holder<T>[]>;
    damageReductions(): BlocksAttacks$DamageReduction[];
    disable(level: ServerLevel, user: LivingEntity, baseSeconds: number, blockingWith: ItemStack): void;
    // private disableBlockingForTicks(baseSeconds: number): number;
    disableCooldownScale(): number;
    disableSound(): Optional<Holder<SoundEvent>>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    hurtBlockingItem(level: Level, item: ItemStack, user: LivingEntity, hand: InteractionHand, damage: number): void;
    itemDamage(): BlocksAttacks$ItemDamageFunction;
    onBlocked(level: ServerLevel, user: LivingEntity): void;
    resolveBlockedDamage(source: DamageSource, dealtDamage: number, angle: number): number;
    toString(): string;
}