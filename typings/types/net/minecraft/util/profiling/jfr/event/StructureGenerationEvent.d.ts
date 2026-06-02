import type { Event } from '../../../../../../jdk/jfr/Event.d.ts'
import type { EventType } from '../../../../../../jdk/jfr/EventType.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { ResourceKey } from '../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { ChunkPos } from '../../../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { Level } from '../../../../../../net/minecraft/world/level/Level.d.ts'
import type { Structure } from '../../../../../../net/minecraft/world/level/levelgen/structure/Structure.d.ts'
export class StructureGenerationEvent extends Event {
    static EVENT_NAME: string;
    static TYPE: EventType;
    constructor(sourceChunkPos: ChunkPos, structure: Holder<Structure>, level: ResourceKey<Level>)
    chunkPosX: number;
    chunkPosZ: number;
    level: string;
    structure: string;
    success: boolean;
}