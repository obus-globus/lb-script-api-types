import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Counters$Counter } from '../../../../../org/apache/commons/io/file/Counters$Counter.d.ts'
import type { Counters$PathCounters } from '../../../../../org/apache/commons/io/file/Counters$PathCounters.d.ts'
export class Counters extends Object {
    static bigIntegerCounter(): Counters$Counter;
    static bigIntegerPathCounters(): Counters$PathCounters;
    static longCounter(): Counters$Counter;
    static longPathCounters(): Counters$PathCounters;
    static noopCounter(): Counters$Counter;
    static noopPathCounters(): Counters$PathCounters;
    constructor()
}