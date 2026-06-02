import type { FileVisitResult } from '../../../../../../java/nio/file/FileVisitResult.d.ts'
import type { LinkOption } from '../../../../../../java/nio/file/LinkOption.d.ts'
import type { SimpleFileVisitor } from '../../../../../../java/nio/file/SimpleFileVisitor.d.ts'
import type { BasicFileAttributes } from '../../../../../../java/nio/file/attribute/BasicFileAttributes.d.ts'
import type { ArchiveEntry } from '../../../../../../org/apache/commons/compress/archivers/ArchiveEntry.d.ts'
import type { ArchiveOutputStream } from '../../../../../../org/apache/commons/compress/archivers/ArchiveOutputStream.d.ts'
export class Archiver$ArchiverFileVisitor<O extends ArchiveOutputStream<E>, E extends ArchiveEntry> extends SimpleFileVisitor<Path[]> {
    private constructor(arg0: O, arg1: Path[], arg2: LinkOption[])
    // private directory: Path[];
    // private linkOptions: LinkOption[];
    // private outputStream: O;
    preVisitDirectory(arg0: Path[], arg1: BasicFileAttributes): FileVisitResult;
    visit(arg0: Path[], arg1: BasicFileAttributes, arg2: boolean): FileVisitResult;
    visitFile(arg0: Path[], arg1: BasicFileAttributes): FileVisitResult;
}