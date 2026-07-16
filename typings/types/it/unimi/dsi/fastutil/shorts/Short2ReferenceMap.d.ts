import type { Short2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ReferenceMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Short2ReferenceMap<V extends unknown> {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static entry<V extends unknown>(paramarg0: number, paramarg1: V): Short2ReferenceMap$Entry<V>;
    static ofEntries<V extends unknown>(...paramarg0: Short2ReferenceMap$Entry<V>[]): { [key: string]: any };
}