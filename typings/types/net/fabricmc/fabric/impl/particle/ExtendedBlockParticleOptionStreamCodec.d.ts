import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockParticleOption } from '../../../../../net/minecraft/core/particles/BlockParticleOption.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StreamCodec$CodecOperation } from '../../../../../net/minecraft/network/codec/StreamCodec$CodecOperation.d.ts'
export class ExtendedBlockParticleOptionStreamCodec extends Object implements StreamCodec<RegistryFriendlyByteBuf, BlockParticleOption> {
    constructor(arg0: StreamCodec<RegistryFriendlyByteBuf, BlockParticleOption>)
    // private fallback: StreamCodec<RegistryFriendlyByteBuf, BlockParticleOption>;
    apply<O extends unknown>(operation: (param0: StreamCodec<RegistryFriendlyByteBuf, BlockParticleOption>) => StreamCodec<RegistryFriendlyByteBuf, O>): StreamCodec<RegistryFriendlyByteBuf, O>;
    cast<S extends B>(): StreamCodec<S, BlockParticleOption>;
    decode(arg0: RegistryFriendlyByteBuf): BlockParticleOption;
    dispatch<U extends unknown>(type: (param0: U) => BlockParticleOption, codec: (param0: BlockParticleOption) => StreamCodec<RegistryFriendlyByteBuf, U>): StreamCodec<RegistryFriendlyByteBuf, U>;
    encode(arg0: RegistryFriendlyByteBuf, arg1: BlockParticleOption): void;
    map<O extends unknown>(to: (param0: BlockParticleOption) => O, from: (param0: O) => BlockParticleOption): StreamCodec<RegistryFriendlyByteBuf, O>;
    mapStream<O extends ByteBuf>(operation: (param0: O) => RegistryFriendlyByteBuf): StreamCodec<O, BlockParticleOption>;
}