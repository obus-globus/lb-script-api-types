import type { Runnable } from '../../../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ConfigurationScheduler } from '../../../../../../org/apache/logging/log4j/core/config/ConfigurationScheduler.d.ts'
import type { CronScheduledFuture } from '../../../../../../org/apache/logging/log4j/core/config/CronScheduledFuture.d.ts'
import type { CronExpression } from '../../../../../../org/apache/logging/log4j/core/util/CronExpression.d.ts'
export class ConfigurationScheduler$CronRunnable extends Object implements Runnable {
    constructor(null_: ConfigurationScheduler, runnable: () => void, cronExpression: CronExpression)
    // private cronExpression: CronExpression;
    // private runnable: () => void;
    readonly scheduledFuture: CronScheduledFuture<Object>;
    run(): void;
    setScheduledFuture(future: CronScheduledFuture<Object>): void;
    toString(): string;
}