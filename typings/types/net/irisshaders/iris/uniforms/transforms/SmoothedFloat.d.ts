import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FloatSupplier } from '../../../../../net/irisshaders/iris/gl/uniform/FloatSupplier.d.ts'
import type { FrameUpdateNotifier } from '../../../../../net/irisshaders/iris/uniforms/FrameUpdateNotifier.d.ts'
export class SmoothedFloat extends Object implements FloatSupplier {
    constructor(arg0: number, arg1: number, arg2: () => number, arg3: FrameUpdateNotifier)
    // private accumulator: number;
    // private decayConstantDown: number;
    // private decayConstantUp: number;
    // private hasInitialValue: boolean;
    // private unsmoothed: () => number;
    // private computeDecay(arg0: number): number;
    getAsFloat(): number;
    // private update(): void;
}