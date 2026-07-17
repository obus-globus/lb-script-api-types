import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class UnicodeMap<T extends unknown> {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static areEqual(paramarg0: Object, paramarg1: Object): boolean;
    static findCommonPrefix(paramarg0: string, paramarg1: string): number;
    static freeze<T extends unknown>(paramarg0: JavaMap<T, string[]>): JavaMap<T, string[]>;
}