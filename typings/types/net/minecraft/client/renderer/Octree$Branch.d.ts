import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Octree$AxisSorting } from '../../../../net/minecraft/client/renderer/Octree$AxisSorting.d.ts'
import type { Octree$Node } from '../../../../net/minecraft/client/renderer/Octree$Node.d.ts'
import type { Octree$OctreeVisitor } from '../../../../net/minecraft/client/renderer/Octree$OctreeVisitor.d.ts'
import type { SectionRenderDispatcher$RenderSection } from '../../../../net/minecraft/client/renderer/chunk/SectionRenderDispatcher$RenderSection.d.ts'
import type { Frustum } from '../../../../net/minecraft/client/renderer/culling/Frustum.d.ts'
import type { BoundingBox } from '../../../../net/minecraft/world/level/levelgen/structure/BoundingBox.d.ts'
import type { AABB } from '../../../../net/minecraft/world/phys/AABB.d.ts'
export class Octree$Branch extends Object implements Octree$Node {
    constructor(null_: Octree$Branch, boundingBox: BoundingBox)
    // private bbCenterX: number;
    // private bbCenterY: number;
    // private bbCenterZ: number;
    // private boundingBox: BoundingBox;
    // private cameraXDiffNegative: boolean;
    // private cameraYDiffNegative: boolean;
    // private cameraZDiffNegative: boolean;
    // private nodes: Octree$Node[];
    // private sorting: Octree$AxisSorting;
    add(section: SectionRenderDispatcher$RenderSection): boolean;
    // private areChildrenLeaves(): boolean;
    // private createChildBoundingBox(sectionXDiffNegative: boolean, sectionYDiffNegative: boolean, sectionZDiffNegative: boolean): BoundingBox;
    getAABB(): AABB;
    getSection(): SectionRenderDispatcher$RenderSection;
    visitNodes(visitor: (param0: Octree$Node, param1: boolean, param2: number, param3: boolean) => void, skipFrustumCheck: boolean, frustum: Frustum, depth: number, closeDistance: number, isClose: boolean): void;
}