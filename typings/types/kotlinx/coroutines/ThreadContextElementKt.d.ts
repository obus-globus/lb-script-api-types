import type { ThreadLocal } from '../../java/lang/ThreadLocal.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { ThreadContextElement } from '../../kotlinx/coroutines/ThreadContextElement.d.ts'
export class ThreadContextElementKt extends Object {
    static asContextElement<T extends unknown>(self: ThreadLocal<T>, value: T): ThreadContextElement<T>;
    static ensurePresent(self: ThreadLocal<Object>): void;
    static isPresent(self: ThreadLocal<Object>): boolean;
}