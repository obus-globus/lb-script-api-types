import type { Record } from '../../../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
export class IntaveHeavyAntiBotMode$SuspectInfo extends Record {
    constructor(latency: number, timestamp: number)
    // private latency: number;
    /*not mapped: */ latency(): number;
    // private timestamp: number;
    /*not mapped: */ timestamp(): number;
    component1(): number;
    component2(): number;
    copy(latency: number, timestamp: number): IntaveHeavyAntiBotMode$SuspectInfo;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}