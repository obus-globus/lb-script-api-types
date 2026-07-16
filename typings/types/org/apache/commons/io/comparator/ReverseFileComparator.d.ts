import type { File } from '../../../../../java/io/File.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { AbstractFileComparator } from '../../../../../org/apache/commons/io/comparator/AbstractFileComparator.d.ts'
export class ReverseFileComparator extends AbstractFileComparator implements Serializable {
    constructor(arg0: (param0: File, param1: File) => number)
    // private delegate: (param0: File, param1: File) => number;
    compare(arg0: File, arg1: File): number;
    toString(): string;
}