import type { File } from '../../../../../java/io/File.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { IOCase } from '../../../../../org/apache/commons/io/IOCase.d.ts'
import type { AbstractFileComparator } from '../../../../../org/apache/commons/io/comparator/AbstractFileComparator.d.ts'
export class PathFileComparator extends AbstractFileComparator implements Serializable {
    static PATH_COMPARATOR: (param0: File, param1: File) => number;
    static PATH_INSENSITIVE_COMPARATOR: (param0: File, param1: File) => number;
    static PATH_INSENSITIVE_REVERSE: (param0: File, param1: File) => number;
    static PATH_REVERSE: (param0: File, param1: File) => number;
    static PATH_SYSTEM_COMPARATOR: (param0: File, param1: File) => number;
    static PATH_SYSTEM_REVERSE: (param0: File, param1: File) => number;
    constructor()
    constructor(arg0: IOCase)
    // private ioCase: IOCase;
    compare(arg0: File, arg1: File): number;
    toString(): string;
}