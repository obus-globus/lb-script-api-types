import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Float2IntMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2IntMap$Entry.d.ts'
export class Float2IntMap {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static entry(paramarg0: number, paramarg1: number): Float2IntMap$Entry;
    static ofEntries(...paramarg0: Float2IntMap$Entry[]): JavaMap<any, any>;
}