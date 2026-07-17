import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Reference2IntMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2IntMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Reference2IntMap<K extends unknown> {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static entry<K extends unknown>(paramarg0: K, paramarg1: number): Reference2IntMap$Entry<K>;
    static ofEntries<K extends unknown>(...paramarg0: Reference2IntMap$Entry<K>[]): JavaMap<any, any>;
}