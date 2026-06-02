import type { File } from '../../java/io/File.d.ts'
import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { FileSystemException } from '../../kotlin/io/FileSystemException.d.ts'
export class AccessDeniedException extends FileSystemException implements Serializable {
    constructor(file: File, other: File | null, reason: string | null)
}