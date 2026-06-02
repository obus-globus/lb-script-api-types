import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Vec3 } from '../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export interface MixinEntityFluidInteractionTrackerAccessor extends Object{
    accumulatedCurrent(): Vec3;
    accumulatedCurrent(arg0: Vec3): void;
    currentCount(): number;
    currentCount(arg0: number): void;
    eyesInside(): boolean;
    eyesInside(arg0: boolean): void;
    height(): number;
    height(arg0: number): void;
}