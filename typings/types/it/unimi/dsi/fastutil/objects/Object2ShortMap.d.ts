import type { Object2ShortMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ShortMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2ShortMap<K extends unknown> {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static entry<K extends unknown>(paramarg0: K, paramarg1: number): Object2ShortMap$Entry<K>;
    static ofEntries<K extends unknown>(...paramarg0: Object2ShortMap$Entry<K>[]): { [key: string]: any };
}