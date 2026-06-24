import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { RecordedEvent } from '../../../../../../jdk/jfr/consumer/RecordedEvent.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class FpsStat extends Record {
    static from(paramevent: RecordedEvent, paramfield: string): FpsStat;
    constructor(fps: number)
    // private fps: number;
    equals(o: Object | null): boolean;
    fps(): number;
    hashCode(): number;
    toString(): string;
}