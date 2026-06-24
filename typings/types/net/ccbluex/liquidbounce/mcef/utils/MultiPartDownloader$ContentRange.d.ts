import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class MultiPartDownloader$ContentRange extends Record {
    private constructor(start: number, end: number, total: number)
    // private end: number;
    // private start: number;
    // private total: number;
    end(): number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    start(): number;
    toString(): string;
    total(): number;
}