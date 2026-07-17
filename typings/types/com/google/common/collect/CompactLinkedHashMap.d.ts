import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class CompactLinkedHashMap<K extends unknown, V extends unknown> {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static create<K extends unknown, V extends unknown>(): JavaMap<K, V>;
    static createWithExpectedSize<K extends unknown, V extends unknown>(paramexpectedSize: number): JavaMap<K, V>;
}