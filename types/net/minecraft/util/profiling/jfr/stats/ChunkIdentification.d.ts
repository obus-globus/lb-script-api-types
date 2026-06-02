import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { RecordedEvent } from '../../../../../../jdk/jfr/consumer/RecordedEvent.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ChunkIdentification extends Record {
    static from(paramevent: RecordedEvent): ChunkIdentification;
    // private dimension: string;
    // private level: string;
    // private x: number;
    // private z: number;
    dimension(): string;
    equals(o: Object | null): boolean;
    hashCode(): number;
    level(): string;
    toString(): string;
    x(): number;
    z(): number;
}