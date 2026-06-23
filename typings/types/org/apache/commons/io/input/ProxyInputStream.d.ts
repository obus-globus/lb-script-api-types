import type { FilterInputStream } from '../../../../../java/io/FilterInputStream.d.ts'
import type { IOException } from '../../../../../java/io/IOException.d.ts'
import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { IOConsumer } from '../../../../../org/apache/commons/io/function/IOConsumer.d.ts'
import type { IOIntConsumer } from '../../../../../org/apache/commons/io/function/IOIntConsumer.d.ts'
import type { ProxyInputStream$AbstractBuilder } from '../../../../../org/apache/commons/io/input/ProxyInputStream$AbstractBuilder.d.ts'
export abstract class ProxyInputStream extends FilterInputStream {
    static nullInputStream(): InputStream;
    constructor(arg0: InputStream)
    constructor(arg0: InputStream, arg1: ProxyInputStream$AbstractBuilder<Object, any>)
    constructor(arg0: ProxyInputStream$AbstractBuilder<Object, any>)
    // private afterRead: (param0: number) => void;
    // private closed: boolean;
    // private exceptionHandler: (param0: IOException) => void;
    afterRead(arg0: number): void;
    available(): number;
    beforeRead(arg0: number): void;
    checkOpen(): void;
    close(): void;
    handleIOException(arg0: IOException): void;
    isClosed(): boolean;
    mark(arg0: number): void;
    markSupported(): boolean;
    read(): number;
    read(arg0: number[]): number;
    read(arg0: number[], arg1: number, arg2: number): number;
    reset(): void;
    setReference(arg0: InputStream): ProxyInputStream;
    skip(arg0: number): number;
    unwrap(): InputStream;
}