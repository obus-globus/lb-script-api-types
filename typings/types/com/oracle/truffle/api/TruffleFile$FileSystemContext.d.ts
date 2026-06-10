import type { TruffleFile$FileTypeDetector } from '../../../../com/oracle/truffle/api/TruffleFile$FileTypeDetector.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FileSystem } from '../../../../org/graalvm/polyglot/io/FileSystem.d.ts'
export class TruffleFile$FileSystemContext extends Object {
    constructor(engineFileSystemContext: Object, fileSystem: FileSystem)
    // private engineObject: Object;
    // private fileSystem: FileSystem;
    // private fileTypeDetectors: { [key: string]: TruffleFile$FileTypeDetector[] };
    getFileTypeDetectors(mimeTypes: string[]): TruffleFile$FileTypeDetector[];
}