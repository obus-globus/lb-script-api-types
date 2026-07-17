import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Float2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ReferenceMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Float2ReferenceMap<V extends unknown> {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static entry<V extends unknown>(paramarg0: number, paramarg1: V): Float2ReferenceMap$Entry<V>;
    static ofEntries<V extends unknown>(...paramarg0: Float2ReferenceMap$Entry<V>[]): JavaMap<any, any>;
}