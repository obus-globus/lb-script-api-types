import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Long2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2CharMap$Entry.d.ts'
export class Long2CharMap {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static entry(paramarg0: number, paramarg1: string): Long2CharMap$Entry;
    static ofEntries(...paramarg0: Long2CharMap$Entry[]): JavaMap<any, any>;
}