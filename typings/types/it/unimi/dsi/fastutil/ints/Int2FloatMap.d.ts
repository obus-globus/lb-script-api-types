import type { Int2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2FloatMap$Entry.d.ts'
export class Int2FloatMap {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static entry(paramarg0: number, paramarg1: number): Int2FloatMap$Entry;
    static ofEntries(...paramarg0: Int2FloatMap$Entry[]): { [key: string]: any };
}