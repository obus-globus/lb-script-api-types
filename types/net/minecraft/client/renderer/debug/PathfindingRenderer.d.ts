import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Frustum } from '../../../../../net/minecraft/client/renderer/culling/Frustum.d.ts'
import type { DebugRenderer$SimpleDebugRenderer } from '../../../../../net/minecraft/client/renderer/debug/DebugRenderer$SimpleDebugRenderer.d.ts'
import type { DebugValueAccess } from '../../../../../net/minecraft/util/debug/DebugValueAccess.d.ts'
import type { Path } from '../../../../../net/minecraft/world/level/pathfinder/Path.d.ts'
export class PathfindingRenderer extends Object implements DebugRenderer$SimpleDebugRenderer {
    static renderPath(parampath: Path, parammaxNodeDistance: number, paramrenderOpenAndClosedSets: boolean, paramrenderGroundLabels: boolean, paramcamX: number, paramcamY: number, paramcamZ: number): void;
    static renderPathLine(parampath: Path, paramcamX: number, paramcamY: number, paramcamZ: number): void;
    constructor()
    emitGizmos(camX: number, camY: number, camZ: number, debugValues: DebugValueAccess, frustum: Frustum, partialTicks: number): void;
}