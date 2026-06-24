import type { File } from '../../java/io/File.d.ts'
import type { AbstractIterator } from '../../kotlin/collections/AbstractIterator.d.ts'
import type { FileTreeWalk } from '../../kotlin/io/FileTreeWalk.d.ts'
import type { FileTreeWalk$DirectoryState } from '../../kotlin/io/FileTreeWalk$DirectoryState.d.ts'
import type { FileTreeWalk$WalkState } from '../../kotlin/io/FileTreeWalk$WalkState.d.ts'
export class FileTreeWalk$FileTreeWalkIterator extends AbstractIterator<File> {
    constructor(null_: FileTreeWalk)
    // private state: FileTreeWalk$WalkState[];
    protected computeNext(): void;
    // private directoryState(root: File): FileTreeWalk$DirectoryState;
    // private gotoNext(): File | null;
}