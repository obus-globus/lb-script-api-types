import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ModelPart$Cube } from '../../../../../../net/minecraft/client/model/geom/ModelPart$Cube.d.ts'
import type { CubeDeformation } from '../../../../../../net/minecraft/client/model/geom/builders/CubeDeformation.d.ts'
import type { UVPair } from '../../../../../../net/minecraft/client/model/geom/builders/UVPair.d.ts'
import type { Direction } from '../../../../../../net/minecraft/core/Direction.d.ts'
import type { Vector3fc } from '../../../../../../org/joml/Vector3fc.d.ts'
export class CubeDefinition extends Object {
    constructor(comment: string, xTexOffs: number, yTexOffs: number, minX: number, minY: number, minZ: number, width: number, height: number, depth: number, grow: CubeDeformation, mirror: boolean, xTexScale: number, yTexScale: number, visibleFaces: Direction[])
    // private comment: string;
    // private dimensions: Vector3fc;
    // private grow: CubeDeformation;
    // private mirror: boolean;
    // private origin: Vector3fc;
    // private texCoord: UVPair;
    // private texScale: UVPair;
    // private visibleFaces: Direction[];
    bake(texScaleX: number, texScaleY: number): ModelPart$Cube;
}