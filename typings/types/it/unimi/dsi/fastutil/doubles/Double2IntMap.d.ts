import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Double2IntMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2IntMap$Entry.d.ts'
export class Double2IntMap {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static entry(paramarg0: number, paramarg1: number): Double2IntMap$Entry;
    static ofEntries(...paramarg0: Double2IntMap$Entry[]): JavaMap<any, any>;
}