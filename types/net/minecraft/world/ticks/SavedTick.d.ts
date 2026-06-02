import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Hash$Strategy } from '../../../../it/unimi/dsi/fastutil/Hash$Strategy.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { ChunkPos } from '../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { ScheduledTick } from '../../../../net/minecraft/world/ticks/ScheduledTick.d.ts'
import type { TickPriority } from '../../../../net/minecraft/world/ticks/TickPriority.d.ts'
export class SavedTick<T extends Object | number | string | boolean> extends Record {
    static UNIQUE_TICK_HASH: Hash$Strategy<Object>;
    static codec(paramtypeCodec: Codec<Object>): Codec<Object>;
    static filterTickListForChunk(paramsavedTicks: (Object | null)[], paramchunkPos: ChunkPos): (Object | null)[];
    static probe(paramtype: Object | null, parampos: BlockPos): SavedTick<Object>;
    // private delay: number;
    // private pos: BlockPos;
    // private priority: TickPriority;
    // private type: T;
    delay(): number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    pos(): BlockPos;
    priority(): TickPriority;
    toString(): string;
    type(): T;
    unpack(currentTick: number, currentSubTick: number): ScheduledTick<T>;
}