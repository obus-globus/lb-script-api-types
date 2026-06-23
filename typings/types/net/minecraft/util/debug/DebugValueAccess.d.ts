import type { BiConsumer } from '../../../../java/util/function/BiConsumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { DebugSubscription } from '../../../../net/minecraft/util/debug/DebugSubscription.d.ts'
import type { DebugValueAccess$EventVisitor } from '../../../../net/minecraft/util/debug/DebugValueAccess$EventVisitor.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
import type { ChunkPos } from '../../../../net/minecraft/world/level/ChunkPos.d.ts'
export interface DebugValueAccess extends Object {
    forEachBlock<T extends unknown>(subscription: DebugSubscription<T>, consumer: (param0: BlockPos, param1: T) => void): void;
    forEachChunk<T extends unknown>(subscription: DebugSubscription<T>, consumer: (param0: ChunkPos, param1: T) => void): void;
    forEachEntity<T extends unknown>(subscription: DebugSubscription<T>, consumer: (param0: Entity, param1: T) => void): void;
    forEachEvent<T extends unknown>(subscription: DebugSubscription<T>, visitor: (param0: T, param1: number, param2: number) => void): void;
    getBlockValue<T extends unknown>(subscription: DebugSubscription<T>, blockPos: BlockPos): T;
    getChunkValue<T extends unknown>(subscription: DebugSubscription<T>, chunkPos: ChunkPos): T;
    getEntityValue<T extends unknown>(subscription: DebugSubscription<T>, entity: Entity): T;
}