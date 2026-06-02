import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../../net/minecraft/client/Minecraft.d.ts'
import type { Octree$Node } from '../../../../../net/minecraft/client/renderer/Octree$Node.d.ts'
import type { Frustum } from '../../../../../net/minecraft/client/renderer/culling/Frustum.d.ts'
import type { DebugRenderer$SimpleDebugRenderer } from '../../../../../net/minecraft/client/renderer/debug/DebugRenderer$SimpleDebugRenderer.d.ts'
import type { DebugValueAccess } from '../../../../../net/minecraft/util/debug/DebugValueAccess.d.ts'
import type { MutableInt } from '../../../../../org/apache/commons/lang3/mutable/MutableInt.d.ts'
export class OctreeDebugRenderer extends Object implements DebugRenderer$SimpleDebugRenderer {
    constructor(minecraft: Minecraft)
    // private minecraft: Minecraft;
    emitGizmos(camX: number, camY: number, camZ: number, debugValues: DebugValueAccess, frustum: Frustum, partialTicks: number): void;
    // private renderNode(node: Octree$Node, depth: number, fullyVisible: boolean, count: MutableInt, isClose: boolean): void;
}