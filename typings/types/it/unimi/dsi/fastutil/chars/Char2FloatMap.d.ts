import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Char2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2FloatMap$Entry.d.ts'
export class Char2FloatMap {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static entry(paramarg0: string, paramarg1: number): Char2FloatMap$Entry;
    static ofEntries(...paramarg0: Char2FloatMap$Entry[]): JavaMap<any, any>;
}