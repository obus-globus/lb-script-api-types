import type { File } from '../../../../../java/io/File.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { FileVisitResult } from '../../../../../java/nio/file/FileVisitResult.d.ts'
import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { BasicFileAttributes } from '../../../../../java/nio/file/attribute/BasicFileAttributes.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { IOCase } from '../../../../../org/apache/commons/io/IOCase.d.ts'
import type { AbstractFileFilter } from '../../../../../org/apache/commons/io/filefilter/AbstractFileFilter.d.ts'
export class PrefixFileFilter extends AbstractFileFilter implements Serializable {
    static EMPTY_STRING_ARRAY: (Object | null)[];
    constructor(...arg0: string[])
    constructor(arg0: string[], arg1: IOCase)
    constructor(arg0: string)
    constructor(arg0: string, arg1: IOCase)
    constructor(arg0: string[])
    constructor(arg0: string[], arg1: IOCase)
    // private isCase: IOCase;
    // private prefixes: string[];
    accept(arg0: File): boolean;
    accept(arg0: File, arg1: string): boolean;
    accept(arg0: Path[], arg1: BasicFileAttributes): FileVisitResult;
    // private accept(arg0: string): boolean;
    toString(): string;
}