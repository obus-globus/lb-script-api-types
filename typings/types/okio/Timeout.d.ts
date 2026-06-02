import type { TimeUnit } from '../java/util/concurrent/TimeUnit.d.ts'
import type { Condition } from '../java/util/concurrent/locks/Condition.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { Function0 } from '../kotlin/jvm/functions/Function0.d.ts'
import type { Timeout$Companion } from '../okio/Timeout$Companion.d.ts'
export class Timeout extends Object {
    static Companion: Timeout$Companion;
    static NONE: Timeout;
    constructor()
    // private cancelMark: Object | null;
    // private deadlineNanoTime: number;
    // private hasDeadline: boolean;
    // private timeoutNanos: number;
    awaitSignal(condition: Condition): void;
    cancel(): void;
    clearDeadline(): Timeout;
    clearTimeout(): Timeout;
    deadline(duration: number, unit: TimeUnit): Timeout;
    deadlineNanoTime(): number;
    deadlineNanoTime(deadlineNanoTime: number): Timeout;
    hasDeadline(): boolean;
    intersectWith<T extends Object | number | string | boolean>(other: Timeout, block: Function0<T>): T;
    throwIfReached(): void;
    timeout(timeout: number, unit: TimeUnit): Timeout;
    timeoutNanos(): number;
    waitUntilNotified(monitor: Object): void;
}