import type { Thread } from '../../../../../../java/lang/Thread.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
/**
 * Runs a callback on a new background thread (the `UnsafeThread` global). Unsafe: the callback runs off the client thread, so touching game state directly is not thread-safe.
 */
export class ScriptUnsafeThread extends Object {
    static INSTANCE: ScriptUnsafeThread;
    /**
     * Runs the callback on a new thread and returns that thread.
     *
     * @param callback the callback to run off-thread
     */
    run(callback: () => void): Thread;
}