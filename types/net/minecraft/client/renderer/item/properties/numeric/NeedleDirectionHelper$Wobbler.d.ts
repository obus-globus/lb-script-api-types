import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface NeedleDirectionHelper$Wobbler extends Object{
    rotation(): number;
    shouldUpdate(tick: number): boolean;
    update(tick: number, targetRotation: number): void;
}