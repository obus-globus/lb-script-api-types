import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ModelPart } from '../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { Vector3f } from '../../../../org/joml/Vector3f.d.ts'
export interface AnimationChannel$Target extends Object{
    apply(animationBone: ModelPart, target: Vector3f): void;
}