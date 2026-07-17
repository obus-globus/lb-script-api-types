import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Char2ByteMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ByteMap$Entry.d.ts'
export class Char2ByteMap {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static entry(paramarg0: string, paramarg1: number): Char2ByteMap$Entry;
    static ofEntries(...paramarg0: Char2ByteMap$Entry[]): JavaMap<any, any>;
}