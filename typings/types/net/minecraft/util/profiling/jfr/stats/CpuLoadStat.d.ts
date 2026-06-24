import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { RecordedEvent } from '../../../../../../jdk/jfr/consumer/RecordedEvent.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class CpuLoadStat extends Record {
    static from(paramevent: RecordedEvent): CpuLoadStat;
    constructor(jvm: number, userJvm: number, system: number)
    // private jvm: number;
    // private system: number;
    // private userJvm: number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    jvm(): number;
    system(): number;
    toString(): string;
    userJvm(): number;
}