import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ThreadAllocationStat$Summary extends Record {
    constructor(allocationsPerSecondByThread: JavaMap<string, number>)
    // private allocationsPerSecondByThread: JavaMap<string, number>;
    allocationsPerSecondByThread(): JavaMap<string, number>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}