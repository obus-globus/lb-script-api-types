import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { SoundEvent } from '../../../../../net/minecraft/sounds/SoundEvent.d.ts'
import type { LivingEntity } from '../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { ConsumeEffect } from '../../../../../net/minecraft/world/item/consume_effects/ConsumeEffect.d.ts'
import type { ConsumeEffect$Type } from '../../../../../net/minecraft/world/item/consume_effects/ConsumeEffect$Type.d.ts'
import type { Level } from '../../../../../net/minecraft/world/level/Level.d.ts'
export class PlaySoundConsumeEffect extends Record implements ConsumeEffect {
    static CODEC: MapCodec<PlaySoundConsumeEffect>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, PlaySoundConsumeEffect>;
    constructor(sound: Holder<SoundEvent>)
    // private sound: Holder<SoundEvent>;
    apply(level: Level, stack: ItemStack, user: LivingEntity): boolean;
    equals(o: Object | null): boolean;
    getType(): ConsumeEffect$Type<PlaySoundConsumeEffect>;
    hashCode(): number;
    sound(): Holder<SoundEvent>;
    toString(): string;
}