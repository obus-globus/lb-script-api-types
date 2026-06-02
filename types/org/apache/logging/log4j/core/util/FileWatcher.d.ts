import type { File } from '../../../../../../java/io/File.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface FileWatcher extends Object{
    fileModified(file: File): void;
}