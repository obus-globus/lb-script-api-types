import type { File } from '../../../../../java/io/File.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { AbstractFileComparator } from '../../../../../org/apache/commons/io/comparator/AbstractFileComparator.d.ts'
export class DefaultFileComparator extends AbstractFileComparator implements Serializable {
    static DEFAULT_COMPARATOR: (param0: File, param1: File) => number;
    static DEFAULT_REVERSE: (param0: File, param1: File) => number;
    constructor()
    compare(arg0: File, arg1: File): number;
}