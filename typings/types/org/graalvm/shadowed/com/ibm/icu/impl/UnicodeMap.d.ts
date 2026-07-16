import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class UnicodeMap<T extends unknown> {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static areEqual(parama: Object, paramb: Object): boolean;
    static findCommonPrefix(paramlast: string, params: string): number;
    static freeze<T extends unknown>(paramtarget: Map<T, string[]>): Map<T, string[]>;
}