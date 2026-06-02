import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { Vector3fc } from '../../../../org/joml/Vector3fc.d.ts'
export class FaceInfo$Extent extends Enum<FaceInfo$Extent> {
    static MAX_X: FaceInfo$Extent;
    static MAX_Y: FaceInfo$Extent;
    static MAX_Z: FaceInfo$Extent;
    static MIN_X: FaceInfo$Extent;
    static MIN_Y: FaceInfo$Extent;
    static MIN_Z: FaceInfo$Extent;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): FaceInfo$Extent;
    static values(): (Object | null)[];
    private constructor()
    select(minX: number, minY: number, minZ: number, maxX: number, maxY: number, maxZ: number): number;
    select(min: Vector3fc, max: Vector3fc): number;
    name(): "MIN_X" | "MIN_Y" | "MIN_Z" | "MAX_X" | "MAX_Y" | "MAX_Z";
}