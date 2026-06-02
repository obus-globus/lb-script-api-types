import type { Class } from '../../../java/lang/Class.d.ts'
import type { Continuation$Pinned } from '../../../jdk/internal/vm/Continuation$Pinned.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class Continuation$PreemptStatus extends Enum<Continuation$PreemptStatus> {
    static PERM_FAIL_NOT_MOUNTED: Continuation$PreemptStatus;
    static PERM_FAIL_UNSUPPORTED: Continuation$PreemptStatus;
    static PERM_FAIL_YIELDING: Continuation$PreemptStatus;
    static SUCCESS: Continuation$PreemptStatus;
    static TRANSIENT_FAIL_PINNED_CRITICAL_SECTION: Continuation$PreemptStatus;
    static TRANSIENT_FAIL_PINNED_MONITOR: Continuation$PreemptStatus;
    static TRANSIENT_FAIL_PINNED_NATIVE: Continuation$PreemptStatus;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Continuation$PreemptStatus;
    static values(): (Object | null)[];
    private constructor(arg2: Continuation$Pinned)
    // private pinned: Continuation$Pinned;
    pinned(): Continuation$Pinned;
    name(): "SUCCESS" | "PERM_FAIL_UNSUPPORTED" | "PERM_FAIL_YIELDING" | "PERM_FAIL_NOT_MOUNTED" | "TRANSIENT_FAIL_PINNED_CRITICAL_SECTION" | "TRANSIENT_FAIL_PINNED_NATIVE" | "TRANSIENT_FAIL_PINNED_MONITOR";
}