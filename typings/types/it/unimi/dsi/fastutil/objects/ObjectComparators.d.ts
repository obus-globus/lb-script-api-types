import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ObjectComparators extends Object {
    static NATURAL_COMPARATOR: (param0: Object) => boolean;
    static OPPOSITE_COMPARATOR: (param0: Object) => boolean;
    static asObjectComparator(paramarg0: (param0: Object) => boolean): (param0: Object) => boolean;
    static oppositeComparator(paramarg0: (param0: Object) => boolean): (param0: Object) => boolean;
    private constructor()
}