import type { Int2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2CharMap$Entry.d.ts'
export class Int2CharMap {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static entry(paramarg0: number, paramarg1: string): Int2CharMap$Entry;
    static ofEntries(...paramarg0: Int2CharMap$Entry[]): { [key: string]: any };
}