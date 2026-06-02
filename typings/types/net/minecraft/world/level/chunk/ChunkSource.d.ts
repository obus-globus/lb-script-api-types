import type { AutoCloseable } from '../../../../../java/lang/AutoCloseable.d.ts'
import type { BooleanSupplier } from '../../../../../java/util/function/BooleanSupplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { SectionPos } from '../../../../../net/minecraft/core/SectionPos.d.ts'
import type { ChunkPos } from '../../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { LightLayer } from '../../../../../net/minecraft/world/level/LightLayer.d.ts'
import type { ChunkAccess } from '../../../../../net/minecraft/world/level/chunk/ChunkAccess.d.ts'
import type { LevelChunk } from '../../../../../net/minecraft/world/level/chunk/LevelChunk.d.ts'
import type { LightChunk } from '../../../../../net/minecraft/world/level/chunk/LightChunk.d.ts'
import type { LightChunkGetter } from '../../../../../net/minecraft/world/level/chunk/LightChunkGetter.d.ts'
import type { ChunkStatus } from '../../../../../net/minecraft/world/level/chunk/status/ChunkStatus.d.ts'
import type { LevelLightEngine } from '../../../../../net/minecraft/world/level/lighting/LevelLightEngine.d.ts'
export abstract class ChunkSource extends Object implements AutoCloseable, LightChunkGetter {
    constructor()
    close(): void;
    gatherStats(): string;
    getChunk(x: number, z: number, loadOrGenerate: boolean): LevelChunk;
    getChunk(x: number, z: number, targetStatus: ChunkStatus, loadOrGenerate: boolean): ChunkAccess;
    getChunkForLighting(x: number, z: number): LightChunk;
    getChunkNow(x: number, z: number): LevelChunk;
    getForceLoadedChunks(): (Object | null)[];
    getLightEngine(): LevelLightEngine;
    getLoadedChunksCount(): number;
    hasChunk(x: number, z: number): boolean;
    onLightUpdate(layer: LightLayer, pos: SectionPos): void;
    onSectionEmptinessChanged(sectionX: number, sectionY: number, sectionZ: number, empty: boolean): void;
    setSpawnSettings(spawnEnemies: boolean): void;
    tick(haveTime: () => kotlin.Boolean, tickChunks: boolean): void;
    updateChunkForced(pos: ChunkPos, forced: boolean): boolean;
}