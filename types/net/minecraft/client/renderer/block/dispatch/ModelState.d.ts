import type { Transformation } from '../../../../../../com/mojang/math/Transformation.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Direction } from '../../../../../../net/minecraft/core/Direction.d.ts'
import type { Matrix4fc } from '../../../../../../org/joml/Matrix4fc.d.ts'
export interface ModelState extends Object{
    faceTransformation(face: Direction): Matrix4fc;
    inverseFaceTransformation(face: Direction): Matrix4fc;
    transformation(): Transformation;
}