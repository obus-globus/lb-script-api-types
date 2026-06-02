import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ThreadAllocationStat$Summary extends Record {
    constructor(allocationsPerSecondByThread: { [key: string]: number })
    // private allocationsPerSecondByThread: { [key: string]: number };
    allocationsPerSecondByThread(): { [key: string]: number };
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}