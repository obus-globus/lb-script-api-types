import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Int2ByteMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ByteMap$Entry.d.ts'
export class Int2ByteMap {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static entry(paramarg0: number, paramarg1: number): Int2ByteMap$Entry;
    static ofEntries(...paramarg0: Int2ByteMap$Entry[]): JavaMap<any, any>;
}