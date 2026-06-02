import type { AutoScalingEventExecutorChooserFactory$AutoScalingState } from '../../../../io/netty/util/concurrent/AutoScalingEventExecutorChooserFactory$AutoScalingState.d.ts'
import type { AutoScalingEventExecutorChooserFactory$AutoScalingUtilizationMetric } from '../../../../io/netty/util/concurrent/AutoScalingEventExecutorChooserFactory$AutoScalingUtilizationMetric.d.ts'
import type { EventExecutorChooserFactory$EventExecutorChooser } from '../../../../io/netty/util/concurrent/EventExecutorChooserFactory$EventExecutorChooser.d.ts'
import type { EventExecutorChooserFactory$ObservableEventExecutorChooser } from '../../../../io/netty/util/concurrent/EventExecutorChooserFactory$ObservableEventExecutorChooser.d.ts'
import type { AtomicReference } from '../../../../java/util/concurrent/atomic/AtomicReference.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class AutoScalingEventExecutorChooserFactory$AutoScalingEventExecutorChooser extends Object implements EventExecutorChooserFactory$ObservableEventExecutorChooser {
    constructor(null_: AutoScalingEventExecutorChooserFactory$AutoScalingEventExecutorChooser, arg1: (Object | null)[][])
    // private allExecutorsChooser: EventExecutorChooserFactory$EventExecutorChooser;
    // private executors: (Object | null)[][];
    // private state: AtomicReference<AutoScalingEventExecutorChooserFactory$AutoScalingState>;
    // private utilizationMetrics: AutoScalingEventExecutorChooserFactory$AutoScalingUtilizationMetric[];
    activeExecutorCount(): number;
    executorUtilizations(): AutoScalingEventExecutorChooserFactory$AutoScalingUtilizationMetric[];
    next(): (Object | null)[];
    // private tryScaleUpBy(arg0: number): void;
}