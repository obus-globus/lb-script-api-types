import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../../../../java/io/OutputStream.d.ts'
import type { PrintWriter } from '../../../../../../java/io/PrintWriter.d.ts'
import type { JarOutputStream } from '../../../../../../java/util/jar/JarOutputStream.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AttrDefinitionBands } from '../../../../../../org/apache/commons/compress/harmony/unpack200/AttrDefinitionBands.d.ts'
import type { BcBands } from '../../../../../../org/apache/commons/compress/harmony/unpack200/BcBands.d.ts'
import type { ClassBands } from '../../../../../../org/apache/commons/compress/harmony/unpack200/ClassBands.d.ts'
import type { CpBands } from '../../../../../../org/apache/commons/compress/harmony/unpack200/CpBands.d.ts'
import type { FileBands } from '../../../../../../org/apache/commons/compress/harmony/unpack200/FileBands.d.ts'
import type { IcBands } from '../../../../../../org/apache/commons/compress/harmony/unpack200/IcBands.d.ts'
import type { IcTuple } from '../../../../../../org/apache/commons/compress/harmony/unpack200/IcTuple.d.ts'
import type { SegmentConstantPool } from '../../../../../../org/apache/commons/compress/harmony/unpack200/SegmentConstantPool.d.ts'
import type { SegmentHeader } from '../../../../../../org/apache/commons/compress/harmony/unpack200/SegmentHeader.d.ts'
import type { ClassFile } from '../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/ClassFile.d.ts'
export class Segment extends Object {
    static LOG_LEVEL_QUIET: number;
    static LOG_LEVEL_STANDARD: number;
    static LOG_LEVEL_VERBOSE: number;
    constructor()
    // private attrDefinitionBands: AttrDefinitionBands;
    // private bcBands: BcBands;
    // private classBands: ClassBands;
    // private classFilesContents: number[][];
    // private cpBands: CpBands;
    // private deflateHint: boolean;
    // private doPreRead: boolean;
    // private fileBands: FileBands;
    // private fileDeflate: (Object | null)[];
    // private fileIsClass: (Object | null)[];
    // private header: SegmentHeader;
    // private icBands: IcBands;
    // private internalBuffer: InputStream;
    readonly logLevel: number;
    // private logPrintWriter: PrintWriter;
    // private overrideDeflateHint: boolean;
    // private buildClassFile(arg0: number): ClassFile;
    // private computeIcStored(arg0: IcTuple[], arg1: IcTuple[]): IcTuple[];
    getAttrDefinitionBands(): AttrDefinitionBands;
    getClassBands(): ClassBands;
    getConstantPool(): SegmentConstantPool;
    getCpBands(): CpBands;
    getIcBands(): IcBands;
    getSegmentHeader(): SegmentHeader;
    log(arg0: number, arg1: string): void;
    overrideDeflateHint(arg0: boolean): void;
    // private parseSegment(): void;
    // private readSegment(arg0: InputStream): void;
    setLogLevel(arg0: number): void;
    setLogStream(arg0: OutputStream): void;
    setPreRead(arg0: boolean): void;
    unpack(arg0: InputStream, arg1: JarOutputStream): void;
    unpackProcess(): void;
    unpackRead(arg0: InputStream): void;
    unpackWrite(arg0: JarOutputStream): void;
    writeJar(arg0: JarOutputStream): void;
}