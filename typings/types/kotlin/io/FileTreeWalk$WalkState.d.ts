import type { File } from '../../java/io/File.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export abstract class FileTreeWalk$WalkState extends Object {
    constructor(root: File)
    readonly root: File;
    step(): File | null;
}