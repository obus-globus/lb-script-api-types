import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ArrayCache } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/ArrayCache.d.ts'
import type { FilterEncoder } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/FilterEncoder.d.ts'
import type { FilterOptions } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/FilterOptions.d.ts'
import type { FinishableOutputStream } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/FinishableOutputStream.d.ts'
export class DeltaOptions extends FilterOptions {
    static DISTANCE_MAX: number;
    static DISTANCE_MIN: number;
    static getDecoderMemoryUsage(paramoptions: FilterOptions[]): number;
    static getEncoderMemoryUsage(paramoptions: FilterOptions[]): number;
    constructor()
    constructor(distance: number)
    readonly distance: number;
    clone(): Object;
    getDecoderMemoryUsage(): number;
    getDistance(): number;
    getEncoderMemoryUsage(): number;
    getFilterEncoder(): FilterEncoder;
    getInputStream(in_: InputStream): InputStream;
    getInputStream(in_: InputStream, arrayCache: ArrayCache): InputStream;
    getOutputStream(out: FinishableOutputStream): FinishableOutputStream;
    getOutputStream(out: FinishableOutputStream, arrayCache: ArrayCache): FinishableOutputStream;
    setDistance(distance: number): void;
}