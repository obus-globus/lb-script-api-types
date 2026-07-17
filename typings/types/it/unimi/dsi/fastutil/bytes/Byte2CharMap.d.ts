import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Byte2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2CharMap$Entry.d.ts'
export class Byte2CharMap {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static entry(paramarg0: number, paramarg1: string): Byte2CharMap$Entry;
    static ofEntries(...paramarg0: Byte2CharMap$Entry[]): JavaMap<any, any>;
}