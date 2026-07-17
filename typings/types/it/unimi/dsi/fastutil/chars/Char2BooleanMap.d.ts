import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Char2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2BooleanMap$Entry.d.ts'
export class Char2BooleanMap {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static entry(paramarg0: string, paramarg1: boolean): Char2BooleanMap$Entry;
    static ofEntries(...paramarg0: Char2BooleanMap$Entry[]): JavaMap<any, any>;
}