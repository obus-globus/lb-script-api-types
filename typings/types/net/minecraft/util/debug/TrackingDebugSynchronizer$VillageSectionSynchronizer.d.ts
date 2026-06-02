import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { ServerLevel } from '../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { ServerPlayer } from '../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { Unit } from '../../../../net/minecraft/util/Unit.d.ts'
import type { TrackingDebugSynchronizer } from '../../../../net/minecraft/util/debug/TrackingDebugSynchronizer.d.ts'
import type { PoiRecord } from '../../../../net/minecraft/world/entity/ai/village/poi/PoiRecord.d.ts'
import type { ChunkPos } from '../../../../net/minecraft/world/level/ChunkPos.d.ts'
export class TrackingDebugSynchronizer$VillageSectionSynchronizer extends TrackingDebugSynchronizer<Unit> {
    constructor()
    onPoiAdded(level: ServerLevel, record: PoiRecord): void;
    onPoiRemoved(level: ServerLevel, poiPos: BlockPos): void;
    sendInitialChunk(player: ServerPlayer, chunkPos: ChunkPos): void;
    // private sendVillageSectionsPacket(level: ServerLevel, poiPos: BlockPos): void;
}