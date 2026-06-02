import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Octree$Branch } from '../../../../net/minecraft/client/renderer/Octree$Branch.d.ts'
import type { Octree$Node } from '../../../../net/minecraft/client/renderer/Octree$Node.d.ts'
import type { Octree$OctreeVisitor } from '../../../../net/minecraft/client/renderer/Octree$OctreeVisitor.d.ts'
import type { SectionRenderDispatcher$RenderSection } from '../../../../net/minecraft/client/renderer/chunk/SectionRenderDispatcher$RenderSection.d.ts'
import type { Frustum } from '../../../../net/minecraft/client/renderer/culling/Frustum.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { SectionPos } from '../../../../net/minecraft/core/SectionPos.d.ts'
export class Octree extends Object {
    constructor(cameraSection: SectionPos, renderDistance: number, sectionsPerChunk: number, minBlockY: number)
    // private cameraSectionCenter: BlockPos;
    // private root: Octree$Branch;
    add(section: SectionRenderDispatcher$RenderSection): boolean;
    // private isClose(minX: number, minY: number, minZ: number, maxX: number, maxY: number, maxZ: number, closeDistance: number): boolean;
    visitNodes(visitor: (param0: Octree$Node, param1: boolean, param2: number, param3: boolean) => void, frustum: Frustum, closeDistance: number): void;
}