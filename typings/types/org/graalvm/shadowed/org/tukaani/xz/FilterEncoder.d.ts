import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ArrayCache } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/ArrayCache.d.ts'
import type { FilterCoder } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/FilterCoder.d.ts'
import type { FinishableOutputStream } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/FinishableOutputStream.d.ts'
export interface FilterEncoder extends Object, FilterCoder{
    changesSize(): boolean;
    getFilterID(): number;
    getFilterProps(): number[];
    getOutputStream(out: FinishableOutputStream, arrayCache: ArrayCache): FinishableOutputStream;
    lastOK(): boolean;
    nonLastOK(): boolean;
    supportsFlushing(): boolean;
}