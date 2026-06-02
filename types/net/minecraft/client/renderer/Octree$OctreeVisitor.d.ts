import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Octree$Node } from '../../../../net/minecraft/client/renderer/Octree$Node.d.ts'
export interface Octree$OctreeVisitor extends Object{
    visit(node: Octree$Node, fullyVisible: boolean, depth: number, isClose: boolean): void;
}