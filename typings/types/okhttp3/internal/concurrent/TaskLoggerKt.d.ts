import type { Logger } from '../../../java/util/logging/Logger.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Task } from '../../../okhttp3/internal/concurrent/Task.d.ts'
import type { TaskQueue } from '../../../okhttp3/internal/concurrent/TaskQueue.d.ts'
export class TaskLoggerKt extends Object {
    static formatDuration(ns: number): string;
    static logElapsed<T extends unknown>(self: Logger, task: Task, queue: TaskQueue, block: () => T): T;
    static taskLog(self: Logger, task: Task, queue: TaskQueue, messageBlock: () => string): void;
}