import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AnimationChannel } from '../../../../net/minecraft/client/animation/AnimationChannel.d.ts'
import type { KeyframeAnimation } from '../../../../net/minecraft/client/animation/KeyframeAnimation.d.ts'
import type { ModelPart } from '../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
export class AnimationDefinition extends Record {
    constructor(lengthInSeconds: number, looping: boolean, boneAnimations: { [key: string]: AnimationChannel[] })
    // private boneAnimations: { [key: string]: AnimationChannel[] };
    // private lengthInSeconds: number;
    // private looping: boolean;
    bake(root: ModelPart): KeyframeAnimation;
    boneAnimations(): { [key: string]: AnimationChannel[] };
    equals(o: Object | null): boolean;
    hashCode(): number;
    lengthInSeconds(): number;
    looping(): boolean;
    toString(): string;
}