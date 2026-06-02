import type { File } from '../../java/io/File.d.ts'
import type { FileTreeWalk$WalkState } from '../../kotlin/io/FileTreeWalk$WalkState.d.ts'
export abstract class FileTreeWalk$DirectoryState extends FileTreeWalk$WalkState {
    constructor(rootDir: File)
}