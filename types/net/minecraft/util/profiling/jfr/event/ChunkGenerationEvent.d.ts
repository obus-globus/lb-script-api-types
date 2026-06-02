import type { Event } from '../../../../../../jdk/jfr/Event.d.ts'
import type { EventType } from '../../../../../../jdk/jfr/EventType.d.ts'
import type { ResourceKey } from '../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { ChunkPos } from '../../../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { Level } from '../../../../../../net/minecraft/world/level/Level.d.ts'
export class ChunkGenerationEvent extends Event {
    static EVENT_NAME: string;
    static TYPE: EventType;
    constructor(pos: ChunkPos, dimension: ResourceKey<Level>, name: string)
    chunkPosX: number;
    chunkPosZ: number;
    level: string;
    targetStatus: string;
    worldPosX: number;
    worldPosZ: number;
}