import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Hash$Strategy } from '../../../../it/unimi/dsi/fastutil/Hash$Strategy.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { ChunkPos } from '../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { ScheduledTick } from '../../../../net/minecraft/world/ticks/ScheduledTick.d.ts'
import type { TickPriority } from '../../../../net/minecraft/world/ticks/TickPriority.d.ts'
export class SavedTick<T extends unknown> extends Record {
    static UNIQUE_TICK_HASH: Hash$Strategy<SavedTick<Object>>;
    static codec<T extends unknown>(paramtypeCodec: Codec<T>): Codec<SavedTick<T>>;
    static filterTickListForChunk<T extends unknown>(paramsavedTicks: SavedTick<T>[], paramchunkPos: ChunkPos): SavedTick<T>[];
    static probe<T extends unknown>(paramtype: T, parampos: BlockPos): SavedTick<T>;
    constructor(type: T, pos: BlockPos, delay: number, priority: TickPriority)
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