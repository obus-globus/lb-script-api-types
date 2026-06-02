import type { FileFixException } from '../../../../net/minecraft/util/filefix/FileFixException.d.ts'
import type { FileSystemCapabilities } from '../../../../net/minecraft/util/filefix/FileSystemCapabilities.d.ts'
export class AtomicMoveNotSupportedFileFixException extends FileFixException {
    constructor(fileSystemCapabilities: FileSystemCapabilities)
}