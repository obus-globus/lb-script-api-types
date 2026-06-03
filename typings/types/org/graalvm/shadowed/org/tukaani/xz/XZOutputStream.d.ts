import type { IOException } from '../../../../../../java/io/IOException.d.ts'
import type { OutputStream } from '../../../../../../java/io/OutputStream.d.ts'
import type { ArrayCache } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/ArrayCache.d.ts'
import type { BlockOutputStream } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/BlockOutputStream.d.ts'
import type { FilterEncoder } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/FilterEncoder.d.ts'
import type { FilterOptions } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/FilterOptions.d.ts'
import type { FinishableOutputStream } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/FinishableOutputStream.d.ts'
import type { Check } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/check/Check.d.ts'
import type { StreamFlags } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/common/StreamFlags.d.ts'
import type { IndexEncoder } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/index/IndexEncoder.d.ts'
export class XZOutputStream extends FinishableOutputStream {
    static nullOutputStream(): OutputStream;
    constructor(out: OutputStream, filterOptions: FilterOptions[])
    constructor(out: OutputStream, filterOptions: FilterOptions[], checkType: number)
    constructor(out: OutputStream, filterOptions: FilterOptions[], checkType: number, arrayCache: ArrayCache)
    constructor(out: OutputStream, filterOptions: FilterOptions[], arrayCache: ArrayCache)
    constructor(out: OutputStream, filterOptions: FilterOptions)
    constructor(out: OutputStream, filterOptions: FilterOptions, checkType: number)
    constructor(out: OutputStream, filterOptions: FilterOptions, checkType: number, arrayCache: ArrayCache)
    constructor(out: OutputStream, filterOptions: FilterOptions, arrayCache: ArrayCache)
    // private arrayCache: ArrayCache;
    // private blockEncoder: BlockOutputStream;
    // private check: Check;
    // private exception: IOException;
    // private filters: FilterEncoder[];
    // private filtersSupportFlushing: boolean;
    // private finished: boolean;
    // private index: IndexEncoder;
    // private out: OutputStream;
    // private streamFlags: StreamFlags;
    // private tempBuf: number[];
    close(): void;
    // private encodeStreamFlags(buf: number[], off: number): void;
    // private encodeStreamFooter(): void;
    // private encodeStreamHeader(): void;
    endBlock(): void;
    finish(): void;
    flush(): void;
    // private setFiltersForNextBlock(filterOptions: FilterOptions[]): void;
    updateFilters(filterOptions: FilterOptions[]): void;
    updateFilters(filterOptions: FilterOptions): void;
    write(arg0: number[]): void;
    write(buf: number[], off: number, len: number): void;
    write(b: number): void;
}