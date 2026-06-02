import type { File } from '../../../../../java/io/File.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { FileVisitResult } from '../../../../../java/nio/file/FileVisitResult.d.ts'
import type { BasicFileAttributes } from '../../../../../java/nio/file/attribute/BasicFileAttributes.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Pattern } from '../../../../../java/util/regex/Pattern.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { IOCase } from '../../../../../org/apache/commons/io/IOCase.d.ts'
import type { AbstractFileFilter } from '../../../../../org/apache/commons/io/filefilter/AbstractFileFilter.d.ts'
export class RegexFileFilter extends AbstractFileFilter implements Serializable {
    static EMPTY_STRING_ARRAY: (Object | null)[];
    constructor(arg0: Pattern)
    constructor(arg0: Pattern, arg1: (param0: Path[]) => string)
    constructor(arg0: string)
    constructor(arg0: string, arg1: number)
    constructor(arg0: string, arg1: IOCase)
    // private pathToString: (param0: Path[]) => string;
    // private pattern: Pattern;
    accept(arg0: File, arg1: string): boolean;
    accept(arg0: Path[], arg1: BasicFileAttributes): FileVisitResult;
    toString(): string;
}