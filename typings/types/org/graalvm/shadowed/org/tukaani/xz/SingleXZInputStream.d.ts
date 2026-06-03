import type { IOException } from '../../../../../../java/io/IOException.d.ts'
import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { ArrayCache } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/ArrayCache.d.ts'
import type { BlockInputStream } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/BlockInputStream.d.ts'
import type { Check } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/check/Check.d.ts'
import type { StreamFlags } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/common/StreamFlags.d.ts'
import type { IndexHash } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/index/IndexHash.d.ts'
export class SingleXZInputStream extends InputStream {
    static nullInputStream(): InputStream;
    constructor(in_: InputStream)
    constructor(in_: InputStream, memoryLimit: number)
    constructor(in_: InputStream, memoryLimit: number, verifyCheck: boolean)
    constructor(in_: InputStream, memoryLimit: number, verifyCheck: boolean, streamHeader: number[], arrayCache: ArrayCache)
    constructor(in_: InputStream, memoryLimit: number, verifyCheck: boolean, arrayCache: ArrayCache)
    constructor(in_: InputStream, memoryLimit: number, arrayCache: ArrayCache)
    constructor(in_: InputStream, arrayCache: ArrayCache)
    // private arrayCache: ArrayCache;
    // private blockDecoder: BlockInputStream;
    // private check: Check;
    // private endReached: boolean;
    // private exception: IOException;
    // private in: InputStream;
    // private indexHash: IndexHash;
    // private memoryLimit: number;
    // private streamHeaderFlags: StreamFlags;
    // private tempBuf: number[];
    // private verifyCheck: boolean;
    available(): number;
    close(): void;
    close(closeInput: boolean): void;
    getCheckName(): string;
    getCheckType(): number;
    read(): number;
    read(arg0: number[]): number;
    read(buf: number[], off: number, len: number): number;
    // private validateStreamFooter(): void;
}