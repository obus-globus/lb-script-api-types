import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class Octree$AxisSorting extends Enum<Octree$AxisSorting> {
    static XYZ: Octree$AxisSorting;
    static XZY: Octree$AxisSorting;
    static YXZ: Octree$AxisSorting;
    static YZX: Octree$AxisSorting;
    static ZXY: Octree$AxisSorting;
    static ZYX: Octree$AxisSorting;
    static getAxisSorting(paramabsXDiff: number, paramabsYDiff: number, paramabsZDiff: number): Octree$AxisSorting;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): Octree$AxisSorting;
    static values(): Octree$AxisSorting[];
    private constructor(xShift: number, yShift: number, zShift: number)
    // private xShift: number;
    // private yShift: number;
    // private zShift: number;
    name(): "XYZ" | "XZY" | "YXZ" | "YZX" | "ZXY" | "ZYX";
}