import type { File } from '../../../../../java/io/File.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { FileVisitResult } from '../../../../../java/nio/file/FileVisitResult.d.ts'
import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { BasicFileAttributes } from '../../../../../java/nio/file/attribute/BasicFileAttributes.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AbstractFileFilter } from '../../../../../org/apache/commons/io/filefilter/AbstractFileFilter.d.ts'
import type { ConditionalFileFilter } from '../../../../../org/apache/commons/io/filefilter/ConditionalFileFilter.d.ts'
import type { IOFileFilter } from '../../../../../org/apache/commons/io/filefilter/IOFileFilter.d.ts'
export class OrFileFilter extends AbstractFileFilter implements Serializable, ConditionalFileFilter {
    static EMPTY_STRING_ARRAY: (Object | null)[];
    constructor()
    private constructor(arg0: IOFileFilter[])
    constructor(arg0: IOFileFilter[])
    private constructor(arg0: number)
    constructor(arg0: IOFileFilter[])
    constructor(arg0: IOFileFilter, arg1: IOFileFilter)
    readonly fileFilters: IOFileFilter[];
    accept(arg0: File): boolean;
    accept(arg0: File, arg1: string): boolean;
    accept(arg0: Path[], arg1: BasicFileAttributes): FileVisitResult;
    addFileFilter(arg0: IOFileFilter[]): void;
    addFileFilter(arg0: IOFileFilter): void;
    getFileFilters(): IOFileFilter[];
    removeFileFilter(arg0: IOFileFilter): boolean;
    setFileFilters(arg0: IOFileFilter[]): void;
    toString(): string;
}