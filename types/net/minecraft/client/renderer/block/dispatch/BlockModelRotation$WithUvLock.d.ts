import type { Transformation } from '../../../../../../com/mojang/math/Transformation.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockModelRotation } from '../../../../../../net/minecraft/client/renderer/block/dispatch/BlockModelRotation.d.ts'
import type { ModelState } from '../../../../../../net/minecraft/client/renderer/block/dispatch/ModelState.d.ts'
import type { Direction } from '../../../../../../net/minecraft/core/Direction.d.ts'
import type { Matrix4fc } from '../../../../../../org/joml/Matrix4fc.d.ts'
export class BlockModelRotation$WithUvLock extends Record implements ModelState {
    static NO_TRANSFORM: Matrix4fc;
    private constructor(parent: BlockModelRotation)
    // private parent: BlockModelRotation;
    equals(o: Object | null): boolean;
    faceTransformation(face: Direction): Matrix4fc;
    faceTransformation(face: Direction): Matrix4fc;
    hashCode(): number;
    inverseFaceTransformation(face: Direction): Matrix4fc;
    inverseFaceTransformation(face: Direction): Matrix4fc;
    parent(): BlockModelRotation;
    toString(): string;
    transformation(): Transformation;
    transformation(): Transformation;
}