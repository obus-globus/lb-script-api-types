import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Int2LongMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2LongMap$Entry.d.ts'
export class Int2LongMap {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static entry(paramarg0: number, paramarg1: number): Int2LongMap$Entry;
    static ofEntries(...paramarg0: Int2LongMap$Entry[]): JavaMap<any, any>;
}