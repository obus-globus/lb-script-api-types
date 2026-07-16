import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
export class DebugEntityBlockIntersection extends Enum<DebugEntityBlockIntersection> {
    static IN_AIR: DebugEntityBlockIntersection;
    static IN_BLOCK: DebugEntityBlockIntersection;
    static IN_FLUID: DebugEntityBlockIntersection;
    static STREAM_CODEC: StreamCodec<ByteBuf, DebugEntityBlockIntersection>;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): DebugEntityBlockIntersection;
    static values(): DebugEntityBlockIntersection[];
    private constructor(id: number, color: number)
    // private color: number;
    // private id: number;
    color(): number;
    name(): "IN_BLOCK" | "IN_FLUID" | "IN_AIR";
}