import type { EventExecutorChooserFactory } from '../../../../io/netty/util/concurrent/EventExecutorChooserFactory.d.ts'
import type { EventExecutorChooserFactory$EventExecutorChooser } from '../../../../io/netty/util/concurrent/EventExecutorChooserFactory$EventExecutorChooser.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DefaultEventExecutorChooserFactory extends Object implements EventExecutorChooserFactory {
    static INSTANCE: DefaultEventExecutorChooserFactory;
    private constructor()
    newChooser(arg0: (Object | null)[][]): EventExecutorChooserFactory$EventExecutorChooser;
}