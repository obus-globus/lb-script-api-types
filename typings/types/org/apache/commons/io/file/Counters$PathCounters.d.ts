import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Counters$Counter } from '../../../../../org/apache/commons/io/file/Counters$Counter.d.ts'
export interface Counters$PathCounters extends Object{
    getByteCounter(): Counters$Counter;
    getDirectoryCounter(): Counters$Counter;
    getFileCounter(): Counters$Counter;
    reset(): void;
}