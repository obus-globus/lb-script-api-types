import type { File } from '../../../../../../java/io/File.d.ts'
import type { URI } from '../../../../../../java/net/URI.d.ts'
import type { URL } from '../../../../../../java/net/URL.d.ts'
import type { Path } from '../../../../../../java/nio/file/Path.d.ts'
import type { PosixFilePermission } from '../../../../../../java/nio/file/attribute/PosixFilePermission.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class FileUtils extends Object {
    static defineFilePosixAttributeView(parampath: Path[][], paramfilePermissions: PosixFilePermission[], paramfileOwner: string, paramfileGroup: string): void;
    static fileFromUri(paramuri: URI): File;
    static getFileExtension(paramfile: File): string;
    static isFile(paramurl: URL): boolean;
    static isFilePosixAttributeViewSupported(): boolean;
    static makeParentDirs(paramfile: File): void;
    static mkdir(paramdir: File, paramcreateDirectoryIfNotExisting: boolean): void;
    private constructor()
}