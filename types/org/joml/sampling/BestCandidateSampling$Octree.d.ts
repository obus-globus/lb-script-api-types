import type { Object } from '../../../java/lang/Object.d.ts'
import type { Vector3f } from '../../../org/joml/Vector3f.d.ts'
export class BestCandidateSampling$Octree extends Object {
    constructor(arg0: number, arg1: number, arg2: number, arg3: number)
    // private children: BestCandidateSampling$Octree[];
    // private hs: number;
    // private minX: number;
    // private minY: number;
    // private minZ: number;
    // private objects: Object[];
    insert(arg0: Vector3f): void;
    // private insertIntoChild(arg0: Vector3f): void;
    nearest(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): number;
    // private octant(arg0: number, arg1: number, arg2: number): number;
    // private split(): void;
}