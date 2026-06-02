import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ArrayCache } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/ArrayCache.d.ts'
import type { FilterCoder } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/FilterCoder.d.ts'
export interface FilterDecoder extends Object, FilterCoder{
    getInputStream(in_: InputStream, arrayCache: ArrayCache): InputStream;
    getMemoryUsage(): number;
}