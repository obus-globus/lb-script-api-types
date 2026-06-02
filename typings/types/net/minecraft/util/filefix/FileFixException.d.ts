import type { Exception } from '../../../../java/lang/Exception.d.ts'
import type { RuntimeException } from '../../../../java/lang/RuntimeException.d.ts'
import type { CrashReport } from '../../../../net/minecraft/CrashReport.d.ts'
import type { ReportedException } from '../../../../net/minecraft/ReportedException.d.ts'
import type { FileSystemCapabilities } from '../../../../net/minecraft/util/filefix/FileSystemCapabilities.d.ts'
export class FileFixException extends RuntimeException {
    constructor(cause: Exception, fileSystemCapabilities: FileSystemCapabilities)
    // private fileSystemCapabilities: FileSystemCapabilities;
    createCrashReport(): CrashReport;
    makeReportedException(): ReportedException;
}