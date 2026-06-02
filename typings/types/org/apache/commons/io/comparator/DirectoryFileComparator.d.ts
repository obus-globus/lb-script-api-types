import type { File } from '../../../../../java/io/File.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { AbstractFileComparator } from '../../../../../org/apache/commons/io/comparator/AbstractFileComparator.d.ts'
export class DirectoryFileComparator extends AbstractFileComparator implements Serializable {
    static DIRECTORY_COMPARATOR: (param0: File) => kotlin.Boolean;
    static DIRECTORY_REVERSE: (param0: File) => kotlin.Boolean;
    constructor()
    compare(arg0: File, arg1: File): number;
    // private getType(arg0: File): number;
}