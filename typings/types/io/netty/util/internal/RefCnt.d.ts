import type { Object } from '../../../../java/lang/Object.d.ts'
export class RefCnt extends Object {
    static isLiveNonVolatile(paramarg0: RefCnt): boolean;
    static refCnt(paramarg0: RefCnt): number;
    static release(paramarg0: RefCnt): boolean;
    static release(paramarg0: RefCnt, paramarg1: number): boolean;
    static resetRefCnt(paramarg0: RefCnt): void;
    static retain(paramarg0: RefCnt): void;
    static retain(paramarg0: RefCnt, paramarg1: number): void;
    static setRefCnt(paramarg0: RefCnt, paramarg1: number): void;
    constructor()
    // private value: number;
}