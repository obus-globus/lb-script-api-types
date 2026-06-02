import type { Range } from '../../../../com/google/common/collect/Range.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
export class ImmutableRangeMap$SerializedForm<K extends Comparable<Object>, V extends Object | number | string | boolean> extends Object implements Serializable {
    constructor(mapOfRanges: Map<Range<K>, V>)
    // private mapOfRanges: Map<Range<K>, V>;
    createRangeMap(): Object;
    readResolve(): Object;
}