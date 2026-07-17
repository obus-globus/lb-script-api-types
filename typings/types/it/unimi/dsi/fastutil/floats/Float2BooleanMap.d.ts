import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Float2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2BooleanMap$Entry.d.ts'
export class Float2BooleanMap {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static entry(paramarg0: number, paramarg1: boolean): Float2BooleanMap$Entry;
    static ofEntries(...paramarg0: Float2BooleanMap$Entry[]): JavaMap<any, any>;
}