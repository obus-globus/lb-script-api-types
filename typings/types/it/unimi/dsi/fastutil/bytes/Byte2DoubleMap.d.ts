import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Byte2DoubleMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2DoubleMap$Entry.d.ts'
export class Byte2DoubleMap {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static entry(paramarg0: number, paramarg1: number): Byte2DoubleMap$Entry;
    static ofEntries(...paramarg0: Byte2DoubleMap$Entry[]): JavaMap<any, any>;
}