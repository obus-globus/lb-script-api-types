import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class WinioctlUtil extends Object {
    static FSCTL_DELETE_REPARSE_POINT: number;
    static FSCTL_GET_COMPRESSION: number;
    static FSCTL_GET_REPARSE_POINT: number;
    static FSCTL_SET_COMPRESSION: number;
    static FSCTL_SET_REPARSE_POINT: number;
    static CTL_CODE(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): number;
    constructor()
}