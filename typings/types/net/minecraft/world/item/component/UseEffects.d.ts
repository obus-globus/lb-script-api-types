import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
export class UseEffects extends Record {
    static CODEC: Codec<UseEffects>;
    static DEFAULT: UseEffects;
    static STREAM_CODEC: StreamCodec<ByteBuf, UseEffects>;
    constructor(canSprint: boolean, interactVibrations: boolean, speedMultiplier: number)
    // private canSprint: boolean;
    // private interactVibrations: boolean;
    // private speedMultiplier: number;
    canSprint(): boolean;
    equals(o: Object | null): boolean;
    hashCode(): number;
    interactVibrations(): boolean;
    speedMultiplier(): number;
    toString(): string;
}