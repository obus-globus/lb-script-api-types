import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class UnmodifiableArrayBackedMap {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static EMPTY_MAP: { [key: string]: any };
    static getMap(parambackingArray: Object[]): { [key: string]: any };
}