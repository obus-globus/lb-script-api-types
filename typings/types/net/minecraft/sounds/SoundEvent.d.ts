import type { Codec } from '../../../com/mojang/serialization/Codec.d.ts'
import type { ByteBuf } from '../../../io/netty/buffer/ByteBuf.d.ts'
import type { Record } from '../../../java/lang/Record.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Identifier } from '../../../net/minecraft/resources/Identifier.d.ts'
export class SoundEvent extends Record {
    static CODEC: Codec<Object>;
    static DIRECT_CODEC: Codec<SoundEvent>;
    static DIRECT_STREAM_CODEC: StreamCodec<ByteBuf, SoundEvent>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, Object>;
    static createFixedRangeEvent(paramlocation: Identifier, paramrange: number): SoundEvent;
    static createVariableRangeEvent(paramlocation: Identifier): SoundEvent;
    constructor(location: Identifier, fixedRange: Optional<number>)
    // private fixedRange: Optional<number>;
    // private location: Identifier;
    equals(o: Object | null): boolean;
    fixedRange(): Optional<number>;
    getRange(volume: number): number;
    hashCode(): number;
    location(): Identifier;
    toString(): string;
}