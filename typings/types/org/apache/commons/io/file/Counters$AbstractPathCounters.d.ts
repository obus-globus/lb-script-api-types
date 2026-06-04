import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Counters$Counter } from '../../../../../org/apache/commons/io/file/Counters$Counter.d.ts'
import type { Counters$PathCounters } from '../../../../../org/apache/commons/io/file/Counters$PathCounters.d.ts'
export class Counters$AbstractPathCounters extends Object implements Counters$PathCounters {
    constructor(arg0: Counters$Counter, arg1: Counters$Counter, arg2: Counters$Counter)
    readonly byteCounter: Counters$Counter;
    readonly directoryCounter: Counters$Counter;
    readonly fileCounter: Counters$Counter;
    equals(arg0: Object | null): boolean;
    getByteCounter(): Counters$Counter;
    getDirectoryCounter(): Counters$Counter;
    getFileCounter(): Counters$Counter;
    hashCode(): number;
    reset(): void;
    toString(): string;
}