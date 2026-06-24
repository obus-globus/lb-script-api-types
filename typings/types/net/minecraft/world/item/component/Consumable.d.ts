import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { SoundEvent } from '../../../../../net/minecraft/sounds/SoundEvent.d.ts'
import type { RandomSource } from '../../../../../net/minecraft/util/RandomSource.d.ts'
import type { InteractionHand } from '../../../../../net/minecraft/world/InteractionHand.d.ts'
import type { InteractionResult } from '../../../../../net/minecraft/world/InteractionResult.d.ts'
import type { LivingEntity } from '../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { ItemUseAnimation } from '../../../../../net/minecraft/world/item/ItemUseAnimation.d.ts'
import type { Consumable$Builder } from '../../../../../net/minecraft/world/item/component/Consumable$Builder.d.ts'
import type { ConsumeEffect } from '../../../../../net/minecraft/world/item/consume_effects/ConsumeEffect.d.ts'
import type { Level } from '../../../../../net/minecraft/world/level/Level.d.ts'
export class Consumable extends Record {
    static CODEC: Codec<Consumable>;
    static DEFAULT_CONSUME_SECONDS: number;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, Consumable>;
    static builder(): Consumable$Builder;
    constructor(consumeSeconds: number, animation: ItemUseAnimation, sound: Holder<SoundEvent>, hasConsumeParticles: boolean, onConsumeEffects: ConsumeEffect[])
    // private animation: ItemUseAnimation;
    // private consumeSeconds: number;
    // private hasConsumeParticles: boolean;
    // private onConsumeEffects: ConsumeEffect[];
    // private sound: Holder<SoundEvent>;
    animation(): ItemUseAnimation;
    canConsume(user: LivingEntity, stack: ItemStack): boolean;
    consumeSeconds(): number;
    consumeTicks(): number;
    emitParticlesAndSounds(random: RandomSource, user: LivingEntity, itemStack: ItemStack, particleCount: number): void;
    equals(o: Object | null): boolean;
    hasConsumeParticles(): boolean;
    hashCode(): number;
    onConsume(level: Level, user: LivingEntity, stack: ItemStack): ItemStack;
    onConsumeEffects(): ConsumeEffect[];
    shouldEmitParticlesAndSounds(useItemRemainingTicks: number): boolean;
    sound(): Holder<SoundEvent>;
    startConsuming(user: LivingEntity, stack: ItemStack, hand: InteractionHand): InteractionResult;
    toString(): string;
}