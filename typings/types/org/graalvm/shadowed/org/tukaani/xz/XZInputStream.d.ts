import type { IOException } from '../../../../../../java/io/IOException.d.ts'
import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { ArrayCache } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/ArrayCache.d.ts'
import type { SingleXZInputStream } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/SingleXZInputStream.d.ts'
export class XZInputStream extends InputStream {
    static nullInputStream(): InputStream;
    constructor(in_: InputStream)
    constructor(in_: InputStream, memoryLimit: number)
    constructor(in_: InputStream, memoryLimit: number, verifyCheck: boolean)
    constructor(in_: InputStream, memoryLimit: number, verifyCheck: boolean, arrayCache: ArrayCache)
    constructor(in_: InputStream, memoryLimit: number, arrayCache: ArrayCache)
    constructor(in_: InputStream, arrayCache: ArrayCache)
    // private arrayCache: ArrayCache;
    // private endReached: boolean;
    // private exception: IOException;
    // private in: InputStream;
    // private memoryLimit: number;
    // private tempBuf: number[];
    // private verifyCheck: boolean;
    // private xzIn: SingleXZInputStream;
    available(): number;
    close(): void;
    close(closeInput: boolean): void;
    // private prepareNextStream(): void;
    read(): number;
    read(buf: number[], off: number, len: number): number;
}