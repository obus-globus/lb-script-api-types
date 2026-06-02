import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Keyframe } from '../../../../net/minecraft/client/animation/Keyframe.d.ts'
import type { Vector3f } from '../../../../org/joml/Vector3f.d.ts'
export interface AnimationChannel$Interpolation extends Object{
    apply(vector: Vector3f, alpha: number, keyframes: Keyframe[], prev: number, next: number, targetScale: number): Vector3f;
}