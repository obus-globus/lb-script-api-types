import type { File } from '../../../../../java/io/File.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AbstractFileComparator } from '../../../../../org/apache/commons/io/comparator/AbstractFileComparator.d.ts'
export class LastModifiedFileComparator extends AbstractFileComparator implements Serializable {
    static LASTMODIFIED_COMPARATOR: (param0: Object) => boolean;
    static LASTMODIFIED_REVERSE: (param0: Object) => boolean;
    constructor()
    compare(arg0: File, arg1: File): number;
}