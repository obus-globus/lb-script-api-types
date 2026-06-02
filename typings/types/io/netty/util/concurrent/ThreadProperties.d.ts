import type { StackTraceElement } from '../../../../java/lang/StackTraceElement.d.ts'
import type { Thread$State } from '../../../../java/lang/Thread$State.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ThreadProperties extends Object{
    id(): number;
    isAlive(): boolean;
    isDaemon(): boolean;
    isInterrupted(): boolean;
    name(): string;
    priority(): number;
    stackTrace(): StackTraceElement[];
    state(): Thread$State;
}