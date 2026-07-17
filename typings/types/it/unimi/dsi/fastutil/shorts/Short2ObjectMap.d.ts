import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Short2ObjectMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ObjectMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Short2ObjectMap<V extends unknown> {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static entry<V extends unknown>(paramarg0: number, paramarg1: V): Short2ObjectMap$Entry<V>;
    static ofEntries<V extends unknown>(...paramarg0: Short2ObjectMap$Entry<V>[]): JavaMap<any, any>;
}