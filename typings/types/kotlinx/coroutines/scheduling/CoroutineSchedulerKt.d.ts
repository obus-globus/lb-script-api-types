import type { Thread } from '../../../java/lang/Thread.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class CoroutineSchedulerKt extends Object {
    static isSchedulerWorker(thread: Thread): boolean;
    static mayNotBlock(thread: Thread): boolean;
}