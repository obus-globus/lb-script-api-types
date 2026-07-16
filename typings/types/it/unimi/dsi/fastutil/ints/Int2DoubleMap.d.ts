import type { Int2DoubleMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2DoubleMap$Entry.d.ts'
export class Int2DoubleMap {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static entry(paramarg0: number, paramarg1: number): Int2DoubleMap$Entry;
    static ofEntries(...paramarg0: Int2DoubleMap$Entry[]): { [key: string]: any };
}