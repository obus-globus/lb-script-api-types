import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AnimationChannel$Interpolation } from '../../../../net/minecraft/client/animation/AnimationChannel$Interpolation.d.ts'
import type { Vector3fc } from '../../../../org/joml/Vector3fc.d.ts'
export class Keyframe extends Record {
    // private interpolation: AnimationChannel$Interpolation;
    // private postTarget: Vector3fc;
    // private preTarget: Vector3fc;
    // private timestamp: number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    interpolation(): AnimationChannel$Interpolation;
    postTarget(): Vector3fc;
    preTarget(): Vector3fc;
    timestamp(): number;
    toString(): string;
}