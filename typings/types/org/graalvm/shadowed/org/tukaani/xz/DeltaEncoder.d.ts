import type { ArrayCache } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/ArrayCache.d.ts'
import type { DeltaCoder } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/DeltaCoder.d.ts'
import type { DeltaOptions } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/DeltaOptions.d.ts'
import type { FilterEncoder } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/FilterEncoder.d.ts'
import type { FinishableOutputStream } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/FinishableOutputStream.d.ts'
export class DeltaEncoder extends DeltaCoder implements FilterEncoder {
    static FILTER_ID: number;
    constructor(options: DeltaOptions)
    // private options: DeltaOptions;
    // private props: number[];
    getFilterID(): number;
    getFilterProps(): number[];
    getOutputStream(out: FinishableOutputStream, arrayCache: ArrayCache): FinishableOutputStream;
    supportsFlushing(): boolean;
}