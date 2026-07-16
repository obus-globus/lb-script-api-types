import type { Long2LongMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2LongMap$Entry.d.ts'
export class Long2LongMap {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static entry(paramarg0: number, paramarg1: number): Long2LongMap$Entry;
    static ofEntries(...paramarg0: Long2LongMap$Entry[]): { [key: string]: any };
}