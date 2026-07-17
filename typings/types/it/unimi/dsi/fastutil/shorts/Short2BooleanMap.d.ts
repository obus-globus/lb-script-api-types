import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Short2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2BooleanMap$Entry.d.ts'
export class Short2BooleanMap {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static entry(paramarg0: number, paramarg1: boolean): Short2BooleanMap$Entry;
    static ofEntries(...paramarg0: Short2BooleanMap$Entry[]): JavaMap<any, any>;
}