import type { ScheduledExecutorService } from '../../../../../java/util/concurrent/ScheduledExecutorService.d.ts'
import type { TimeUnit } from '../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { TimedSemaphore } from '../../../../../org/apache/commons/lang3/concurrent/TimedSemaphore.d.ts'
export class TimedSemaphore$Builder extends Object implements Supplier<TimedSemaphore> {
    constructor()
    // private limit: number;
    // private period: number;
    // private service: ScheduledExecutorService;
    // private timeUnit: TimeUnit;
    get(): TimedSemaphore;
    setLimit(arg0: number): TimedSemaphore$Builder;
    setPeriod(arg0: number): TimedSemaphore$Builder;
    setService(arg0: ScheduledExecutorService): TimedSemaphore$Builder;
    setTimeUnit(arg0: TimeUnit): TimedSemaphore$Builder;
}