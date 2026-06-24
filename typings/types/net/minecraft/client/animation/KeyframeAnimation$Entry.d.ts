import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AnimationChannel$Target } from '../../../../net/minecraft/client/animation/AnimationChannel$Target.d.ts'
import type { Keyframe } from '../../../../net/minecraft/client/animation/Keyframe.d.ts'
import type { ModelPart } from '../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { Vector3f } from '../../../../org/joml/Vector3f.d.ts'
export class KeyframeAnimation$Entry extends Record {
    private constructor(part: ModelPart, target: AnimationChannel$Target, keyframes: Keyframe[])
    // private keyframes: Keyframe[];
    // private part: ModelPart;
    // private target: AnimationChannel$Target;
    apply(secondsSinceStart: number, targetScale: number, scratchVector: Vector3f): void;
    equals(o: Object | null): boolean;
    hashCode(): number;
    keyframes(): Keyframe[];
    part(): ModelPart;
    target(): AnimationChannel$Target;
    toString(): string;
}