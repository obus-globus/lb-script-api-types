import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Byte2LongMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2LongMap$Entry.d.ts'
export class Byte2LongMap {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static entry(paramarg0: number, paramarg1: number): Byte2LongMap$Entry;
    static ofEntries(...paramarg0: Byte2LongMap$Entry[]): JavaMap<any, any>;
}