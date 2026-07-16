import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { ArrayCache } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/ArrayCache.d.ts'
import type { BCJOptions } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/BCJOptions.d.ts'
import type { FilterEncoder } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/FilterEncoder.d.ts'
import type { FilterOptions } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/FilterOptions.d.ts'
import type { FinishableOutputStream } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/FinishableOutputStream.d.ts'
export class RISCVOptions extends BCJOptions {
    static getDecoderMemoryUsage(paramoptions: FilterOptions[]): number;
    static getEncoderMemoryUsage(paramoptions: FilterOptions[]): number;
    constructor()
    getFilterEncoder(): FilterEncoder;
    getInputStream(in_: InputStream): InputStream;
    getInputStream(in_: InputStream, arrayCache: ArrayCache): InputStream;
    getOutputStream(out: FinishableOutputStream): FinishableOutputStream;
    getOutputStream(out: FinishableOutputStream, arrayCache: ArrayCache): FinishableOutputStream;
}