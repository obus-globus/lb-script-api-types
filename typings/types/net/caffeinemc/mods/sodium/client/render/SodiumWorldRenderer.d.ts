import type { GpuSampler } from '../../../../../../com/mojang/blaze3d/textures/GpuSampler.d.ts'
import type { PoseStack } from '../../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { CommandList } from '../../../../../../net/caffeinemc/mods/sodium/client/gl/device/CommandList.d.ts'
import type { ChunkRenderMatrices } from '../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/ChunkRenderMatrices.d.ts'
import type { RenderSectionManager } from '../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/RenderSectionManager.d.ts'
import type { Viewport } from '../../../../../../net/caffeinemc/mods/sodium/client/render/viewport/Viewport.d.ts'
import type { FogParameters } from '../../../../../../net/caffeinemc/mods/sodium/client/util/FogParameters.d.ts'
import type { Camera } from '../../../../../../net/minecraft/client/Camera.d.ts'
import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { ClientLevel } from '../../../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { ChunkSectionLayerGroup } from '../../../../../../net/minecraft/client/renderer/chunk/ChunkSectionLayerGroup.d.ts'
import type { EntityRenderer } from '../../../../../../net/minecraft/client/renderer/entity/EntityRenderer.d.ts'
import type { EntityRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/EntityRenderState.d.ts'
import type { LevelRenderState } from '../../../../../../net/minecraft/client/renderer/state/level/LevelRenderState.d.ts'
import type { Entity } from '../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { BlockEntity } from '../../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
import type { Matrix4f } from '../../../../../../org/joml/Matrix4f.d.ts'
import type { Vector3d } from '../../../../../../org/joml/Vector3d.d.ts'
import type { Vector4f } from '../../../../../../org/joml/Vector4f.d.ts'
export class SodiumWorldRenderer extends Object {
    static instance(): SodiumWorldRenderer;
    static instanceNullable(): SodiumWorldRenderer;
    constructor(arg0: Minecraft)
    // private client: Minecraft;
    // private cullMatrix: Matrix4f;
    // private lastCameraPitch: number;
    // private lastCameraPos: Vector3d;
    // private lastCameraYaw: number;
    // private lastFogParameters: FogParameters;
    // private lastSunAngle: number;
    readonly level: ClientLevel;
    // private renderDistance: number;
    // private renderSectionManager: RenderSectionManager;
    // private useEntityCulling: boolean;
    drawChunkLayer(arg0: ChunkSectionLayerGroup, arg1: ChunkRenderMatrices, arg2: number, arg3: number, arg4: number, arg5: GpuSampler): void;
    extractBlockEntities(arg0: Camera, arg1: number, arg2: { [key: string]: any }, arg3: LevelRenderState): void;
    // private extractBlockEntity(arg0: BlockEntity, arg1: PoseStack, arg2: Camera, arg3: number, arg4: { [key: string]: any }, arg5: LevelRenderState): void;
    getChunksDebugString(): string;
    getDebugStrings(arg0: boolean): string[];
    getVisibleChunkCount(): number;
    // private initRenderer(arg0: CommandList): void;
    isBoxVisible(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
    isEntityVisible<T extends Entity, S extends EntityRenderState>(arg0: EntityRenderer<T, S>, arg1: T): boolean;
    isSectionReady(arg0: number, arg1: number, arg2: number): boolean;
    isTerrainRenderComplete(): boolean;
    iterateVisibleBlockEntities(arg0: (param0: BlockEntity) => void): void;
    // private loadLevel(arg0: ClientLevel): void;
    // private processChunkEvents(): void;
    reload(): void;
    scheduleRebuildForBlockArea(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): void;
    scheduleRebuildForChunk(arg0: number, arg1: number, arg2: number, arg3: boolean): void;
    scheduleRebuildForChunks(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): void;
    scheduleTerrainUpdate(): void;
    setLevel(arg0: ClientLevel): void;
    setupTerrain(arg0: Camera, arg1: Viewport, arg2: FogParameters, arg3: boolean, arg4: boolean, arg5: Matrix4f): void;
    // private unloadLevel(): void;
    updateFogColor(arg0: Vector4f): void;
}