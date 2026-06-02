import type { Object } from '../../../java/lang/Object.d.ts'
import type { Vector2f } from '../../../org/joml/Vector2f.d.ts'
export class BestCandidateSampling$QuadTree extends Object {
    constructor(arg0: number, arg1: number, arg2: number)
    // private children: BestCandidateSampling$QuadTree[];
    // private hs: number;
    // private minX: number;
    // private minY: number;
    // private objects: Object[];
    insert(arg0: Vector2f): void;
    // private insertIntoChild(arg0: Vector2f): void;
    nearest(arg0: number, arg1: number, arg2: number, arg3: number): number;
    // private quadrant(arg0: number, arg1: number): number;
    // private split(): void;
}