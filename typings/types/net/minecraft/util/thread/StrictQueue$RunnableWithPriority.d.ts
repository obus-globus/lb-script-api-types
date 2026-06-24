import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class StrictQueue$RunnableWithPriority extends Record implements Runnable {
    constructor(priority: number, task: () => void)
    // private priority: number;
    // private task: () => void;
    equals(o: Object | null): boolean;
    hashCode(): number;
    priority(): number;
    run(): void;
    task(): () => void;
    toString(): string;
}