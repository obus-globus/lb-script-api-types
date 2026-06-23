import type { FileOutputStream } from '../../../../../../java/io/FileOutputStream.d.ts'
import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { Path } from '../../../../../../java/nio/file/Path.d.ts'
import type { JarOutputStream } from '../../../../../../java/util/jar/JarOutputStream.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BoundedInputStream } from '../../../../../../org/apache/commons/io/input/BoundedInputStream.d.ts'
export class Archive extends Object {
    constructor(arg0: InputStream, arg1: JarOutputStream)
    constructor(arg0: string, arg1: string)
    // private closeStreams: boolean;
    readonly deflateHint: boolean;
    // private inputPath: Path[];
    // private inputSize: number;
    // private inputStream: BoundedInputStream;
    readonly logFile: FileOutputStream;
    // private logLevel: number;
    // private outputFileName: string;
    // private outputStream: JarOutputStream;
    // private overrideDeflateHint: boolean;
    readonly removePackFile: boolean;
    // private available(arg0: InputStream): boolean;
    setDeflateHint(arg0: boolean): void;
    setLogFile(arg0: string): void;
    setLogFile(arg0: string, arg1: boolean): void;
    setQuiet(arg0: boolean): void;
    setRemovePackFile(arg0: boolean): void;
    setVerbose(arg0: boolean): void;
    unpack(): void;
}