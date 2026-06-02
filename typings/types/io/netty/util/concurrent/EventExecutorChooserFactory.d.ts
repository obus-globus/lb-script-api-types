import type { EventExecutorChooserFactory$EventExecutorChooser } from '../../../../io/netty/util/concurrent/EventExecutorChooserFactory$EventExecutorChooser.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface EventExecutorChooserFactory extends Object{
    newChooser(arg0: (Object | null)[][]): EventExecutorChooserFactory$EventExecutorChooser;
}