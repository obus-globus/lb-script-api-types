import type { Date } from '../../../../../../java/util/Date.d.ts'
import type { ScheduledFuture } from '../../../../../../java/util/concurrent/ScheduledFuture.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { CronScheduledFuture } from '../../../../../../org/apache/logging/log4j/core/config/CronScheduledFuture.d.ts'
export class CronScheduledFuture$FutureData extends Object {
    constructor(null_: CronScheduledFuture<V>, future: ScheduledFuture<Object>, runDate: Date)
    // private runDate: Date;
    // private scheduledFuture: ScheduledFuture<Object>;
}