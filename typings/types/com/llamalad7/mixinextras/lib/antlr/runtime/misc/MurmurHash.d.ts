import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class MurmurHash extends Object {
    static finish(paramarg0: number, paramarg1: number): number;
    static hashCode(paramarg0: (Object | null)[], paramarg1: number): number;
    static initialize(): number;
    static initialize(paramarg0: number): number;
    static update(paramarg0: number, paramarg1: number): number;
    static update(paramarg0: number, paramarg1: Object): number;
}