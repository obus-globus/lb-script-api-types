import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
export class ClockNetworkState extends Record {
    static STREAM_CODEC: StreamCodec<ByteBuf, ClockNetworkState>;
    constructor(totalTicks: number, partialTick: number, rate: number)
    // private partialTick: number;
    // private rate: number;
    // private totalTicks: number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    partialTick(): number;
    rate(): number;
    toString(): string;
    totalTicks(): number;
}