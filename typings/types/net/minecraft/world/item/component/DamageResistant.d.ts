import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { DamageSource } from '../../../../../net/minecraft/world/damagesource/DamageSource.d.ts'
import type { DamageType } from '../../../../../net/minecraft/world/damagesource/DamageType.d.ts'
export class DamageResistant extends Record {
    static CODEC: Codec<DamageResistant>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, DamageResistant>;
    constructor(types: Holder<DamageType>[])
    // private types: Holder<DamageType>[];
    equals(o: Object | null): boolean;
    hashCode(): number;
    isResistantTo(source: DamageSource): boolean;
    toString(): string;
    types(): Holder<DamageType>[];
}