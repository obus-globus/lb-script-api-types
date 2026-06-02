import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AnimationChannel } from '../../../../net/minecraft/client/animation/AnimationChannel.d.ts'
import type { AnimationDefinition } from '../../../../net/minecraft/client/animation/AnimationDefinition.d.ts'
export class AnimationDefinition$Builder extends Object {
    static withLength(paramlengthInSeconds: number): AnimationDefinition$Builder;
    private constructor(length: number)
    // private animationByBone: { [key: string]: AnimationChannel[] };
    // private length: number;
    // private looping: boolean;
    addAnimation(boneName: string, animation: AnimationChannel): AnimationDefinition$Builder;
    build(): AnimationDefinition;
    looping(): AnimationDefinition$Builder;
}