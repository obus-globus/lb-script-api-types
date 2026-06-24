import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AnimationChannel$Target } from '../../../../net/minecraft/client/animation/AnimationChannel$Target.d.ts'
import type { Keyframe } from '../../../../net/minecraft/client/animation/Keyframe.d.ts'
export class AnimationChannel extends Record {
    constructor(target: AnimationChannel$Target, keyframes: Keyframe[])
    // private keyframes: Keyframe[];
    // private target: AnimationChannel$Target;
    equals(o: Object | null): boolean;
    hashCode(): number;
    keyframes(): Keyframe[];
    target(): AnimationChannel$Target;
    toString(): string;
}