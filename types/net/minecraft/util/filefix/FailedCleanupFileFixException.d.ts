import type { Exception } from '../../../../java/lang/Exception.d.ts'
import type { CrashReport } from '../../../../net/minecraft/CrashReport.d.ts'
import type { FileFixException } from '../../../../net/minecraft/util/filefix/FileFixException.d.ts'
import type { FileSystemCapabilities } from '../../../../net/minecraft/util/filefix/FileSystemCapabilities.d.ts'
export class FailedCleanupFileFixException extends FileFixException {
    constructor(cause: Exception, newWorldFolderName: string, fileSystemCapabilities: FileSystemCapabilities)
    // private newWorldFolderName: string;
    createCrashReport(): CrashReport;
    newWorldFolderName(): string;
}