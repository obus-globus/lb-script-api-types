import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { DamageSource } from '../../../../../net/minecraft/world/damagesource/DamageSource.d.ts'
import type { DamageType } from '../../../../../net/minecraft/world/damagesource/DamageType.d.ts'
export class BlocksAttacks$DamageReduction extends Record {
    static CODEC: Codec<BlocksAttacks$DamageReduction>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, BlocksAttacks$DamageReduction>;
    constructor(horizontalBlockingAngle: number, type: Optional<Holder<DamageType>[]>, base: number, factor: number)
    // private base: number;
    // private factor: number;
    // private horizontalBlockingAngle: number;
    // private type: Optional<Holder<DamageType>[]>;
    base(): number;
    equals(o: Object | null): boolean;
    factor(): number;
    hashCode(): number;
    horizontalBlockingAngle(): number;
    resolve(source: DamageSource, dealtDamage: number, angle: number): number;
    toString(): string;
    type(): Optional<Holder<DamageType>[]>;
}