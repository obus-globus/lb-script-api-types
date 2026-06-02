import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Octree$Node } from '../../../../net/minecraft/client/renderer/Octree$Node.d.ts'
import type { Octree$OctreeVisitor } from '../../../../net/minecraft/client/renderer/Octree$OctreeVisitor.d.ts'
import type { SectionRenderDispatcher$RenderSection } from '../../../../net/minecraft/client/renderer/chunk/SectionRenderDispatcher$RenderSection.d.ts'
import type { Frustum } from '../../../../net/minecraft/client/renderer/culling/Frustum.d.ts'
import type { AABB } from '../../../../net/minecraft/world/phys/AABB.d.ts'
export class Octree$Leaf extends Object implements Octree$Node {
    private constructor(null_: Octree$Leaf, section: SectionRenderDispatcher$RenderSection)
    readonly section: SectionRenderDispatcher$RenderSection;
    getAABB(): AABB;
    getSection(): SectionRenderDispatcher$RenderSection;
    visitNodes(visitor: (param0: Octree$Node, param1: boolean, param2: number, param3: boolean) => void, skipFrustumCheck: boolean, frustum: Frustum, depth: number, closeDistance: number, isClose: boolean): void;
}