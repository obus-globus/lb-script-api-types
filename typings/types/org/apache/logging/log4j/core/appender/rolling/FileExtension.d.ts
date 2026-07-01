import type { File } from '../../../../../../../java/io/File.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Action } from '../../../../../../../org/apache/logging/log4j/core/appender/rolling/action/Action.d.ts'
export class FileExtension extends Enum<FileExtension> {
    static BZIP2: FileExtension;
    static DEFLATE: FileExtension;
    static GZ: FileExtension;
    static PACK200: FileExtension;
    static XZ: FileExtension;
    static ZIP: FileExtension;
    static ZSTD: FileExtension;
    static lookup(paramfileExtension: string): FileExtension;
    static lookupForFile(paramfileName: string): FileExtension;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): FileExtension;
    static values(): (Object | null)[];
    constructor(arg2: string, arg3: FileExtension)
    readonly extension: string;
    createCompressAction(renameTo: string, compressedName: string, deleteSource: boolean, compressionLevel: number): Action;
    getExtension(): string;
    isExtensionFor(s: string): boolean;
    length(): number;
    source(fileName: string): File;
    target(fileName: string): File;
    name(): "ZIP" | "GZ" | "BZIP2" | "DEFLATE" | "PACK200" | "XZ" | "ZSTD";
}