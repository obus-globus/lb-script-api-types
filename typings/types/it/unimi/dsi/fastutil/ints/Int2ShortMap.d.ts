import type { Int2ShortMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ShortMap$Entry.d.ts'
export class Int2ShortMap {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static entry(paramarg0: number, paramarg1: number): Int2ShortMap$Entry;
    static ofEntries(...paramarg0: Int2ShortMap$Entry[]): { [key: string]: any };
}