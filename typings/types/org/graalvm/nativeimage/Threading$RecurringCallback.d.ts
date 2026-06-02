import type { Object } from '../../../java/lang/Object.d.ts'
import type { Threading$RecurringCallbackAccess } from '../../../org/graalvm/nativeimage/Threading$RecurringCallbackAccess.d.ts'
export interface Threading$RecurringCallback extends Object{
    run(access: Threading$RecurringCallbackAccess): void;
}