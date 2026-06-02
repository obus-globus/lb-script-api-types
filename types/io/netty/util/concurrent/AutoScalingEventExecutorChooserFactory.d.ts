import type { EventExecutorChooserFactory } from '../../../../io/netty/util/concurrent/EventExecutorChooserFactory.d.ts'
import type { EventExecutorChooserFactory$EventExecutorChooser } from '../../../../io/netty/util/concurrent/EventExecutorChooserFactory$EventExecutorChooser.d.ts'
import type { TimeUnit } from '../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class AutoScalingEventExecutorChooserFactory extends Object implements EventExecutorChooserFactory {
    constructor(arg0: number, arg1: number, arg2: number, arg3: TimeUnit, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number)
    // private maxChildren: number;
    // private maxRampDownStep: number;
    // private maxRampUpStep: number;
    // private minChildren: number;
    // private scaleDownThreshold: number;
    // private scaleUpThreshold: number;
    // private scalingPatienceCycles: number;
    // private utilizationCheckPeriodNanos: number;
    newChooser(arg0: (Object | null)[][]): EventExecutorChooserFactory$EventExecutorChooser;
}