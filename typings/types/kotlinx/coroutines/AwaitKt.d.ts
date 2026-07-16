import type { Object } from '../../java/lang/Object.d.ts'
import type { Deferred } from '../../kotlinx/coroutines/Deferred.d.ts'
import type { Job } from '../../kotlinx/coroutines/Job.d.ts'
export class AwaitKt extends Object {
    static awaitAll<T extends unknown>(self: Deferred<T>[]): T[];
    static awaitAll<T extends unknown>(...deferreds: Deferred<T>[]): T[];
    static joinAll(self: Job[]): void;
    static joinAll(...jobs: Job[]): void;
}