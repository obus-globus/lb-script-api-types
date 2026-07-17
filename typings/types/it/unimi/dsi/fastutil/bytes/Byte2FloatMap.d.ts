import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Byte2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2FloatMap$Entry.d.ts'
export class Byte2FloatMap {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static entry(paramarg0: number, paramarg1: number): Byte2FloatMap$Entry;
    static ofEntries(...paramarg0: Byte2FloatMap$Entry[]): JavaMap<any, any>;
}