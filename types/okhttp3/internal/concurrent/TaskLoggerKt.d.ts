import type { Logger } from '../../../java/util/logging/Logger.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Function0 } from '../../../kotlin/jvm/functions/Function0.d.ts'
import type { Task } from '../../../okhttp3/internal/concurrent/Task.d.ts'
import type { TaskQueue } from '../../../okhttp3/internal/concurrent/TaskQueue.d.ts'
export class TaskLoggerKt extends Object {
    static formatDuration(paramarg0: number): string;
    static logElapsed(paramarg0: Logger, paramarg1: Task, paramarg2: TaskQueue, paramarg3: Function0<Object>): Object | null;
    static taskLog(paramarg0: Logger, paramarg1: Task, paramarg2: TaskQueue, paramarg3: Function0<string>): void;
}