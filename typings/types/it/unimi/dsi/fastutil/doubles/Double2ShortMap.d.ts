import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Double2ShortMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ShortMap$Entry.d.ts'
export class Double2ShortMap {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static entry(paramarg0: number, paramarg1: number): Double2ShortMap$Entry;
    static ofEntries(...paramarg0: Double2ShortMap$Entry[]): JavaMap<any, any>;
}