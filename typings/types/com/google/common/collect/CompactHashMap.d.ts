import type { Object } from '../../../../java/lang/Object.d.ts'
export class CompactHashMap<K extends unknown, V extends unknown> {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static create<K extends unknown, V extends unknown>(): Map<K, V>;
    static createWithExpectedSize<K extends unknown, V extends unknown>(paramexpectedSize: number): Map<K, V>;
}