import type { File } from '../../../../../java/io/File.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { AbstractFileComparator } from '../../../../../org/apache/commons/io/comparator/AbstractFileComparator.d.ts'
export class LastModifiedFileComparator extends AbstractFileComparator implements Serializable {
    static LASTMODIFIED_COMPARATOR: (param0: File) => kotlin.Boolean;
    static LASTMODIFIED_REVERSE: (param0: File) => kotlin.Boolean;
    constructor()
    compare(arg0: File, arg1: File): number;
}