import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Char2DoubleMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2DoubleMap$Entry.d.ts'
export class Char2DoubleMap {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static entry(paramarg0: string, paramarg1: number): Char2DoubleMap$Entry;
    static ofEntries(...paramarg0: Char2DoubleMap$Entry[]): JavaMap<any, any>;
}