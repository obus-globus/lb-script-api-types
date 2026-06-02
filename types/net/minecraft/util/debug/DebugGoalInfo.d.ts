import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { DebugGoalInfo$DebugGoal } from '../../../../net/minecraft/util/debug/DebugGoalInfo$DebugGoal.d.ts'
export class DebugGoalInfo extends Record {
    static STREAM_CODEC: StreamCodec<ByteBuf, DebugGoalInfo>;
    constructor(goals: DebugGoalInfo$DebugGoal[])
    // private goals: DebugGoalInfo$DebugGoal[];
    equals(o: Object | null): boolean;
    goals(): DebugGoalInfo$DebugGoal[];
    hashCode(): number;
    toString(): string;
}