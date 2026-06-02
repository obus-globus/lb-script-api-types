import type { TimeUnit } from '../java/util/concurrent/TimeUnit.d.ts'
import type { Condition } from '../java/util/concurrent/locks/Condition.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { Timeout } from '../okio/Timeout.d.ts'
import type { Timeout$Companion } from '../okio/Timeout$Companion.d.ts'
export class ForwardingTimeout extends Timeout {
    static Companion: Timeout$Companion;
    static NONE: Timeout;
    constructor(delegate: Timeout)
    delegate: Timeout;
    awaitSignal(condition: Condition): void;
    cancel(): void;
    clearDeadline(): Timeout;
    clearTimeout(): Timeout;
    deadlineNanoTime(): number;
    deadlineNanoTime(deadlineNanoTime: number): Timeout;
    hasDeadline(): boolean;
    setDelegate(delegate: Timeout): ForwardingTimeout;
    throwIfReached(): void;
    timeout(timeout: number, unit: TimeUnit): Timeout;
    timeoutNanos(): number;
    waitUntilNotified(monitor: Object): void;
}