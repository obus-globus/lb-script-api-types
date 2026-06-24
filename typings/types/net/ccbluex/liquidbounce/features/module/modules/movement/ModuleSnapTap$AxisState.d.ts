import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class ModuleSnapTap$AxisState extends Object {
    constructor()
    holdingNegative: boolean;
    holdingPositive: boolean;
    lastNegativePressTime: number;
    lastPositivePressTime: number;
    onPress(positive: boolean): void;
    onRelease(positive: boolean): void;
}