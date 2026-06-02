import type { Object } from '../../../java/lang/Object.d.ts'
import type { EasingType } from '../../../net/minecraft/util/EasingType.d.ts'
export class BinaryAnimator extends Object {
    constructor(animationLength: number)
    constructor(animationLength: number, easing: EasingType)
    // private animationLength: number;
    // private easing: EasingType;
    // private ticks: number;
    // private ticksOld: number;
    getFactor(partialTicks: number): number;
    tick(active: boolean): void;
}