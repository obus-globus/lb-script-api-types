import type { BooleanComparator } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanComparator.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class BooleanComparators$NaturalImplicitComparator extends Object implements BooleanComparator, Serializable {
    constructor()
    compare(arg0: boolean, arg1: boolean): number;
    // private readResolve(): Object;
    reversed(): (param0: boolean, param1: boolean) => number;
    thenComparing(arg0: (param0: boolean, param1: boolean) => number): (param0: boolean, param1: boolean) => number;
}