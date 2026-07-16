import type { Object2DoubleMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2DoubleMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2DoubleMap<K extends unknown> {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static entry<K extends unknown>(paramarg0: K, paramarg1: number): Object2DoubleMap$Entry<K>;
    static ofEntries<K extends unknown>(...paramarg0: Object2DoubleMap$Entry<K>[]): { [key: string]: any };
}