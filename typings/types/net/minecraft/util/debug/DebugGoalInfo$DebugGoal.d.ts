import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
export class DebugGoalInfo$DebugGoal extends Record {
    static STREAM_CODEC: StreamCodec<ByteBuf, DebugGoalInfo$DebugGoal>;
    constructor(priority: number, isRunning: boolean, name: string)
    // private isRunning: boolean;
    // private name: string;
    // private priority: number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    isRunning(): boolean;
    name(): string;
    priority(): number;
    toString(): string;
}