import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AnimationDefinition } from '../../../../net/minecraft/client/animation/AnimationDefinition.d.ts'
import type { KeyframeAnimation$Entry } from '../../../../net/minecraft/client/animation/KeyframeAnimation$Entry.d.ts'
import type { AnimationState } from '../../../../net/minecraft/world/entity/AnimationState.d.ts'
export class KeyframeAnimation extends Object {
    private constructor(definition: AnimationDefinition, entries: KeyframeAnimation$Entry[])
    // private definition: AnimationDefinition;
    // private entries: KeyframeAnimation$Entry[];
    apply(millisSinceStart: number, targetScale: number): void;
    apply(animationState: AnimationState, currentTime: number): void;
    apply(animationState: AnimationState, currentTime: number, speedFactor: number): void;
    applyStatic(): void;
    applyWalk(animationPos: number, animationSpeed: number, speedFactor: number, scaleFactor: number): void;
    // private getElapsedSeconds(millisSinceStart: number): number;
}