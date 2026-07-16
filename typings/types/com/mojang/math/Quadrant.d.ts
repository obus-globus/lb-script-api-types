import type { OctahedralGroup } from '../../../com/mojang/math/OctahedralGroup.d.ts'
import type { Codec } from '../../../com/mojang/serialization/Codec.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class Quadrant extends Enum<Quadrant> {
    static CODEC: Codec<Quadrant>;
    static R0: Quadrant;
    static R180: Quadrant;
    static R270: Quadrant;
    static R90: Quadrant;
    static fromXYAngles(paramxRotation: Quadrant, paramyRotation: Quadrant): OctahedralGroup;
    static fromXYZAngles(paramxRotation: Quadrant, paramyRotation: Quadrant, paramzRotation: Quadrant): OctahedralGroup;
    static parseJson(paramdegrees: number): Quadrant;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): Quadrant;
    static values(): Quadrant[];
    private constructor(shift: number, rotationX: OctahedralGroup, rotationY: OctahedralGroup, rotationZ: OctahedralGroup)
    rotationX: OctahedralGroup;
    rotationY: OctahedralGroup;
    rotationZ: OctahedralGroup;
    shift: number;
    rotateVertexIndex(index: number): number;
    name(): "R0" | "R90" | "R180" | "R270";
}