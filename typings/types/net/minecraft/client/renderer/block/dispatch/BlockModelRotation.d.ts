import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { OctahedralGroup } from '../../../../../../com/mojang/math/OctahedralGroup.d.ts'
import type { Transformation } from '../../../../../../com/mojang/math/Transformation.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockModelRotation$WithUvLock } from '../../../../../../net/minecraft/client/renderer/block/dispatch/BlockModelRotation$WithUvLock.d.ts'
import type { ModelState } from '../../../../../../net/minecraft/client/renderer/block/dispatch/ModelState.d.ts'
import type { Direction } from '../../../../../../net/minecraft/core/Direction.d.ts'
import type { Matrix4fc } from '../../../../../../org/joml/Matrix4fc.d.ts'
export class BlockModelRotation extends Object implements ModelState {
    static IDENTITY: BlockModelRotation;
    static NO_TRANSFORM: Matrix4fc;
    static get(paramgroup: OctahedralGroup): BlockModelRotation;
    private constructor(orientation: OctahedralGroup)
    // private faceMapping: JavaMap<Direction, Matrix4fc>;
    // private inverseFaceMapping: JavaMap<Direction, Matrix4fc>;
    // private orientation: OctahedralGroup;
    // private transformation: Transformation;
    // private withUvLock: BlockModelRotation$WithUvLock;
    faceTransformation(face: Direction): Matrix4fc;
    inverseFaceTransformation(face: Direction): Matrix4fc;
    toString(): string;
    transformation(): Transformation;
    withUvLock(): ModelState;
}