import type { Reference2ByteMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ByteMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Reference2ByteMap<K extends unknown> {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static entry<K extends unknown>(paramarg0: K, paramarg1: number): Reference2ByteMap$Entry<K>;
    static ofEntries<K extends unknown>(...paramarg0: Reference2ByteMap$Entry<K>[]): { [key: string]: any };
}