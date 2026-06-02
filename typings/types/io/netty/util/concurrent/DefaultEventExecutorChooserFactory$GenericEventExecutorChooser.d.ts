import type { EventExecutorChooserFactory$EventExecutorChooser } from '../../../../io/netty/util/concurrent/EventExecutorChooserFactory$EventExecutorChooser.d.ts'
import type { AtomicLong } from '../../../../java/util/concurrent/atomic/AtomicLong.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DefaultEventExecutorChooserFactory$GenericEventExecutorChooser extends Object implements EventExecutorChooserFactory$EventExecutorChooser {
    constructor(arg0: (Object | null)[][])
    // private executors: (Object | null)[][];
    // private idx: AtomicLong;
    next(): (Object | null)[];
}