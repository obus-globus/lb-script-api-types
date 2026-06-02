import type { AutoScalingEventExecutorChooserFactory$AutoScalingUtilizationMetric } from '../../../../io/netty/util/concurrent/AutoScalingEventExecutorChooserFactory$AutoScalingUtilizationMetric.d.ts'
import type { EventExecutorChooserFactory$EventExecutorChooser } from '../../../../io/netty/util/concurrent/EventExecutorChooserFactory$EventExecutorChooser.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface EventExecutorChooserFactory$ObservableEventExecutorChooser extends EventExecutorChooserFactory$EventExecutorChooser, Object{
    activeExecutorCount(): number;
    executorUtilizations(): AutoScalingEventExecutorChooserFactory$AutoScalingUtilizationMetric[];
}