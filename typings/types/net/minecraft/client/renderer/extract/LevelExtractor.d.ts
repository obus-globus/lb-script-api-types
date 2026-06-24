import type { CompletableFuture } from '../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Executor } from '../../../../../java/util/concurrent/Executor.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { SodiumWorldRenderer } from '../../../../../net/caffeinemc/mods/sodium/client/render/SodiumWorldRenderer.d.ts'
import type { LevelRendererExtensions } from '../../../../../net/fabricmc/fabric/impl/client/rendering/LevelRendererExtensions.d.ts'
import type { LevelExtractionContextImpl } from '../../../../../net/fabricmc/fabric/impl/client/rendering/level/LevelExtractionContextImpl.d.ts'
import type { FabricResourceReloader } from '../../../../../net/fabricmc/fabric/impl/resource/FabricResourceReloader.d.ts'
import type { Camera } from '../../../../../net/minecraft/client/Camera.d.ts'
import type { DeltaTracker } from '../../../../../net/minecraft/client/DeltaTracker.d.ts'
import type { Minecraft } from '../../../../../net/minecraft/client/Minecraft.d.ts'
import type { SectionUpdateTracker } from '../../../../../net/minecraft/client/SectionUpdateTracker.d.ts'
import type { ClientLevel } from '../../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { LevelRenderer } from '../../../../../net/minecraft/client/renderer/LevelRenderer.d.ts'
import type { Frustum } from '../../../../../net/minecraft/client/renderer/culling/Frustum.d.ts'
import type { DebugRenderer } from '../../../../../net/minecraft/client/renderer/debug/DebugRenderer.d.ts'
import type { GameTestBlockHighlightRenderer } from '../../../../../net/minecraft/client/renderer/debug/GameTestBlockHighlightRenderer.d.ts'
import type { EntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/EntityRenderState.d.ts'
import type { LevelRenderState } from '../../../../../net/minecraft/client/renderer/state/level/LevelRenderState.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Gizmos$TemporaryCollection } from '../../../../../net/minecraft/gizmos/Gizmos$TemporaryCollection.d.ts'
import type { SimpleGizmoCollector } from '../../../../../net/minecraft/gizmos/SimpleGizmoCollector.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { PreparableReloadListener$PreparationBarrier } from '../../../../../net/minecraft/server/packs/resources/PreparableReloadListener$PreparationBarrier.d.ts'
import type { PreparableReloadListener$SharedState } from '../../../../../net/minecraft/server/packs/resources/PreparableReloadListener$SharedState.d.ts'
import type { ResourceManager } from '../../../../../net/minecraft/server/packs/resources/ResourceManager.d.ts'
import type { ResourceManagerReloadListener } from '../../../../../net/minecraft/server/packs/resources/ResourceManagerReloadListener.d.ts'
import type { RandomSource } from '../../../../../net/minecraft/util/RandomSource.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class LevelExtractor extends Object implements LevelRendererExtensions, FabricResourceReloader, ResourceManagerReloadListener {
    constructor(minecraft: Minecraft, levelRenderState: LevelRenderState, levelRenderer: LevelRenderer)
    debugRenderer: DebugRenderer;
    // private extractionContext: LevelExtractionContextImpl;
    // private fabric$id: Identifier;
    gameTestBlockHighlightRenderer: GameTestBlockHighlightRenderer;
    // private lastViewDistance: number;
    readonly level: ClientLevel;
    // private levelRenderState: LevelRenderState;
    // private levelRenderer: LevelRenderer;
    // private mainThreadGizmos: SimpleGizmoCollector;
    // private minecraft: Minecraft;
    // private prevCamRotX: number;
    // private prevCamRotY: number;
    // private random: RandomSource;
    // private renderer: SodiumWorldRenderer;
    // private sectionUpdateTracker: SectionUpdateTracker;
    // private shouldInvalidateCompiledGeometry: boolean;
    // private shouldResetChunkLayerSampler: boolean;
    // private shouldResetLevelRenderData: boolean;
    // private shouldResetSkyRenderer: boolean;
    allChanged(): void;
    // private applyFrustum(frustum: Frustum): void;
    blockChanged(pos: BlockPos, updateFlags: number): void;
    // private checkRenderer(): void;
    collectPerFrameMainThreadGizmos(): Gizmos$TemporaryCollection;
    countRenderedSections(): number;
    entityStatistics(): string;
    extract(deltaTracker: DeltaTracker, camera: Camera, deltaPartialTick: number): void;
    // private extractBlockDestroyAnimation(camera: Camera, levelRenderState: LevelRenderState): void;
    // private extractBlockOutline(camera: Camera, levelRenderState: LevelRenderState): void;
    // private extractEntity(entity: Entity, partialTickTime: number): EntityRenderState;
    // private extractGizmos(): void;
    // private extractVisibleBlockEntities(camera: Camera, deltaPartialTick: number, levelRenderState: LevelRenderState): void;
    // private extractVisibleEntities(camera: Camera, frustum: Frustum, deltaTracker: DeltaTracker, output: LevelRenderState): void;
    fabric$getId(): Identifier;
    fabric_prepareLevelExtractionContext(arg0: DeltaTracker): void;
    getName(): string;
    // private iris$disableFabulousGraphics(): void;
    isEntityVisible(entity: Entity, frustum: Frustum, camX: number, camY: number, camZ: number): boolean;
    lastViewDistance(): number;
    onResourceManagerReload(resourceManager: ResourceManager): void;
    reload(currentReload: PreparableReloadListener$SharedState, taskExecutor: Executor, preparationBarrier: (param0: Object | null) => CompletableFuture<Object>, reloadExecutor: Executor): CompletableFuture<void>;
    resetSampler(): void;
    sectionStatistics(): string;
    // private setBlockDirty(arg0: BlockPos, arg1: boolean): void;
    setBlockDirty(pos: BlockPos, oldState: BlockState, newState: BlockState): void;
    setBlocksDirty(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
    setLevel(level: ClientLevel): void;
    setSectionDirty(sectionX: number, sectionY: number, sectionZ: number): void;
    // private setSectionDirty(arg0: number, arg1: number, arg2: number, arg3: boolean): void;
    setSectionDirtyWithNeighbors(arg0: number, arg1: number, arg2: number): void;
    setSectionRangeDirty(minSectionX: number, minSectionY: number, minSectionZ: number, maxSectionX: number, maxSectionY: number, maxSectionZ: number): void;
    // private shouldShowEntityOutlines(camera: Camera): boolean;
    totalSections(): number;
}