import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Double2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2CharMap$Entry.d.ts'
export class Double2CharMap {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static entry(paramarg0: number, paramarg1: string): Double2CharMap$Entry;
    static ofEntries(...paramarg0: Double2CharMap$Entry[]): JavaMap<any, any>;
}