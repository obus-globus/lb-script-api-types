import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Frustum } from '../../../../../net/minecraft/client/renderer/culling/Frustum.d.ts'
import type { BrainDebugRenderer } from '../../../../../net/minecraft/client/renderer/debug/BrainDebugRenderer.d.ts'
import type { DebugRenderer$SimpleDebugRenderer } from '../../../../../net/minecraft/client/renderer/debug/DebugRenderer$SimpleDebugRenderer.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { DebugPoiInfo } from '../../../../../net/minecraft/util/debug/DebugPoiInfo.d.ts'
import type { DebugValueAccess } from '../../../../../net/minecraft/util/debug/DebugValueAccess.d.ts'
export class PoiDebugRenderer extends Object implements DebugRenderer$SimpleDebugRenderer {
    constructor(brainRenderer: BrainDebugRenderer)
    // private brainRenderer: BrainDebugRenderer;
    emitGizmos(camX: number, camY: number, camZ: number, debugValues: DebugValueAccess, frustum: Frustum, partialTicks: number): void;
    // private getTicketHolderNames(poi: DebugPoiInfo, potential: boolean, debugValues: DebugValueAccess): string[];
    // private renderGhostPoi(poiPos: BlockPos, names: string[]): void;
    // private renderPoiInfo(poi: DebugPoiInfo, debugValues: DebugValueAccess): void;
}