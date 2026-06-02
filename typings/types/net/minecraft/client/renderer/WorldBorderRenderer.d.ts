import type { GpuBuffer } from '../../../../com/mojang/blaze3d/buffers/GpuBuffer.d.ts'
import type { RenderSystem$AutoStorageIndexBuffer } from '../../../../com/mojang/blaze3d/systems/RenderSystem$AutoStorageIndexBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { WorldBorderRenderState } from '../../../../net/minecraft/client/renderer/state/level/WorldBorderRenderState.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
import type { WorldBorder } from '../../../../net/minecraft/world/level/border/WorldBorder.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
export class WorldBorderRenderer extends Object {
    static FORCEFIELD_LOCATION: Identifier;
    constructor()
    // private indices: RenderSystem$AutoStorageIndexBuffer;
    // private lastBorderMaxX: number;
    // private lastBorderMaxZ: number;
    // private lastBorderMinX: number;
    // private lastBorderMinZ: number;
    // private lastMinX: number;
    // private lastMinZ: number;
    // private needsRebuild: boolean;
    // private worldBorderBuffer: GpuBuffer;
    extract(border: WorldBorder, deltaPartialTick: number, cameraPos: Vec3, renderDistance: number, state: WorldBorderRenderState): void;
    invalidate(): void;
    // private rebuildWorldBorderBuffer(state: WorldBorderRenderState, renderDistance: number, cameraZ: number, cameraX: number, halfHeightY: number, v1: number, v0: number): void;
    render(state: WorldBorderRenderState, cameraPos: Vec3, renderDistance: number, depthFar: number): void;
    // private shouldRebuildWorldBorderBuffer(state: WorldBorderRenderState): boolean;
}