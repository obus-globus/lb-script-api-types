import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { ArrayCache } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/ArrayCache.d.ts'
import type { DeltaCoder } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/DeltaCoder.d.ts'
import type { FilterDecoder } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/FilterDecoder.d.ts'
export class DeltaDecoder extends DeltaCoder implements FilterDecoder {
    static FILTER_ID: number;
    constructor(props: number[])
    // private distance: number;
    getInputStream(in_: InputStream, arrayCache: ArrayCache): InputStream;
    getMemoryUsage(): number;
}