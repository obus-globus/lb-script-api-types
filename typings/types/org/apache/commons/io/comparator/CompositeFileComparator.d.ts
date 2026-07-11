import type { File } from '../../../../../java/io/File.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AbstractFileComparator } from '../../../../../org/apache/commons/io/comparator/AbstractFileComparator.d.ts'
export class CompositeFileComparator extends AbstractFileComparator implements Serializable {
    constructor(...arg0: (param0: Object) => boolean[])
    constructor(arg0: (param0: Object) => boolean[])
    // private delegates: (param0: Object) => boolean[];
    compare(arg0: File, arg1: File): number;
    // private emptyArray(): (param0: Object) => boolean[];
    toString(): string;
}