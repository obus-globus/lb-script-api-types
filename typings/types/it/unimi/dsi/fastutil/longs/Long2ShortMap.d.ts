import type { Long2ShortMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ShortMap$Entry.d.ts'
export class Long2ShortMap {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static entry(paramarg0: number, paramarg1: number): Long2ShortMap$Entry;
    static ofEntries(...paramarg0: Long2ShortMap$Entry[]): { [key: string]: any };
}