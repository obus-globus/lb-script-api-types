import type { Byte2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ReferenceMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Byte2ReferenceMap<V extends unknown> {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static entry<V extends unknown>(paramarg0: number, paramarg1: V): Byte2ReferenceMap$Entry<V>;
    static ofEntries<V extends unknown>(...paramarg0: Byte2ReferenceMap$Entry<V>[]): { [key: string]: any };
}