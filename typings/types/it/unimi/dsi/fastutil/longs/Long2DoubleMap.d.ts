import type { Long2DoubleMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2DoubleMap$Entry.d.ts'
export class Long2DoubleMap {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static entry(paramarg0: number, paramarg1: number): Long2DoubleMap$Entry;
    static ofEntries(...paramarg0: Long2DoubleMap$Entry[]): { [key: string]: any };
}