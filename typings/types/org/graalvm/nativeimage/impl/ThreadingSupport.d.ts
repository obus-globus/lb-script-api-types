import type { TimeUnit } from '../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Threading$RecurringCallback } from '../../../../org/graalvm/nativeimage/Threading$RecurringCallback.d.ts'
import type { Threading$RecurringCallbackAccess } from '../../../../org/graalvm/nativeimage/Threading$RecurringCallbackAccess.d.ts'
export interface ThreadingSupport extends Object {
    registerRecurringCallback(interval: number, unit: TimeUnit, callback: (param0: Threading$RecurringCallbackAccess) => void): void;
}