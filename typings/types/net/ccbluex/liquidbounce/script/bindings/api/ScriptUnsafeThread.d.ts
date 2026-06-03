import type { Thread } from '../../../../../../java/lang/Thread.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ScriptUnsafeThread extends Object {
    static INSTANCE: ScriptUnsafeThread;
    run(callback: () => void): Thread;
}