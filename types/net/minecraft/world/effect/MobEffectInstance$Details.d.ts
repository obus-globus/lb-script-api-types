import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
export class MobEffectInstance$Details extends Record {
    static MAP_CODEC: MapCodec<MobEffectInstance$Details>;
    static STREAM_CODEC: StreamCodec<ByteBuf, MobEffectInstance$Details>;
    // private ambient: boolean;
    // private amplifier: number;
    // private duration: number;
    // private hiddenEffect: Optional<MobEffectInstance$Details>;
    // private showIcon: boolean;
    // private showParticles: boolean;
    ambient(): boolean;
    amplifier(): number;
    duration(): number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    hiddenEffect(): Optional<MobEffectInstance$Details>;
    showIcon(): boolean;
    showParticles(): boolean;
    toString(): string;
}