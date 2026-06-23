import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ChunkMap } from '../../../../net/minecraft/server/level/ChunkMap.d.ts'
import type { ServerPlayer } from '../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { MobCategory } from '../../../../net/minecraft/world/entity/MobCategory.d.ts'
import type { ChunkPos } from '../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { LocalMobCapCalculator$MobCounts } from '../../../../net/minecraft/world/level/LocalMobCapCalculator$MobCounts.d.ts'
export class LocalMobCapCalculator extends Object {
    constructor(chunkMap: ChunkMap)
    // private chunkMap: ChunkMap;
    // private playerMobCounts: Map<ServerPlayer, LocalMobCapCalculator$MobCounts>;
    // private playersNearChunk: { [key: string]: any };
    addMob(pos: ChunkPos, category: MobCategory): void;
    canSpawn(mobCategory: MobCategory, pos: ChunkPos): boolean;
    // private getPlayersNear(pos: ChunkPos): ServerPlayer[];
}