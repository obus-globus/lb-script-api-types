import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Object2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2FloatMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2FloatMap<K extends unknown> {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static entry<K extends unknown>(paramarg0: K, paramarg1: number): Object2FloatMap$Entry<K>;
    static ofEntries<K extends unknown>(...paramarg0: Object2FloatMap$Entry<K>[]): JavaMap<any, any>;
}