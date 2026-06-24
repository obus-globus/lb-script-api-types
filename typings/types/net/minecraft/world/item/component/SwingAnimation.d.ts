import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { SwingAnimationType } from '../../../../../net/minecraft/world/item/SwingAnimationType.d.ts'
export class SwingAnimation extends Record {
    static CODEC: Codec<SwingAnimation>;
    static DEFAULT: SwingAnimation;
    static STREAM_CODEC: StreamCodec<ByteBuf, SwingAnimation>;
    constructor(type: SwingAnimationType, duration: number)
    // private duration: number;
    // private type: SwingAnimationType;
    duration(): number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
    type(): SwingAnimationType;
}