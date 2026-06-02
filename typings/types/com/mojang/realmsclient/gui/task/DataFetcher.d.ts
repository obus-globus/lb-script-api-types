import type { DataFetcher$Subscription } from '../../../../../com/mojang/realmsclient/gui/task/DataFetcher$Subscription.d.ts'
import type { DataFetcher$Task } from '../../../../../com/mojang/realmsclient/gui/task/DataFetcher$Task.d.ts'
import type { RepeatedDelayStrategy } from '../../../../../com/mojang/realmsclient/gui/task/RepeatedDelayStrategy.d.ts'
import type { Duration } from '../../../../../java/time/Duration.d.ts'
import type { Callable } from '../../../../../java/util/concurrent/Callable.d.ts'
import type { Executor } from '../../../../../java/util/concurrent/Executor.d.ts'
import type { TimeUnit } from '../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { TimeSource } from '../../../../../net/minecraft/util/TimeSource.d.ts'
export class DataFetcher extends Object {
    constructor(executor: Executor, resolution: TimeUnit, timeSource: (param0: TimeUnit) => kotlin.Long)
    // private executor: Executor;
    // private resolution: TimeUnit;
    // private timeSource: (param0: TimeUnit) => kotlin.Long;
    createSubscription(): DataFetcher$Subscription;
    createTask(id: string, updater: () => T, period: Duration, repeatStrategy: RepeatedDelayStrategy): DataFetcher$Task<T>;
}