import type { File } from '../../java/io/File.d.ts'
import type { IOException } from '../../java/io/IOException.d.ts'
import type { Serializable } from '../../java/io/Serializable.d.ts'
export class FileSystemException extends IOException implements Serializable {
    constructor(file: File, other: File | null, reason: string | null)
    readonly file: File;
    readonly other: File | null;
    readonly reason: string | null;
}