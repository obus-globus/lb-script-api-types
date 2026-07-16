import type { Object2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2BooleanMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2BooleanMap<K extends unknown> {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static entry<K extends unknown>(paramarg0: K, paramarg1: boolean): Object2BooleanMap$Entry<K>;
    static ofEntries<K extends unknown>(...paramarg0: Object2BooleanMap$Entry<K>[]): { [key: string]: any };
}