import type { File } from '../../../../../java/io/File.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { FileVisitResult } from '../../../../../java/nio/file/FileVisitResult.d.ts'
import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { BasicFileAttributes } from '../../../../../java/nio/file/attribute/BasicFileAttributes.d.ts'
import type { AbstractFileFilter } from '../../../../../org/apache/commons/io/filefilter/AbstractFileFilter.d.ts'
export class MagicNumberFileFilter extends AbstractFileFilter implements Serializable {
    static EMPTY_STRING_ARRAY: string[];
    constructor(arg0: number[])
    constructor(arg0: number[], arg1: number)
    constructor(arg0: string)
    constructor(arg0: string, arg1: number)
    // private byteOffset: number;
    // private magicNumbers: number[];
    accept(arg0: File): boolean;
    accept(arg0: File, arg1: string): boolean;
    accept(arg0: Path, arg1: BasicFileAttributes): FileVisitResult;
    toString(): string;
}