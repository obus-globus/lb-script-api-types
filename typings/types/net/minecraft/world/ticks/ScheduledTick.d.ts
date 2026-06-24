import type { Hash$Strategy } from '../../../../it/unimi/dsi/fastutil/Hash$Strategy.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { SavedTick } from '../../../../net/minecraft/world/ticks/SavedTick.d.ts'
import type { TickPriority } from '../../../../net/minecraft/world/ticks/TickPriority.d.ts'
export class ScheduledTick<T extends unknown> extends Record {
    static DRAIN_ORDER: (param0: Object) => boolean;
    static INTRA_TICK_DRAIN_ORDER: (param0: Object) => boolean;
    static UNIQUE_TICK_HASH: Hash$Strategy<ScheduledTick<Object>>;
    static probe(paramtype: Object | null, parampos: BlockPos): ScheduledTick<Object>;
    constructor(type: T, pos: BlockPos, triggerTick: number, subTickOrder: number)
    constructor(type: T, pos: BlockPos, triggerTick: number, priority: TickPriority, subTickOrder: number)
    // private pos: BlockPos;
    // private priority: TickPriority;
    // private subTickOrder: number;
    // private triggerTick: number;
    // private type: T;
    equals(o: Object | null): boolean;
    hashCode(): number;
    pos(): BlockPos;
    priority(): TickPriority;
    subTickOrder(): number;
    toSavedTick(currentTick: number): SavedTick<T>;
    toString(): string;
    triggerTick(): number;
    type(): T;
}