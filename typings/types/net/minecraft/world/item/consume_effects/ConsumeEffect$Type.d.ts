import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { ApplyStatusEffectsConsumeEffect } from '../../../../../net/minecraft/world/item/consume_effects/ApplyStatusEffectsConsumeEffect.d.ts'
import type { ClearAllStatusEffectsConsumeEffect } from '../../../../../net/minecraft/world/item/consume_effects/ClearAllStatusEffectsConsumeEffect.d.ts'
import type { ConsumeEffect } from '../../../../../net/minecraft/world/item/consume_effects/ConsumeEffect.d.ts'
import type { PlaySoundConsumeEffect } from '../../../../../net/minecraft/world/item/consume_effects/PlaySoundConsumeEffect.d.ts'
import type { RemoveStatusEffectsConsumeEffect } from '../../../../../net/minecraft/world/item/consume_effects/RemoveStatusEffectsConsumeEffect.d.ts'
import type { TeleportRandomlyConsumeEffect } from '../../../../../net/minecraft/world/item/consume_effects/TeleportRandomlyConsumeEffect.d.ts'
export class ConsumeEffect$Type<T extends ConsumeEffect> extends Record {
    static APPLY_EFFECTS: ConsumeEffect$Type<ApplyStatusEffectsConsumeEffect>;
    static CLEAR_ALL_EFFECTS: ConsumeEffect$Type<ClearAllStatusEffectsConsumeEffect>;
    static PLAY_SOUND: ConsumeEffect$Type<PlaySoundConsumeEffect>;
    static REMOVE_EFFECTS: ConsumeEffect$Type<RemoveStatusEffectsConsumeEffect>;
    static TELEPORT_RANDOMLY: ConsumeEffect$Type<TeleportRandomlyConsumeEffect>;
    constructor(codec: MapCodec<T>, streamCodec: StreamCodec<RegistryFriendlyByteBuf, T>)
    // private codec: MapCodec<T>;
    // private streamCodec: StreamCodec<RegistryFriendlyByteBuf, T>;
    codec(): MapCodec<T>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    streamCodec(): StreamCodec<RegistryFriendlyByteBuf, T>;
    toString(): string;
}