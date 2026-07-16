import type { Long2IntMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2IntMap$Entry.d.ts'
export class Long2IntMap {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static entry(paramarg0: number, paramarg1: number): Long2IntMap$Entry;
    static ofEntries(...paramarg0: Long2IntMap$Entry[]): { [key: string]: any };
}