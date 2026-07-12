import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { ByteOrderMark } from '../../../../../org/apache/commons/io/ByteOrderMark.d.ts'
import type { BOMInputStream$Builder } from '../../../../../org/apache/commons/io/input/BOMInputStream$Builder.d.ts'
import type { ProxyInputStream } from '../../../../../org/apache/commons/io/input/ProxyInputStream.d.ts'
export class BOMInputStream extends ProxyInputStream {
    static builder(): BOMInputStream$Builder;
    static nullInputStream(): InputStream;
    constructor(arg0: InputStream)
    constructor(arg0: InputStream, ...arg1: ByteOrderMark[])
    constructor(arg0: InputStream, arg1: boolean)
    constructor(arg0: InputStream, arg1: boolean, ...arg2: ByteOrderMark[])
    constructor(arg0: BOMInputStream$Builder, arg1: any)
    // private bomList: ByteOrderMark[];
    // private byteOrderMark: ByteOrderMark;
    // private fbIndex: number;
    // private firstBytes: number[];
    // private include: boolean;
    // private markFbIndex: number;
    // private markedAtStart: boolean;
    // private find(): ByteOrderMark;
    getBOM(): ByteOrderMark;
    getBOMCharsetName(): string;
    hasBOM(): boolean;
    hasBOM(arg0: ByteOrderMark): boolean;
    mark(arg0: number): void;
    // private matches(arg0: ByteOrderMark): boolean;
    read(): number;
    read(arg0: number[]): number;
    read(arg0: number[], arg1: number, arg2: number): number;
    // private readBom(): ByteOrderMark;
    // private readFirstBytes(): number;
    reset(): void;
    skip(arg0: number): number;
}