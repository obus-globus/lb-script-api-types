import type { Object } from '../../../../java/lang/Object.d.ts'
export class ThrottlerParameters extends Object {
    constructor(arg0: number, arg1: number, arg2: number)
    // private reconfigure: boolean;
    // private samplePointsPerWindow: number;
    // private windowDurationMillis: number;
    // private windowLookBackCount: number;
    copy(): ThrottlerParameters;
    setSamplePointsAndWindowDuration(arg0: number, arg1: number): void;
    // private updateWindowLookback(): void;
}