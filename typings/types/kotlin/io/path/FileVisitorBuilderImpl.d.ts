import type { IOException } from '../../../java/io/IOException.d.ts'
import type { FileVisitResult } from '../../../java/nio/file/FileVisitResult.d.ts'
import type { FileVisitor } from '../../../java/nio/file/FileVisitor.d.ts'
import type { BasicFileAttributes } from '../../../java/nio/file/attribute/BasicFileAttributes.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Function2 } from '../../../kotlin/jvm/functions/Function2.d.ts'
import type { FileVisitorBuilder } from '../../../kotlin/io/path/FileVisitorBuilder.d.ts'
export class FileVisitorBuilderImpl extends Object implements FileVisitorBuilder {
    constructor()
    // private isBuilt: boolean;
    // private onPostVisitDirectory: (param0: Path[][], param1: IOException | null) => FileVisitResult;
    // private onPreVisitDirectory: (param0: Path[][], param1: BasicFileAttributes) => FileVisitResult;
    // private onVisitFile: (param0: Path[][], param1: BasicFileAttributes) => FileVisitResult;
    // private onVisitFileFailed: (param0: Path[][], param1: IOException) => FileVisitResult;
    build(): FileVisitor<Path[][]>;
    // private checkIsNotBuilt(): void;
    // private checkNotDefined(function_: Object | null, name: string): void;
    onPostVisitDirectory(function_: Function2<Path[][], IOException, FileVisitResult>): void;
    onPreVisitDirectory(function_: Function2<Path[][], BasicFileAttributes, FileVisitResult>): void;
    onVisitFile(function_: Function2<Path[][], BasicFileAttributes, FileVisitResult>): void;
    onVisitFileFailed(function_: Function2<Path[][], IOException, FileVisitResult>): void;
}