import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { IOBiConsumer } from '../../../../../org/apache/commons/io/function/IOBiConsumer.d.ts'
import type { BoundedInputStream$Builder } from '../../../../../org/apache/commons/io/input/BoundedInputStream$Builder.d.ts'
import type { ProxyInputStream } from '../../../../../org/apache/commons/io/input/ProxyInputStream.d.ts'
export class BoundedInputStream extends ProxyInputStream {
    static builder(): BoundedInputStream$Builder;
    static nullInputStream(): InputStream;
    constructor(arg0: InputStream)
    constructor(arg0: InputStream, arg1: number)
    constructor(arg0: InputStream, arg1: BoundedInputStream$Builder)
    constructor(arg0: BoundedInputStream$Builder)
    readonly count: number;
    // private mark: number;
    readonly maxCount: number;
    // private onMaxCount: (param0: number, param1: number) => void;
    readonly propagateClose: boolean;
    afterRead(arg0: number): void;
    available(): number;
    close(): void;
    getCount(): number;
    getMaxCount(): number;
    getMaxLength(): number;
    getRemaining(): number;
    // private isMaxCount(): boolean;
    isPropagateClose(): boolean;
    mark(arg0: number): void;
    markSupported(): boolean;
    onMaxLength(arg0: number, arg1: number): void;
    read(): number;
    read(arg0: number[]): number;
    read(arg0: number[], arg1: number, arg2: number): number;
    reset(): void;
    setPropagateClose(arg0: boolean): void;
    skip(arg0: number): number;
    // private toReadLen(arg0: number): number;
    toString(): string;
}