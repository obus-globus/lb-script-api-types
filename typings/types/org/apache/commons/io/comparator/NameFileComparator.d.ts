import type { File } from '../../../../../java/io/File.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { IOCase } from '../../../../../org/apache/commons/io/IOCase.d.ts'
import type { AbstractFileComparator } from '../../../../../org/apache/commons/io/comparator/AbstractFileComparator.d.ts'
export class NameFileComparator extends AbstractFileComparator implements Serializable {
    static NAME_COMPARATOR: (param0: File, param1: File) => number;
    static NAME_INSENSITIVE_COMPARATOR: (param0: File, param1: File) => number;
    static NAME_INSENSITIVE_REVERSE: (param0: File, param1: File) => number;
    static NAME_REVERSE: (param0: File, param1: File) => number;
    static NAME_SYSTEM_COMPARATOR: (param0: File, param1: File) => number;
    static NAME_SYSTEM_REVERSE: (param0: File, param1: File) => number;
    constructor()
    constructor(arg0: IOCase)
    // private ioCase: IOCase;
    compare(arg0: File, arg1: File): number;
    toString(): string;
}