import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { File } from '../../../../../../java/io/File.d.ts'
import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { CompressorInputStream } from '../../../../../../org/apache/commons/compress/compressors/CompressorInputStream.d.ts'
import type { AbstractStreamBridge } from '../../../../../../org/apache/commons/compress/compressors/pack200/AbstractStreamBridge.d.ts'
import type { Pack200Strategy } from '../../../../../../org/apache/commons/compress/compressors/pack200/Pack200Strategy.d.ts'
export class Pack200CompressorInputStream extends CompressorInputStream {
    static matches(paramarg0: number[], paramarg1: number): boolean;
    static nullInputStream(): InputStream;
    constructor(arg0: File)
    constructor(arg0: File, arg1: JavaMap<string, string>)
    constructor(arg0: File, arg1: Pack200Strategy)
    constructor(arg0: File, arg1: Pack200Strategy, arg2: JavaMap<string, string>)
    constructor(arg0: InputStream)
    constructor(arg0: InputStream, arg1: JavaMap<string, string>)
    constructor(arg0: InputStream, arg1: Pack200Strategy)
    constructor(arg0: InputStream, arg1: Pack200Strategy, arg2: JavaMap<string, string>)
    // private abstractStreamBridge: AbstractStreamBridge;
    // private originalInputStream: InputStream;
    available(): number;
    close(): void;
    // private getInputStream(): InputStream;
    mark(arg0: number): void;
    markSupported(): boolean;
    read(): number;
    read(arg0: number[]): number;
    read(arg0: number[], arg1: number, arg2: number): number;
    reset(): void;
    skip(arg0: number): number;
}