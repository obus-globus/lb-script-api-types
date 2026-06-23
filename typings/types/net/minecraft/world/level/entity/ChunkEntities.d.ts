import type { Stream } from '../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ChunkPos } from '../../../../../net/minecraft/world/level/ChunkPos.d.ts'
export class ChunkEntities<T extends unknown> extends Object {
    constructor(pos: ChunkPos, entities: T[])
    readonly entities: T[];
    readonly pos: ChunkPos;
    getEntities(): Stream<T>;
    getPos(): ChunkPos;
    isEmpty(): boolean;
}