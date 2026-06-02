import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Function2 } from '../../../../../kotlin/jvm/functions/Function2.d.ts'
import type { DoubleFaceConsumer } from '../../../../../net/ccbluex/liquidbounce/utils/math/DoubleFaceConsumer.d.ts'
import type { FaceComponent } from '../../../../../net/ccbluex/liquidbounce/utils/math/FaceComponent.d.ts'
import type { PlaneMask } from '../../../../../net/ccbluex/liquidbounce/utils/math/PlaneMask.d.ts'
import type { ShapeSurfaceMesh$Companion } from '../../../../../net/ccbluex/liquidbounce/utils/math/ShapeSurfaceMesh$Companion.d.ts'
import type { Direction } from '../../../../../net/minecraft/core/Direction.d.ts'
import type { AABB } from '../../../../../net/minecraft/world/phys/AABB.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
import type { Shapes$DoubleLineConsumer } from '../../../../../net/minecraft/world/phys/shapes/Shapes$DoubleLineConsumer.d.ts'
export class ShapeSurfaceMesh extends Object {
    static Companion: ShapeSurfaceMesh$Companion;
    constructor(xs: number[], ys: number[], zs: number[], occupancy: (Object | null)[])
    // private occupancy: (Object | null)[];
    // private xSize: number;
    // private xs: number[];
    // private ySize: number;
    // private ys: number[];
    // private zSize: number;
    // private zs: number[];
    // private buildFaceMask(direction: Direction, planeIndex: number): PlaneMask;
    // private buildMask(width: number, height: number, predicate: Function2<number, number, boolean>): PlaneMask;
    // private faceBounds(direction: Direction, planeIndex: number, startU: number, startV: number, endU: number, endV: number): AABB;
    // private faceContainsPoint(direction: Direction, planeIndex: number, u: number, v: number, hitPos: Vec3): boolean;
    // private facePlaneIndices(direction: Direction): { start: number; endInclusive: number; step: number };
    // private findConnectedComponent(direction: Direction, hitPos: Vec3): FaceComponent | null;
    // private findSeedCell(mask: PlaneMask, direction: Direction, planeIndex: number, hitPos: Vec3): number;
    // private floodFill(mask: PlaneMask, seedU: number, seedV: number): PlaneMask;
    forAllFaces(action: DoubleFaceConsumer): void;
    forAllSideFaces(side: Direction, hitPos: Vec3, action: DoubleFaceConsumer): void;
    forAllSideOutlineEdges(side: Direction, hitPos: Vec3, action: Shapes$DoubleLineConsumer): void;
    // private forEachMergedFace(direction: Direction, component: FaceComponent | null, action: DoubleFaceConsumer): void;
    // private index(x: number, y: number, z: number): number;
    // private isFull(x: number, y: number, z: number): boolean;
    // private isFullWide(x: number, y: number, z: number): boolean;
    // private planePoint(direction: Direction, planeIndex: number, u: number, v: number): Vec3;
}