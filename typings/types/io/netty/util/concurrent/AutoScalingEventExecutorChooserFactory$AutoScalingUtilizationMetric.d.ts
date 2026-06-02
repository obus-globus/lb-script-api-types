import type { AtomicLong } from '../../../../java/util/concurrent/atomic/AtomicLong.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class AutoScalingEventExecutorChooserFactory$AutoScalingUtilizationMetric extends Object {
    constructor(arg0: (Object | null)[])
    // private executor: (Object | null)[];
    // private utilizationBits: AtomicLong;
    executor(): (Object | null)[];
    setUtilization(arg0: number): void;
    utilization(): number;
}