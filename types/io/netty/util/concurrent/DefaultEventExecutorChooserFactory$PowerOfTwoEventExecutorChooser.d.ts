import type { EventExecutorChooserFactory$EventExecutorChooser } from '../../../../io/netty/util/concurrent/EventExecutorChooserFactory$EventExecutorChooser.d.ts'
import type { AtomicInteger } from '../../../../java/util/concurrent/atomic/AtomicInteger.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DefaultEventExecutorChooserFactory$PowerOfTwoEventExecutorChooser extends Object implements EventExecutorChooserFactory$EventExecutorChooser {
    constructor(arg0: (Object | null)[][])
    // private executors: (Object | null)[][];
    // private idx: AtomicInteger;
    next(): (Object | null)[];
}