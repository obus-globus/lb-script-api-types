import type { File } from '../../../../../java/io/File.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AbstractFileComparator } from '../../../../../org/apache/commons/io/comparator/AbstractFileComparator.d.ts'
export class SizeFileComparator extends AbstractFileComparator implements Serializable {
    static SIZE_COMPARATOR: (param0: Object) => boolean;
    static SIZE_REVERSE: (param0: Object) => boolean;
    static SIZE_SUMDIR_COMPARATOR: (param0: Object) => boolean;
    static SIZE_SUMDIR_REVERSE: (param0: Object) => boolean;
    constructor()
    constructor(arg0: boolean)
    // private sumDirectoryContents: boolean;
    compare(arg0: File, arg1: File): number;
    toString(): string;
}