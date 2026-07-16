import type { Object } from '../../../../../java/lang/Object.d.ts'
export class LRUCache<K extends unknown, V extends unknown> {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static newHashMap<K extends unknown, V extends unknown>(paramarg0: number): Map<K, V>;
    static newLinkedHashMap<K extends unknown, V extends unknown>(paramarg0: number): Map<K, V>;
}