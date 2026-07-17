import type { SandboxThreadContext } from '../../../../com/oracle/truffle/sandbox/SandboxThreadContext.d.ts'
import type { Thread } from '../../../../java/lang/Thread.d.ts'
import type { ReferenceQueue } from '../../../../java/lang/ref/ReferenceQueue.d.ts'
import type { WeakReference } from '../../../../java/lang/ref/WeakReference.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class SandboxThreadContext$ThreadReference extends WeakReference<Thread> {
    static reachabilityFence(paramarg0: Object): void;
    constructor(threadContext: SandboxThreadContext, referent: Thread, q: ReferenceQueue<Thread>)
    // private threadContext: SandboxThreadContext;
}