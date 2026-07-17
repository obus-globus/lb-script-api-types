import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Float2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2CharMap$Entry.d.ts'
export class Float2CharMap {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static entry(paramarg0: number, paramarg1: string): Float2CharMap$Entry;
    static ofEntries(...paramarg0: Float2CharMap$Entry[]): JavaMap<any, any>;
}