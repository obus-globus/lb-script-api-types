import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Range } from '../../../../com/google/common/collect/Range.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
export class ImmutableRangeMap$SerializedForm<K extends Comparable<Object>, V extends unknown> extends Object implements Serializable {
    constructor(mapOfRanges: JavaMap<Range<K>, V>)
    // private mapOfRanges: JavaMap<Range<K>, V>;
    createRangeMap(): Object;
    readResolve(): Object;
}