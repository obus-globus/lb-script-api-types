import type { CharComparator } from '../../../../../it/unimi/dsi/fastutil/chars/CharComparator.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CharComparators$OppositeComparator extends Object implements CharComparator, Serializable {
    constructor(arg0: (param0: string, param1: string) => number)
    // private comparator: (param0: string, param1: string) => number;
    compare(arg0: string, arg1: string): number;
    reversed(): (param0: string, param1: string) => number;
    thenComparing(arg0: (param0: string, param1: string) => number): (param0: string, param1: string) => number;
}