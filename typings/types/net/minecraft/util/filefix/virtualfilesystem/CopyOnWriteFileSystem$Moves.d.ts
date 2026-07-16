import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FileMove } from '../../../../../net/minecraft/util/filefix/virtualfilesystem/FileMove.d.ts'
export class CopyOnWriteFileSystem$Moves extends Record {
    constructor(directories: Path[], copiedFiles: FileMove[], preexistingFiles: FileMove[])
    // private copiedFiles: FileMove[];
    // private directories: Path[];
    // private preexistingFiles: FileMove[];
    copiedFiles(): FileMove[];
    directories(): Path[];
    equals(o: Object | null): boolean;
    hashCode(): number;
    preexistingFiles(): FileMove[];
    toString(): string;
}