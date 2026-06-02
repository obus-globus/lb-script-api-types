import type { File } from '../../../../java/io/File.d.ts'
import type { FileDeleteStrategy } from '../../../../org/apache/commons/io/FileDeleteStrategy.d.ts'
export class FileDeleteStrategy$ForceFileDeleteStrategy extends FileDeleteStrategy {
    static FORCE: FileDeleteStrategy;
    static NORMAL: FileDeleteStrategy;
    constructor()
    doDelete(arg0: File): boolean;
}