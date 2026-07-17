import type { PolyglotIsolateGuestSupport$TearDownHook } from '../../../../../com/oracle/truffle/polyglot/isolate/PolyglotIsolateGuestSupport$TearDownHook.d.ts'
import type { WeakReference } from '../../../../../java/lang/ref/WeakReference.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../java/lang/Comparable.d.ts'
export class PolyglotIsolateGuestSupport$TearDownAction extends WeakReference<() => void> implements Comparable<PolyglotIsolateGuestSupport$TearDownAction> {
    static reachabilityFence(paramarg0: Object): void;
    constructor(priority: number, hook: () => void)
    // private priority: number;
    compareTo(o: PolyglotIsolateGuestSupport$TearDownAction): number;
    perform(): void;
}