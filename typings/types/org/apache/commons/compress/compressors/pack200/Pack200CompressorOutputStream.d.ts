import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { File } from '../../../../../../java/io/File.d.ts'
import type { OutputStream } from '../../../../../../java/io/OutputStream.d.ts'
import type { Path } from '../../../../../../java/nio/file/Path.d.ts'
import type { CompressorOutputStream } from '../../../../../../org/apache/commons/compress/compressors/CompressorOutputStream.d.ts'
import type { AbstractStreamBridge } from '../../../../../../org/apache/commons/compress/compressors/pack200/AbstractStreamBridge.d.ts'
import type { Pack200Strategy } from '../../../../../../org/apache/commons/compress/compressors/pack200/Pack200Strategy.d.ts'
export class Pack200CompressorOutputStream extends CompressorOutputStream<OutputStream> {
    static nullOutputStream(): OutputStream;
    constructor(arg0: OutputStream)
    constructor(arg0: OutputStream, arg1: JavaMap<string, string>)
    constructor(arg0: OutputStream, arg1: Pack200Strategy)
    constructor(arg0: OutputStream, arg1: Pack200Strategy, arg2: JavaMap<string, string>)
    // private abstractStreamBridge: AbstractStreamBridge;
    // private properties: JavaMap<string, string>;
    close(): void;
    finish(): void;
    write(arg0: File): number;
    write(arg0: Path): number;
    write(arg0: number[]): void;
    write(arg0: number[], arg1: number, arg2: number): void;
    write(arg0: number): void;
}