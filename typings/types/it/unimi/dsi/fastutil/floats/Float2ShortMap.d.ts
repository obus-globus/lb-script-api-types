import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Float2ShortMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ShortMap$Entry.d.ts'
export class Float2ShortMap {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static entry(paramarg0: number, paramarg1: number): Float2ShortMap$Entry;
    static ofEntries(...paramarg0: Float2ShortMap$Entry[]): JavaMap<any, any>;
}