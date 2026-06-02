import type { Exception } from '../../../../java/lang/Exception.d.ts'
import type { CrashReport } from '../../../../net/minecraft/CrashReport.d.ts'
import type { FileFixException } from '../../../../net/minecraft/util/filefix/FileFixException.d.ts'
import type { FileSystemCapabilities } from '../../../../net/minecraft/util/filefix/FileSystemCapabilities.d.ts'
import type { FileMove } from '../../../../net/minecraft/util/filefix/virtualfilesystem/FileMove.d.ts'
export class AbortedFileFixException extends FileFixException {
    constructor(cause: Exception)
    constructor(cause: Exception, notRevertedMoves: FileMove[], fileSystemCapabilities: FileSystemCapabilities)
    // private notRevertedMoves: FileMove[];
    createCrashReport(): CrashReport;
    notRevertedMoves(): FileMove[];
}