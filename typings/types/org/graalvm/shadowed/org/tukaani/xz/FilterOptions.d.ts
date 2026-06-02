import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../../java/lang/Cloneable.d.ts'
import type { ArrayCache } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/ArrayCache.d.ts'
import type { FilterEncoder } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/FilterEncoder.d.ts'
import type { FinishableOutputStream } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/FinishableOutputStream.d.ts'
export abstract class FilterOptions extends Object implements Cloneable {
    static getDecoderMemoryUsage(paramoptions: (Object | null)[]): number;
    static getEncoderMemoryUsage(paramoptions: (Object | null)[]): number;
    constructor()
    protected clone(): Object;
    getDecoderMemoryUsage(): number;
    getEncoderMemoryUsage(): number;
    getFilterEncoder(): FilterEncoder;
    getInputStream(in_: InputStream): InputStream;
    getInputStream(in_: InputStream, arrayCache: ArrayCache): InputStream;
    getOutputStream(out: FinishableOutputStream): FinishableOutputStream;
    getOutputStream(out: FinishableOutputStream, arrayCache: ArrayCache): FinishableOutputStream;
}