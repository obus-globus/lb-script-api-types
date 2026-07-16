import type { Int2IntMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2IntMap$Entry.d.ts'
export class Int2IntMap {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static entry(paramarg0: number, paramarg1: number): Int2IntMap$Entry;
    static ofEntries(...paramarg0: Int2IntMap$Entry[]): { [key: string]: any };
}