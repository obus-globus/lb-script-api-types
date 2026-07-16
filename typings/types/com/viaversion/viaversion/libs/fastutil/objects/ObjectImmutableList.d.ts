import type { Collector } from '../../../../../../java/util/stream/Collector.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ObjectImmutableList<K extends unknown> {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static of<K extends unknown>(): K[];
    static of<K extends unknown>(...paramarg0: K[]): K[];
    static toList<K extends unknown>(): Collector<K, Object, K[]>;
    static toListWithExpectedSize<K extends unknown>(paramarg0: number): Collector<K, Object, K[]>;
}