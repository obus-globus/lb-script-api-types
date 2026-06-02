import type { Thread } from '../../../../../../java/lang/Thread.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Function0 } from '../../../../../../kotlin/jvm/functions/Function0.d.ts'
export class ScriptUnsafeThread extends Object {
    static INSTANCE: ScriptUnsafeThread;
    run(callback: Function0<void>): Thread;
}