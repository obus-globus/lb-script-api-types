import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FaceInfo$Extent } from '../../../../net/minecraft/client/renderer/FaceInfo$Extent.d.ts'
import type { Vector3f } from '../../../../org/joml/Vector3f.d.ts'
import type { Vector3fc } from '../../../../org/joml/Vector3fc.d.ts'
export class FaceInfo$VertexInfo extends Record {
    constructor(xFace: FaceInfo$Extent, yFace: FaceInfo$Extent, zFace: FaceInfo$Extent)
    // private xFace: FaceInfo$Extent;
    // private yFace: FaceInfo$Extent;
    // private zFace: FaceInfo$Extent;
    equals(o: Object | null): boolean;
    hashCode(): number;
    select(min: Vector3fc, max: Vector3fc): Vector3f;
    toString(): string;
    xFace(): FaceInfo$Extent;
    yFace(): FaceInfo$Extent;
    zFace(): FaceInfo$Extent;
}