import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { SavedTick } from '../../../../net/minecraft/world/ticks/SavedTick.d.ts'
import type { ScheduledTick } from '../../../../net/minecraft/world/ticks/ScheduledTick.d.ts'
import type { SerializableTickContainer } from '../../../../net/minecraft/world/ticks/SerializableTickContainer.d.ts'
import type { TickContainerAccess } from '../../../../net/minecraft/world/ticks/TickContainerAccess.d.ts'
export class ProtoChunkTicks<T extends Object | number | string | boolean> extends Object implements SerializableTickContainer<T>, TickContainerAccess<T> {
    static load(paramticks: (Object | null)[]): ProtoChunkTicks<Object>;
    constructor()
    // private ticks: SavedTick<T>[];
    // private ticksPerPosition: SavedTick<Object>[];
    count(): number;
    hasScheduledTick(pos: BlockPos, type: T): boolean;
    pack(currentTick: number): SavedTick<T>[];
    // private schedule(newTick: SavedTick<T>): void;
    schedule(tick: ScheduledTick<T>): void;
    scheduledTicks(): SavedTick<T>[];
}