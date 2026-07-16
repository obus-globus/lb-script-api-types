import type { Collector } from '../../../../../java/util/stream/Collector.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ObjectBigArrayBigList<K extends unknown> {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static DEFAULT_INITIAL_CAPACITY: number;
    static of<K extends unknown>(): K[];
    static of<K extends unknown>(...paramarg0: K[]): K[];
    static toBigList<K extends unknown>(): Collector<K, Object, K[]>;
    static toBigListWithExpectedSize<K extends unknown>(paramarg0: number): Collector<K, Object, K[]>;
    static wrap<K extends unknown>(paramarg0: K[][]): K[];
    static wrap<K extends unknown>(paramarg0: K[][], paramarg1: number): K[];
}