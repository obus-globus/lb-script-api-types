import type { FileVisitResult } from '../../../java/nio/file/FileVisitResult.d.ts'
import type { SimpleFileVisitor } from '../../../java/nio/file/SimpleFileVisitor.d.ts'
import type { BasicFileAttributes } from '../../../java/nio/file/attribute/BasicFileAttributes.d.ts'
import type { PathNode } from '../../../kotlin/io/path/PathNode.d.ts'
export class DirectoryEntriesReader extends SimpleFileVisitor<Path[][]> {
    constructor(followLinks: boolean)
    // private directoryNode: PathNode | null;
    // private entries: PathNode[];
    readonly followLinks: boolean;
    preVisitDirectory(dir: Path[][], attrs: BasicFileAttributes): FileVisitResult;
    readEntries(directoryNode: PathNode): PathNode[];
    visitFile(file: Path[][], attrs: BasicFileAttributes): FileVisitResult;
}