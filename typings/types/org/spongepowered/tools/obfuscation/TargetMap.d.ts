import type { Object } from '../../../../java/lang/Object.d.ts'
export class TargetMap {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static create(paramarg0: string): { [key: string]: any };
    static newHashMap<K extends unknown, V extends unknown>(paramarg0: number): Map<K, V>;
}