import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FilterOptions } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/FilterOptions.d.ts'
export abstract class BCJOptions extends FilterOptions {
    static getDecoderMemoryUsage(paramoptions: (Object | null)[]): number;
    static getEncoderMemoryUsage(paramoptions: (Object | null)[]): number;
    constructor(alignment: number)
    // private alignment: number;
    startOffset: number;
    clone(): Object;
    getDecoderMemoryUsage(): number;
    getEncoderMemoryUsage(): number;
    getStartOffset(): number;
    setStartOffset(startOffset: number): void;
}