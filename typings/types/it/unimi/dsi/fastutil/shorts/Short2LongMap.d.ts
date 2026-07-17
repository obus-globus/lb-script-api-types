import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Short2LongMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2LongMap$Entry.d.ts'
export class Short2LongMap {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static entry(paramarg0: number, paramarg1: number): Short2LongMap$Entry;
    static ofEntries(...paramarg0: Short2LongMap$Entry[]): JavaMap<any, any>;
}