import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class Continuation$Pinned extends Enum<Continuation$Pinned> {
    static CRITICAL_SECTION: Continuation$Pinned;
    static EXCEPTION: Continuation$Pinned;
    static MONITOR: Continuation$Pinned;
    static NATIVE: Continuation$Pinned;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): Continuation$Pinned;
    static values(): Continuation$Pinned[];
    private constructor()
    name(): "NATIVE" | "MONITOR" | "CRITICAL_SECTION" | "EXCEPTION";
}