import type { BitSet } from '../../java/util/BitSet.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { PolygonsIntersection$IntervalTreeNode } from '../../org/joml/PolygonsIntersection$IntervalTreeNode.d.ts'
export class PolygonsIntersection extends Object {
    constructor(arg0: number[], arg1: number[], arg2: number)
    // private centerX: number;
    // private centerY: number;
    // private maxX: number;
    // private maxY: number;
    // private minX: number;
    // private minY: number;
    // private radiusSquared: number;
    // private tree: PolygonsIntersection$IntervalTreeNode;
    // private verticesXY: number[];
    // private buildNode(arg0: (Object | null)[], arg1: number): PolygonsIntersection$IntervalTreeNode;
    // private preprocess(arg0: number, arg1: number[]): void;
    testPoint(arg0: number, arg1: number): boolean;
    testPoint(arg0: number, arg1: number, arg2: BitSet): boolean;
}