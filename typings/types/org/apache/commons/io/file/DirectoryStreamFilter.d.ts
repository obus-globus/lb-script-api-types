import type { DirectoryStream$Filter } from '../../../../../java/nio/file/DirectoryStream$Filter.d.ts'
import type { FileVisitResult } from '../../../../../java/nio/file/FileVisitResult.d.ts'
import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { BasicFileAttributes } from '../../../../../java/nio/file/attribute/BasicFileAttributes.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PathFilter } from '../../../../../org/apache/commons/io/file/PathFilter.d.ts'
export class DirectoryStreamFilter extends Object implements DirectoryStream$Filter<Path[]> {
    constructor(arg0: (param0: Path[][], param1: BasicFileAttributes) => FileVisitResult)
    readonly pathFilter: (param0: Path[][], param1: BasicFileAttributes) => FileVisitResult;
    accept(arg0: Path[]): boolean;
    getPathFilter(): (param0: Path[][], param1: BasicFileAttributes) => FileVisitResult;
}