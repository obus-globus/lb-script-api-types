import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Float2LongMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2LongMap$Entry.d.ts'
export class Float2LongMap {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static entry(paramarg0: number, paramarg1: number): Float2LongMap$Entry;
    static ofEntries(...paramarg0: Float2LongMap$Entry[]): JavaMap<any, any>;
}