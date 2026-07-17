import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Reference2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ReferenceMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Reference2ReferenceMap<K extends unknown, V extends unknown> {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static entry<K extends unknown, V extends unknown>(paramarg0: K, paramarg1: V): Reference2ReferenceMap$Entry<K, V>;
    static ofEntries<K extends unknown, V extends unknown>(...paramarg0: Reference2ReferenceMap$Entry<K, V>[]): JavaMap<K, V>;
}