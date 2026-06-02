import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class DumpArchiveUtil extends Object {
    static calculateChecksum(paramarg0: number[]): number;
    static convert16(paramarg0: number[], paramarg1: number): number;
    static convert32(paramarg0: number[], paramarg1: number): number;
    static convert64(paramarg0: number[], paramarg1: number): number;
    static getIno(paramarg0: number[]): number;
    static verify(paramarg0: number[]): boolean;
    private constructor()
}