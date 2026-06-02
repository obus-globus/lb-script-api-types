import type { Object } from '../../../java/lang/Object.d.ts'
import type { TaskQueue } from '../../../okhttp3/internal/concurrent/TaskQueue.d.ts'
export abstract class Task extends Object {
    constructor(name: string, cancelable: boolean)
    readonly cancelable: boolean;
    readonly name: string;
    // private nextExecuteNanoTime: number;
    /*not mapped: */ getNextExecuteNanoTime$okhttp(): number;
    // private queue: TaskQueue | null;
    /*not mapped: */ getQueue$okhttp(): TaskQueue | null;
    initQueue(queue: TaskQueue): void;
    runOnce(): number;
    toString(): string;
}